import { Instagram, Youtube, Music2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-jamaica-black text-off-white py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-8xl md:text-[12rem] leading-none mb-6 text-stroke-yellow">JAHSHII</h2>
        <p className="font-mono text-jamaica-yellow tracking-[0.3em] uppercase text-sm mb-12">
          Grant's Pen → The World
        </p>

        <div className="flex gap-12 mb-16">
          <a
            href="https://www.instagram.com/jahshiimusic/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-jamaica-yellow transition-colors"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.youtube.com/@JahshiiTV"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-jamaica-yellow transition-colors"
          >
            <Youtube size={32} />
          </a>
          <a
            href="https://open.spotify.com/artist/4pP4fxW65oev1NdRd2Fbn7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-jamaica-yellow transition-colors"
          >
            <Music2 size={32} />
          </a>
          <a
            href="https://music.apple.com/us/artist/jahshii/1574685516"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-jamaica-yellow transition-colors"
          >
            <ExternalLink size={32} />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 font-mono text-xs tracking-widest text-white/40 uppercase">
          <p>© 2025 Jahshii. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a
              href="https://mindwaveja.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-off-white transition-colors"
            >
              Site by MindWave JA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
