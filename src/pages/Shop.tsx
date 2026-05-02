import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Shop() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Working Draft Banner */}
      <div className="w-full bg-jamaica-black text-jamaica-yellow text-center text-xs font-mono tracking-widest uppercase py-2 px-4">
        ⚠ Working Draft — To{' '}
        <a
          href="https://mindwaveja.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white transition-colors"
        >
          purchase
        </a>
        {' '}this artist site, visit MindWave JA.
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-jamaica-black/60 hover:text-jamaica-green transition-colors mb-16"
        >
          <ArrowLeft size={16} /> Back to Jahshii
        </Link>

        <h1 className="text-6xl md:text-8xl mb-6">
          THE<br />
          <span className="text-jamaica-green">SHOP</span>
        </h1>

        <p className="font-mono text-jamaica-black/60 tracking-widest uppercase mb-16">
          Official Jahshii Merch — Coming Soon
        </p>

        {/* Printify placeholder */}
        <div className="border-2 border-dashed border-jamaica-black/20 p-16 text-center">
          <p className="font-mono text-sm text-jamaica-black/40 uppercase tracking-widest mb-4">
            Official Merch Store
          </p>
          <p className="text-jamaica-black/30 text-sm">
            Prints, apparel, and 1st Nation gear — launching with the full site.
          </p>
          <button
            disabled
            className="mt-8 bg-jamaica-black text-off-white px-10 py-4 font-black uppercase tracking-widest opacity-40 cursor-not-allowed"
          >
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
}
