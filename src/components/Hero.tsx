import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMerged, setIsMerged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMerged(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero" className="relative min-h-screen pt-[4.5rem] flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Typography */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12 py-12 bg-off-white bg-pattern relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 max-w-full"
        >
          <motion.h1
            layout
            className={`text-6xl sm:text-7xl lg:text-8xl leading-none mb-6 flex transition-all duration-1000 ease-in-out whitespace-nowrap overflow-hidden ${isMerged ? 'flex-row items-baseline' : 'flex-col items-start'}`}
          >
            <motion.span layout variants={itemVariants} className="font-black">
              JAH
            </motion.span>
            <motion.span layout variants={itemVariants} className="text-jamaica-green font-black">
              SHII
            </motion.span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            animate={{ opacity: isMerged ? 1 : 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-[2px] w-12 bg-jamaica-yellow" />
            <p className="font-mono text-sm tracking-widest text-jamaica-green uppercase font-bold">
              GRANT'S PEN, KINGSTON
            </p>
          </motion.div>

          <div className="overflow-hidden mb-12">
            <motion.h2
              variants={itemVariants}
              animate={isMerged ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              className="text-4xl md:text-5xl text-stroke-green leading-tight"
            >
              CREAM OF THE CROP
            </motion.h2>
          </div>

          <motion.div
            variants={itemVariants}
            animate={isMerged ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          >
            <a
              href="/#tracks"
              className="bg-jamaica-black text-off-white px-8 py-4 font-black uppercase tracking-widest hover:bg-jamaica-green transition-colors flex items-center gap-2 group w-fit"
            >
              LISTEN NOW
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Soundwave */}
        <div className="absolute bottom-10 left-6 flex items-end gap-1 h-32 opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-jamaica-green"
              animate={{ height: [20, 60, 30, 80, 40, 20] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>

      {/* Right Side: Video */}
      <div className="w-full md:w-1/2 relative bg-jamaica-black z-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0"
        >
          <video
            src="/jahshii-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-jamaica-black/70 via-transparent to-transparent md:bg-gradient-to-l md:from-jamaica-black/50 md:to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
