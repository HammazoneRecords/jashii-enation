import { motion } from 'motion/react';

const models = [
  {
    name: '1st eNation Roots',
    style: 'Urban e-bike, step-through frame',
    colourway: 'Midnight + Ochre',
    hex: '#C8782A',
    tagline: 'Move through the earth with purpose.',
  },
  {
    name: '1st eNation Earth',
    style: 'City scooter, compact',
    colourway: 'Forest + Linen',
    hex: '#2D4A28',
    tagline: 'Grounded in every direction.',
  },
  {
    name: '1st eNation Ember',
    style: 'Performance e-bike, upright frame',
    colourway: 'Ember + Black',
    hex: '#8B3A0F',
    tagline: 'Ancient consciousness. Clean energy.',
  },
];

export default function FirstNationEbikes() {
  return (
    <section id="ebikes" className="py-24 px-6 bg-dna-midnight text-off-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#C8782A]" />
            <span className="font-mono text-xs tracking-widest text-[#C8782A] uppercase">1st eNation — Brand Extension</span>
          </div>
          <h2 className="text-6xl md:text-8xl mb-6">
            1ST<br />
            <span style={{ color: '#C8782A' }}>
              <sup className="text-[0.4em] leading-none font-black" style={{ color: '#C8782A', verticalAlign: 'super' }}>e</sup>NATION
            </span>
            <br />
            <span className="text-stroke-ochre text-4xl md:text-5xl">eBIKES</span>
          </h2>
          <p className="font-mono text-off-white/60 tracking-widest uppercase max-w-xl">
            Born of the earth. Built for the future.
          </p>
          <p className="text-off-white/70 mt-6 max-w-lg leading-relaxed">
            Jahshii's music is about moving with purpose — leaving the world better than you found it.
            1st eNation eBikes maps that energy onto movement itself. Clean, grounded, forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="border border-white/10 p-8 hover:border-white/30 transition-colors group"
            >
              {/* Colour swatch */}
              <div
                className="w-full h-2 mb-8 opacity-80"
                style={{ background: `linear-gradient(to right, ${model.hex}, #101010)` }}
              />

              <h3 className="text-2xl font-black mb-2 group-hover:text-[#C8782A] transition-colors">
                {model.name}
              </h3>
              <p className="font-mono text-xs text-off-white/40 uppercase tracking-widest mb-4">
                {model.colourway}
              </p>
              <p className="text-off-white/60 text-sm mb-6 leading-relaxed">{model.style}</p>
              <p className="text-off-white/80 italic text-sm">"{model.tagline}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button
            disabled
            className="bg-[#C8782A]/20 text-[#C8782A] border border-[#C8782A]/40 px-12 py-5 font-black uppercase tracking-widest cursor-not-allowed opacity-60"
          >
            1st eNation — Coming Soon
          </button>
          <p className="font-mono text-xs text-off-white/30 mt-4 uppercase tracking-widest">
            Launching 2025 — Join the Movement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
