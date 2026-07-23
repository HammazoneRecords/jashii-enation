import { motion } from 'motion/react';
import PreOrderCapture from './PreOrderCapture';

const models = [
  {
    name: '1st eNation Roots',
    style: 'Urban e-bike, step-through frame',
    colourway: 'Midnight + Ochre',
    hex: '#C8782A',
    tagline: 'Move through the earth with purpose.',
    image: '/ebike3.png',
    specs: [
      { label: 'Motor',    value: '500W Mid-drive' },
      { label: 'Range',    value: 'Up to 80 km' },
      { label: 'Battery',  value: '48V 14Ah' },
      { label: 'Top Speed', value: '35 km/h' },
      { label: 'Gears',    value: '7-speed Shimano' },
      { label: 'Brakes',   value: 'Hydraulic disc' },
      { label: 'Weight',   value: '22 kg' },
    ],
  },
  {
    name: '1st eNation Earth',
    style: 'City scooter, compact',
    colourway: 'Forest + Linen',
    hex: '#2D4A28',
    tagline: 'Grounded in every direction.',
    image: '/ebike1.png',
    specs: [
      { label: 'Motor',    value: '350W Hub-drive' },
      { label: 'Range',    value: 'Up to 55 km' },
      { label: 'Battery',  value: '36V 10Ah' },
      { label: 'Top Speed', value: '28 km/h' },
      { label: 'Frame',    value: 'Step-through steel' },
      { label: 'Brakes',   value: 'Mechanical disc' },
      { label: 'Weight',   value: '18 kg' },
    ],
  },
  {
    name: '1st eNation Ember',
    style: 'Performance e-bike, upright frame',
    colourway: 'Ember + Black',
    hex: '#8B3A0F',
    tagline: 'Ancient consciousness. Clean energy.',
    image: '/ebike2.png',
    specs: [
      { label: 'Motor',    value: '750W Mid-drive' },
      { label: 'Range',    value: 'Up to 100 km' },
      { label: 'Battery',  value: '48V 20Ah' },
      { label: 'Top Speed', value: '45 km/h' },
      { label: 'Gears',    value: '12-speed SRAM' },
      { label: 'Brakes',   value: '4-piston hydraulic' },
      { label: 'Weight',   value: '26 kg' },
    ],
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
              className="border border-white/10 hover:border-white/30 transition-colors group overflow-hidden"
            >
              {/* Bike image — expands on hover */}
              <div className="w-full bg-black/40 flex items-center justify-center overflow-hidden" style={{ minHeight: 260 }}>
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{ maxHeight: 300 }}
                />
              </div>

              {/* Colour strip */}
              <div className="w-full h-[2px]" style={{ background: `linear-gradient(to right, ${model.hex}, transparent)` }} />

              {/* Name + specs */}
              <div className="px-6 py-5">
                <h3 className="text-lg font-black tracking-wide mb-4 group-hover:text-[#C8782A] transition-colors">
                  {model.name}
                </h3>
                <div className="flex flex-col gap-2">
                  {model.specs.map(s => (
                    <div key={s.label} className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-off-white/35">{s.label}</span>
                      <span className="font-mono text-[11px] text-off-white/70">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {[
              { id: 'jahshii-ebike-roots', label: 'Roots' },
              { id: 'jahshii-ebike-earth', label: 'Earth' },
              { id: 'jahshii-ebike-ember', label: 'Ember' },
            ].map(m => (
              <PreOrderCapture key={m.id} productId={m.id} />
            ))}
          </div>
          <p className="font-mono text-xs text-off-white/30 mt-2 uppercase tracking-widest">
            Launching 2025 — Register interest above
          </p>
        </motion.div>
      </div>
    </section>
  );
}
