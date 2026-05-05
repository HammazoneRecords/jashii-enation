import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Minus, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface Track {
  id: string;
  title: string;
  year: string;
  feat?: string;
  youtubeId?: string;
}

const TRACKS: Track[] = [
  { id: 't-1',  title: 'Cream of the Crop', year: '2021', feat: 'Navaz',        youtubeId: 'lWkx2KbAeKc' },
  { id: 't-2',  title: 'Covid Curfew',      year: '2022',                        youtubeId: 'PpMO9RL5D34' },
  { id: 't-3',  title: 'Keep Up',           year: '2021',                        youtubeId: '0QHemk0de_M' },
  { id: 't-4',  title: 'Life Lessons',      year: '2021',                        youtubeId: 'wNoHmx30dK0' },
  { id: 't-5',  title: 'Gvnman Town',       year: '2022',                        youtubeId: 'RmiAwKRd85E' },
  { id: 't-6',  title: 'Media',             year: '2022',                        youtubeId: '8KDoNz9TkA0' },
  { id: 't-7',  title: 'Born Fighter',      year: '2022',                        youtubeId: 'tC36OgebGXY' },
  { id: 't-8',  title: 'Enemy State',       year: '2022',                        youtubeId: 'j8mBplHwRvA' },
  { id: 't-9',  title: 'Energy',            year: '2022',                        youtubeId: 'V6hKDMrKoOI' },
  { id: 't-10', title: 'Promise',           year: '2022',                        youtubeId: 'aLFCW48uJ08' },
  { id: 't-11', title: 'Di Ting Mad',       year: '2023',                        youtubeId: 'Na_oQRNih8g' },
  { id: 't-12', title: "God's Gift",        year: '2023', feat: 'Kim Kelly',     youtubeId: '96RhuIYwLmk' },
  { id: 't-13', title: '25/8',              year: '2023',                        youtubeId: 'YZ6z4_fvmao' },
  { id: 't-14', title: 'Shift Change',      year: '2023',                        youtubeId: '28wbnPU1vEc' },
  { id: 't-15', title: 'Pieces',            year: '2023', feat: 'Masicka',       youtubeId: 'DT5XCNVwDzE' },
  { id: 't-16', title: 'Stronger',          year: '2023',                        youtubeId: 'OM6yMcm0TSU' },
  { id: 't-17', title: 'Dream to Reality',  year: '2023',                        youtubeId: 'EHXez0_-c9A' },
  { id: 't-18', title: 'Prosperity',        year: '2024',                        youtubeId: 'tkN8fg_BONU' },
  { id: 't-19', title: 'Dream',             year: '2024',                        youtubeId: '3nf5VeeOEng' },
  { id: 't-20', title: 'Domino Gyallis',    year: '2024',                        youtubeId: 'tC2_QdVSUN8' },
  { id: 't-21', title: 'Miggle Day',        year: '2024',                        youtubeId: 'NxCCn0n3VMM' },
  { id: 't-22', title: 'Dem Nuh Bad',       year: '2024',                        youtubeId: 'zqqohrbJbSU' },
  { id: 't-23', title: "God's Plan",        year: '2024', feat: 'Troublemekka',  youtubeId: 'ceT5986KhgA' },
];

interface ActiveTrack {
  youtubeId: string;
  title: string;
  feat?: string;
}

interface TrackRowProps {
  track: Track;
  index: number;
  active: boolean;
  onPlay: (t: ActiveTrack) => void;
}

function TrackRow({ track, index, active, onPlay }: TrackRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 1.02 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
      className={`group relative flex items-center gap-4 py-4 px-4 -mx-4 overflow-hidden border-b border-jamaica-black/10 ${track.youtubeId ? 'cursor-pointer' : 'cursor-default opacity-50'} ${active ? 'bg-jamaica-green/5' : ''}`}
      onClick={() => track.youtubeId && onPlay({ youtubeId: track.youtubeId, title: track.title, feat: track.feat })}
    >
      {/* Sweep highlight */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-jamaica-yellow/15 via-jamaica-yellow/5 to-transparent pointer-events-none"
        initial={{ x: '-100%' }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      />

      {/* Ghost number */}
      <span className="absolute right-2 top-1/2 -translate-y-1/2 font-black text-[5rem] leading-none text-jamaica-black/[0.04] group-hover:text-jamaica-black/[0.07] transition-colors pointer-events-none select-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 h-full w-[3px] bg-jamaica-green origin-left pointer-events-none"
        animate={active ? { scaleX: 1 } : { scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Number / play icon */}
      <div className="w-6 shrink-0 flex items-center justify-center relative z-10">
        <span className={`font-mono text-xs transition-opacity ${active ? 'opacity-0' : 'text-jamaica-black/30 group-hover:opacity-0'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <Play size={13} className={`fill-current ${active ? 'text-jamaica-green' : 'text-jamaica-black'}`} />
        </div>
      </div>

      {/* Title */}
      <div className="flex-1 min-w-0 relative z-10">
        <p className={`font-black text-lg leading-tight truncate transition-colors ${active ? 'text-jamaica-green' : 'group-hover:text-jamaica-black'}`}>
          {track.title}
          {track.feat && (
            <span className="font-normal text-base text-jamaica-black/50"> ft. {track.feat}</span>
          )}
        </p>
      </div>

      {/* Year */}
      <span className="font-mono text-sm text-jamaica-black/40 shrink-0 relative z-10 group-hover:text-dna-ochre transition-colors duration-200">
        {track.year}
      </span>
    </motion.div>
  );
}

interface MiniPlayerProps {
  track: ActiveTrack;
  onClose: () => void;
}

function MiniPlayer({ track, onClose }: MiniPlayerProps) {
  const [minimized, setMinimized] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 60, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-6 right-6 z-[90] w-[320px] shadow-2xl shadow-black/40 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-jamaica-black text-off-white flex items-center gap-3 px-3 py-2">
        <div className="flex-1 min-w-0">
          <p className="font-black text-sm leading-tight truncate">{track.title}</p>
          {track.feat && (
            <p className="font-mono text-[10px] text-off-white/40 truncate">ft. {track.feat}</p>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-off-white/50 hover:text-jamaica-yellow transition-colors"
            title="Open on YouTube"
          >
            <ExternalLink size={13} />
          </a>
          <button
            onClick={() => setMinimized(!minimized)}
            className="text-off-white/50 hover:text-jamaica-yellow transition-colors"
            title={minimized ? 'Expand' : 'Minimise'}
          >
            <Minus size={13} />
          </button>
          <button
            onClick={onClose}
            className="text-off-white/50 hover:text-jamaica-yellow transition-colors"
            title="Close"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Video */}
      <AnimatePresence initial={false}>
        {!minimized && (
          <motion.div
            key="video"
            initial={{ height: 0 }}
            animate={{ height: 180 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <iframe
              key={track.youtubeId}
              src={`https://www.youtube.com/embed/${track.youtubeId}?autoplay=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full block"
              style={{ height: 180 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState<ActiveTrack | null>(null);

  return (
    <section id="tracks" className="relative py-24 bg-off-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-6xl md:text-8xl">
              THE<br />
              <span className="text-jamaica-green">MUSIC</span>
            </h2>
            <p className="font-mono text-jamaica-black/60 mt-4 tracking-widest uppercase">
              Conscious fire — in every riddim
            </p>
          </div>
          <a
            href="https://open.spotify.com/artist/4pP4fxW65oev1NdRd2Fbn7"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 font-black uppercase text-sm border-b-2 border-jamaica-black pb-2 hover:text-jamaica-green hover:border-jamaica-green transition-all mt-6 md:mt-0"
          >
            Full Catalogue →
          </a>
        </div>

        <div className="space-y-0">
          {TRACKS.map((track, i) => (
            <TrackRow
              key={track.id}
              track={track}
              index={i}
              active={activeTrack?.youtubeId === track.youtubeId}
              onPlay={setActiveTrack}
            />
          ))}
        </div>

        <div className="flex gap-6 mt-12 text-sm font-mono uppercase tracking-widest">
          <a href="https://open.spotify.com/artist/4pP4fxW65oev1NdRd2Fbn7" target="_blank" rel="noopener noreferrer" className="hover:text-jamaica-green transition-colors">Spotify</a>
          <a href="https://music.apple.com/us/artist/jahshii/1574685516" target="_blank" rel="noopener noreferrer" className="hover:text-jamaica-green transition-colors">Apple Music</a>
          <a href="https://www.youtube.com/@JahshiiTV" target="_blank" rel="noopener noreferrer" className="hover:text-jamaica-green transition-colors">YouTube</a>
          <a href="https://www.instagram.com/jahshiimusic/" target="_blank" rel="noopener noreferrer" className="hover:text-jamaica-green transition-colors">Instagram</a>
        </div>
      </div>

      <AnimatePresence>
        {activeTrack && (
          <MiniPlayer track={activeTrack} onClose={() => setActiveTrack(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
