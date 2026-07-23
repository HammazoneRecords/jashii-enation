import { useState } from 'react';
import type { FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { SITE_SLUG, ARTIST_NAME, getProduct } from '../interest-catalog';

interface Props {
  productId: string;
  className?: string;
}

const ENDPOINT = (import.meta.env.VITE_INTEREST_API as string | undefined) ?? '';

export default function PreOrderCapture({ productId, className }: Props) {
  const product = getProduct(productId);
  if (!product) return null;

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [variant, setVariant] = useState(product.variants[0] ?? '');
  const [priceTierKey, setPriceTierKey] = useState(product.priceTiers[0].key);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const priceTier = product!.priceTiers.find(t => t.key === priceTierKey)!;
    const payload = {
      siteSlug: SITE_SLUG,
      artistName: ARTIST_NAME,
      productId: product!.id,
      productName: product!.name,
      variant,
      email,
      location,
      priceTierKey: priceTier.key,
      priceTierLabel: priceTier.label,
      brandedMerchInterest: false,
    };

    try {
      if (ENDPOINT) {
        const res = await fetch(`${ENDPOINT}/v1/interest`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
      } else {
        console.log('[PreOrderCapture — stub]', payload);
        await new Promise(r => setTimeout(r, 500));
      }
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`bg-jamaica-black text-off-white font-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-jamaica-green transition-colors ${className ?? ''}`}
      >
        Register Interest
      </button>
    );
  }

  if (done) {
    return (
      <div className={`bg-jamaica-green/10 border border-jamaica-green/30 p-5 text-center ${className ?? ''}`}>
        <Check className="w-5 h-5 text-jamaica-green mx-auto mb-2" />
        <p className="font-black text-xs uppercase tracking-widest text-jamaica-green">Interest Logged</p>
        <p className="text-xs text-jamaica-black/40 mt-2">We'll reach out when it drops.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`space-y-3 bg-white border border-jamaica-black/10 p-4 ${className ?? ''}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full bg-white border border-jamaica-black/20 px-3 py-2 font-mono text-xs text-jamaica-black placeholder:text-jamaica-black/30 outline-none focus:border-jamaica-green"
      />
      <input
        type="text"
        required
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Location (parish / city)"
        className="w-full bg-white border border-jamaica-black/20 px-3 py-2 font-mono text-xs text-jamaica-black placeholder:text-jamaica-black/30 outline-none focus:border-jamaica-green"
      />
      {product.variants.length > 1 && (
        <select
          value={variant}
          onChange={e => setVariant(e.target.value)}
          className="w-full bg-white border border-jamaica-black/20 px-3 py-2 font-mono text-xs text-jamaica-black outline-none focus:border-jamaica-green"
        >
          {product.variants.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      )}
      <fieldset>
        <legend className="font-mono text-[10px] uppercase tracking-widest text-jamaica-black/50 mb-2">Price you'd pay</legend>
        <div className="space-y-1.5">
          {product.priceTiers.map(t => (
            <label key={t.key} className="flex items-center gap-2 font-mono text-xs text-jamaica-black/70 cursor-pointer">
              <input
                type="radio"
                name="priceTier"
                value={t.key}
                checked={priceTierKey === t.key}
                onChange={() => setPriceTierKey(t.key)}
                className="accent-jamaica-green"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>
      {error && <p className="font-mono text-[10px] text-red-600">{error}</p>}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 font-mono text-xs uppercase tracking-widest border border-jamaica-black/20 py-2 text-jamaica-black/50 hover:bg-jamaica-black/5 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-jamaica-green text-white font-black text-xs uppercase tracking-widest py-2 hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {submitting ? <Loader2 className="w-3 h-3 animate-spin" /> : null}
          Submit
        </button>
      </div>
    </form>
  );
}
