import { motion } from 'motion/react';
import { Heart, MessageCircle, Repeat2 } from 'lucide-react';

const posts = [
  { user: '@DancehallDaily', content: 'Jahshii just shut down Sumfest! The energy was unmatched. #CreamOfTheCrop #TrueBeliever', likes: '1.2k', retweets: '400' },
  { user: '@ReggaeVibes', content: 'Watching "The Journey" timeline on Jahshii’s new site. From Grant’s Pen to the world stage. Inspirational. 🇯🇲✨', likes: '850', retweets: '120' },
  { user: '@MusicLover_99', content: 'That Masicka collab "Pieces" is still on repeat. Jahshii is definitely the connector. 🔥', likes: '2.1k', retweets: '600' },
  { user: '@TrueBeliever_01', content: 'Ambition, Faith, Hustle. That’s the mantra. Love what Jahshii stands for. #CreamOfTheCrop', likes: '540', retweets: '90' },
  { user: '@KingstonVibe', content: 'New Jahshii single dropping soon? We ready! 🚀📈', likes: '3.3k', retweets: '1.1k' },
  { user: '@GlobalSounds', content: 'Jahshii is officially the next big thing in global dancehall. Versatility 10/10.', likes: '920', retweets: '210' },
];

export default function FanWall() {
  return (
    <section id="fan-wall" className="py-24 px-6 bg-jamaica-yellow/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl flex items-baseline gap-4">
            TRUE<br/>BELIEVER
            <span className="text-3xl font-mono text-jamaica-green hidden md:inline">#CreamOfTheCrop</span>
          </h2>
          <p className="font-mono text-jamaica-black/60 mt-4 tracking-widest uppercase">The Community. The Faith. The Family.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid bg-off-white p-8 border-b-4 border-r-4 border-jamaica-black shadow-none hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,119,73,1)] transition-all cursor-default group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-black text-jamaica-green">{post.user}</span>
                <div className="w-2 h-2 rounded-full bg-jamaica-yellow" />
              </div>
              <p className="text-xl font-medium mb-6 leading-tight group-hover:text-jamaica-black/80">{post.content}</p>
              <div className="flex gap-6 font-mono text-xs text-jamaica-black/40 font-bold">
                <span className="flex items-center gap-1"><Heart size={14} className="group-hover:text-red-500 transition-colors" /> {post.likes}</span>
                <span className="flex items-center gap-1"><Repeat2 size={14} className="group-hover:text-jamaica-green transition-colors" /> {post.retweets}</span>
                <span className="flex items-center gap-1"><MessageCircle size={14} className="group-hover:text-blue-500 transition-colors" /></span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="bg-jamaica-green text-off-white px-12 py-5 font-black uppercase tracking-widest hover:bg-jamaica-black transition-all hover:scale-105">
            JOIN THE MOVEMENT
          </button>
        </div>
      </div>
    </section>
  );
}
