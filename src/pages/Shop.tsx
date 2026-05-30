import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MERCH = [
  {
    name: 'Jahshii Music Dad Hat',
    description: 'Camo dad hat — embroidered Jahshii Music script on front.',
    tag: 'Headwear',
    image: '/19df8336110.jpg',
    status: 'available',
  },
  {
    name: '1st Nation Racerback Tank',
    description: 'Black racerback — 1st Nation Jamaica crest graphic.',
    tag: 'Apparel',
    image: '/19df8389518.jpg',
    status: 'available',
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen bg-off-white">
      {/* Working Draft Banner */}
      <div className="w-full bg-jamaica-black text-jamaica-yellow text-center text-xs font-mono tracking-widest uppercase py-2 px-4">
        ⚠ Working Draft — To{' '}
        <a href="https://mindwaveja.com" target="_blank" rel="noopener noreferrer"
          className="underline hover:text-white transition-colors">
          purchase
        </a>
        {' '}this artist site, visit MindWave JA.
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <Link to="/"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-jamaica-black/60 hover:text-jamaica-green transition-colors mb-16">
          <ArrowLeft size={16} /> Back to Jahshii
        </Link>

        <h1 className="text-6xl md:text-8xl mb-4">
          THE<br />
          <span className="text-jamaica-green">SHOP</span>
        </h1>
        <p className="font-mono text-jamaica-black/50 tracking-widest uppercase mb-16 text-sm">
          Official Jahshii Merch
        </p>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {MERCH.map(item => (
            <div key={item.name} className="group border border-jamaica-black/10 hover:border-jamaica-black/30 transition-colors overflow-hidden">
              {/* Image */}
              <div className="bg-white overflow-hidden" style={{ aspectRatio: '1' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6 bg-off-white">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-black text-lg leading-tight">{item.name}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-jamaica-green border border-jamaica-green/40 px-2 py-1 flex-shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-jamaica-black/55 text-sm mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-jamaica-black/40">Price on request</span>
                  <button disabled
                    className="bg-jamaica-black text-off-white font-black text-xs uppercase tracking-widest px-6 py-3 opacity-50 cursor-not-allowed">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div className="border border-dashed border-jamaica-black/20 p-12 text-center">
          <p className="font-mono text-xs text-jamaica-black/40 uppercase tracking-widest mb-3">
            More Drops Coming
          </p>
          <p className="text-jamaica-black/30 text-sm">
            Prints, apparel, and 1st Nation gear — launching with the full site.
          </p>
        </div>
      </div>
    </div>
  );
}
