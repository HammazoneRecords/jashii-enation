import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import WorkingDraftBanner from '../components/WorkingDraftBanner';

interface Product {
  id: string;
  name: string;
  collection: string;
  images: string[];
  tag?: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'racerback-tank',
    name: "1st Nation Women's Racerback Tank",
    collection: '1st Nation',
    images: [
      'https://images.printify.com/mockup/69f9e97daf1e4497af01396f/19289/48/19df8389518.jpg?s=608',
    ],
    tag: 'New',
  },
  {
    id: 'cap-camo',
    name: 'JahshiiMusic Cap',
    collection: 'Signature',
    images: [
      'https://images.printify.com/mockup/69f9e787c12ffe54490a4e2f/105374/102307/19df8336110.jpg?s=608',
      'https://images.printify.com/mockup/69f9e787c12ffe54490a4e2f/105374/112107/19df8336110.jpg?s=608',
    ],
    tag: 'Camo',
  },
  {
    id: 'longsleeve-black',
    name: '1st Nation Africa Long Sleeve Tee',
    collection: '1st Nation',
    images: [
      'https://images.printify.com/mockup/69f987222592a8ad8e0fa941/33798/105264/19df82b98e0.jpg?s=608',
      'https://images.printify.com/mockup/69f987222592a8ad8e0fa941/33798/105265/19df82b98e0.jpg?s=608',
    ],
    tag: 'Black',
  },
  {
    id: 'longsleeve-red',
    name: '1st Nation Africa Long Sleeve Tee',
    collection: '1st Nation',
    images: [
      'https://images.printify.com/mockup/69f987222592a8ad8e0fa941/33778/105264/19df82b98e0.jpg?s=608',
      'https://images.printify.com/mockup/69f987222592a8ad8e0fa941/33778/105265/19df82b98e0.jpg?s=608',
    ],
    tag: 'Red',
  },
  {
    id: 'graphic-tee-black',
    name: '1st Nation Jamaica Graphic Tee',
    collection: '1st Nation',
    images: [
      'https://images.printify.com/mockup/69f985c6feed9979d10d93e5/103520/100285/19df82a3180.jpg?s=608',
      'https://images.printify.com/mockup/69f985c6feed9979d10d93e5/103520/100286/19df82a3180.jpg?s=608',
    ],
    tag: 'Black',
  },
  {
    id: 'graphic-tee-green',
    name: '1st Nation Jamaica Graphic Tee',
    collection: '1st Nation',
    images: [
      'https://images.printify.com/mockup/69f985c6feed9979d10d93e5/103881/100285/19df82a3180.jpg?s=608',
      'https://images.printify.com/mockup/69f985c6feed9979d10d93e5/103881/100286/19df82a3180.jpg?s=608',
    ],
    tag: 'Forest',
  },
];

function ProductCard({ product }: { product: Product }) {
  const [imgIndex, setImgIndex] = useState(0);
  const hasMultiple = product.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-dna-linen/40 border border-dna-ochre/20 hover:border-dna-ochre/60 transition-colors"
    >
      <div className="relative aspect-square overflow-hidden bg-dna-linen">
        <AnimatePresence mode="wait">
          <motion.img
            key={imgIndex}
            src={product.images[imgIndex]}
            alt={product.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {product.tag && (
          <span className="absolute top-3 left-3 bg-dna-ochre text-off-white text-[10px] font-mono uppercase tracking-widest px-2 py-1">
            {product.tag}
          </span>
        )}

        {hasMultiple && (
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setImgIndex((i) => (i - 1 + product.images.length) % product.images.length)}
              className="bg-jamaica-black/60 hover:bg-jamaica-black text-off-white p-1 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setImgIndex((i) => (i + 1) % product.images.length)}
              className="bg-jamaica-black/60 hover:bg-jamaica-black text-off-white p-1 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {hasMultiple && (
          <div className="absolute bottom-2 left-0 w-full flex justify-center gap-1">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIndex ? 'bg-dna-ochre' : 'bg-jamaica-black/30'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-dna-ochre mb-1">
          {product.collection}
        </p>
        <h3 className="font-black text-sm uppercase tracking-tight text-jamaica-black">
          {product.name}
        </h3>
        <p className="font-mono text-[10px] text-jamaica-black/40 uppercase tracking-widest mt-2">
          Included with site purchase
        </p>
      </div>
    </motion.div>
  );
}

export default function Shop() {
  return (
    <div className="min-h-screen bg-off-white">
      <WorkingDraftBanner artist="Jahshii" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-jamaica-black/60 hover:text-jamaica-green transition-colors mb-16"
        >
          <ArrowLeft size={16} /> Back to Jahshii
        </Link>

        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-dna-ochre mb-3">Official Collection</p>
          <h1 className="text-6xl md:text-8xl mb-4">
            MERCH<br />
            <span className="text-stroke-green">DESIGNS</span>
          </h1>
          <p className="font-mono text-sm text-jamaica-black/50 tracking-widest uppercase max-w-md">
            All designs shown are included when you purchase the Jahshii artist site license.
          </p>
        </div>

        <div className="inline-flex items-center gap-3 border border-dna-ochre/40 bg-dna-linen/30 px-5 py-3 mb-16">
          <span className="w-2 h-2 rounded-full bg-dna-ochre animate-pulse" />
          <p className="font-mono text-xs uppercase tracking-widest text-dna-ochre">
            Merch designs included with ADTL purchase
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-dna-ochre/10">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-20 border-t border-dna-ochre/20 pt-16 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-jamaica-black/40 mb-6">
            Purchase the full Jahshii artist site license to unlock this collection
          </p>
          <a
            href="https://mindwaveja.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-jamaica-black text-off-white px-10 py-4 font-black uppercase tracking-widest hover:bg-dna-ochre transition-colors"
          >
            Get the License → MindWave JA
          </a>
        </div>
      </div>
    </div>
  );
}
