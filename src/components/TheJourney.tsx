import { motion } from 'motion/react';

interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
  photo?: string;
  photoAlt?: string;
}

const milestones: Milestone[] = [
  {
    year: '2016',
    title: "UNRULY CLASH — FIRST RUNNER-UP",
    description: "At 15 years old, Jahshii enters Popcaan's Unruly Clash and finishes first runner-up. The streets take notice. The voice is already there.",
    tag: 'EMERGENCE',
    photo: '/jahshii-hero.jpg',
    photoAlt: 'Jahshii',
  },
  {
    year: '2021',
    title: 'CREAM OF THE CROP',
    description: '"Cream of the Crop" featuring Navaz ignites the dancehall world. The title becomes more than a song — it becomes his identity. "Keep Up", "25/8", and "Shift Change" follow in the same year.',
    tag: 'BREAKOUT',
    photo: '/jahshii-portrait.jpg',
    photoAlt: 'Jahshii — Cream of the Crop era',
  },
  {
    year: '2022',
    title: 'BOUNTY KILLER & BORN FIGHTER',
    description: '"When We A Step" with Bounty Killer earns over 1.4 million views and the approval of dancehall veterans. "Born Fighter" drops and earns a Caribbean Music Awards nomination for Video of the Year.',
    tag: 'VALIDATION',
  },
  {
    year: '2023',
    title: 'PIECES — DEF JAM',
    description: '"Pieces" featuring Masicka becomes Masicka\'s first release under Def Jam Recordings. 98,000 streams in 14 hours. Over 5 million YouTube views. The world is paying attention.',
    tag: 'GLOBAL',
    photo: '/jahshii-live.jpg',
    photoAlt: 'Jahshii — Live 2023',
  },
  {
    year: '2024',
    title: 'WHERE WE COME FROM',
    description: '"Where We Come From" with Protoje — a raw reflection on what it means to make it out of Jamaica. The crop keeps growing.',
    tag: 'LEGACY',
  },
];

export default function TheJourney() {
  return (
    <section
      id="journey"
      className="py-24 px-6 bg-jamaica-black text-off-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* Intro — photo left, heading + 2001 Origins right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-28 items-start"
        >
          {/* Left: full uncropped photo with "THE" overlaid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <img
              src="/jahshii-cars.jpg"
              alt="Jahshii"
              className="w-full h-auto block"
            />
            <span
              className="absolute top-16 right-0 text-6xl md:text-8xl font-black italic leading-none select-none"
              style={{ color: '#ffffff', mixBlendMode: 'difference' }}
            >
              THE
            </span>
          </motion.div>

          {/* Right: heading + 2001 Origins card */}
          <div className="flex flex-col justify-between h-full gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <p className="font-mono text-[10px] text-dna-ochre tracking-[0.25em] uppercase mb-4">
                THE WORD IS FIRST
              </p>
              <h2 className="text-6xl md:text-8xl mb-4 italic">JOURNEY</h2>
              <p className="font-mono text-jamaica-yellow tracking-widest uppercase">
                From Grant's Pen to the World
              </p>
            </motion.div>

            {/* Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              <p className="text-[5rem] md:text-[7rem] font-black leading-none text-off-white">
                10<span className="text-jamaica-green">+</span>
              </p>
              <p className="font-mono text-sm tracking-[0.2em] uppercase text-off-white/60 mt-1">
                Years as a Dancehall Champion
              </p>
            </motion.div>

            {/* 2001 Origins card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-jamaica-yellow transition-colors group"
            >
              <span className="font-mono text-jamaica-yellow text-sm font-bold mb-2 block">ORIGINS</span>
              <h3 className="text-4xl mb-4 group-hover:text-jamaica-yellow transition-colors">2001</h3>
              <h4 className="text-xl mb-4 text-jamaica-green">BORN IN GRANT'S PEN</h4>
              <p className="text-off-white/70 leading-relaxed">
                Mluleki Tafari Clarke. Born July 7, 2001 in Grant's Pen, Kingston. The community planted the roots before any studio ever could.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline — from 2016 Emergence onwards */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-jamaica-green/30 hidden md:block" />

          <div className="space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-jamaica-yellow w-4 h-4 rounded-full z-10 hidden md:block" />

                {/* Text card */}
                <div className="w-full md:w-5/12">
                  <div className={`p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-jamaica-yellow transition-colors group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="font-mono text-jamaica-yellow text-sm font-bold mb-2 block">{item.tag}</span>
                    <h3 className="text-4xl mb-4 group-hover:text-jamaica-yellow transition-colors">{item.year}</h3>
                    <h4 className="text-xl mb-4 text-jamaica-green">{item.title}</h4>
                    <p className="text-off-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                <div className="w-full md:w-2/12 h-0" />

                {/* Photo column */}
                <div className="w-full md:w-5/12">
                  {item.photo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.04 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.08 + 0.2, ease: [0.23, 1, 0.32, 1] }}
                      className="relative overflow-hidden h-56 md:h-64 group"
                    >
                      <img
                        src={item.photo}
                        alt={item.photoAlt}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-dna-ochre/10 via-transparent to-jamaica-black/50" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
