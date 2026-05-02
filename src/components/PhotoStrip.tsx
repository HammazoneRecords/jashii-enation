import { motion } from 'motion/react';

const PHOTOS = [
  {
    src: '/jahshii-hero.jpg',
    label: "GRANT'S PEN",
    sub: 'ORIGINS',
    align: 'object-top',
  },
  {
    src: '/jahshii-portrait.jpg',
    label: 'THE VOICE',
    sub: 'CONSCIOUS FIRE',
    align: 'object-center',
  },
  {
    src: '/jahshii-live.jpg',
    label: 'THE STAGE',
    sub: 'GLOBAL STAGES',
    align: 'object-top',
  },
];

export default function PhotoStrip() {
  return (
    <section className="flex h-[55vh] md:h-[65vh] overflow-hidden">
      {PHOTOS.map((photo, i) => (
        <motion.div
          key={photo.label}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex-1 overflow-hidden group cursor-default"
        >
          <img
            src={photo.src}
            alt={photo.label}
            className={`w-full h-full object-cover ${photo.align} transition-transform duration-700 group-hover:scale-105`}
          />

          {/* warm DNA-ochre tinted overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/80 via-jamaica-black/10 to-transparent" />
          <div className="absolute inset-0 bg-dna-ochre/0 group-hover:bg-dna-ochre/10 transition-colors duration-500" />

          {/* vertical divider between panels */}
          {i < PHOTOS.length - 1 && (
            <div className="absolute right-0 top-0 h-full w-[1px] bg-off-white/10 z-10" />
          )}
        </motion.div>
      ))}
    </section>
  );
}
