import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-off-white/80 backdrop-blur-md">
      <Link to="/" className="text-2xl font-black text-jamaica-black tracking-tighter">
        JAH<span className="text-jamaica-green">SHII</span>
      </Link>

      <div className="hidden md:flex gap-8 font-black uppercase text-sm tracking-widest items-center">
        <a href="/#hero" className="hover:text-jamaica-green transition-colors">Home</a>
        <a href="/#journey" className="hover:text-jamaica-green transition-colors">The Journey</a>
        <a href="/#tracks" className="hover:text-jamaica-green transition-colors">Music</a>
        <Link
          to="/1st-nation"
          className="border border-dna-ochre text-dna-ochre px-4 py-1 hover:bg-dna-ochre hover:text-off-white transition-colors"
        >
          1st <sup className="text-[0.65em]" style={{ verticalAlign: 'super' }}>e</sup>Nation
        </Link>
        <Link
          to="/shop"
          className="relative border border-jamaica-black px-4 py-1 hover:bg-jamaica-black hover:text-off-white transition-colors"
        >
          Shop
          <span className="absolute -top-2 -right-2 bg-dna-ochre text-off-white text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 leading-none">
            merch incl.
          </span>
        </Link>
      </div>

      <button
        className="md:hidden text-jamaica-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-off-white p-6 flex flex-col gap-4 font-black uppercase text-xl md:hidden"
        >
          <a href="/#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/#journey" onClick={() => setIsOpen(false)}>The Journey</a>
          <a href="/#tracks" onClick={() => setIsOpen(false)}>Music</a>
          <Link to="/1st-nation" onClick={() => setIsOpen(false)} className="text-dna-ochre">1st <sup className="text-[0.65em]" style={{ verticalAlign: 'super' }}>e</sup>Nation</Link>
          <Link to="/shop" onClick={() => setIsOpen(false)} className="text-jamaica-green">Shop</Link>
        </motion.div>
      )}
    </nav>
  );
}
