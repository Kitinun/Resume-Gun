import { useEffect, useState } from 'react';
import { SiSpotify } from 'react-icons/si';
import { motion } from 'framer-motion';

const SpotifyWidget = () => {
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const res = await fetch('/api/now-playing');
        if (res.ok) {
          const data = await res.json();
          setSong(data);
        } else {
          // Mock data for local testing because Vite doesn't serve /api locally by default
          if (import.meta.env.DEV) {
            setSong({
              isPlaying: true,
              title: "Pink Venom (Local Test)",
              artist: "BLACKPINK",
              albumImageUrl: "https://i.scdn.co/image/ab67616d0000b27351df779fdfd7543886c9fc62",
              songUrl: "https://open.spotify.com/track/4sMcju2W0qgN5Jq9hV9jY0"
            });
          } else {
            setSong({ isPlaying: false });
          }
        }
      } catch {
        if (import.meta.env.DEV) {
          setSong({
            isPlaying: true,
            title: "Pink Venom (Local Test)",
            artist: "BLACKPINK",
            albumImageUrl: "https://i.scdn.co/image/ab67616d0000b27351df779fdfd7543886c9fc62",
            songUrl: "https://open.spotify.com/track/4sMcju2W0qgN5Jq9hV9jY0"
          });
        } else {
          setSong({ isPlaying: false });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 10000); // Poll every 10s
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[140px] bg-gray-100 dark:bg-zinc-800/50 rounded-3xl animate-pulse"></div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }} 
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 p-2.5 pr-5 bg-white/70 dark:bg-zinc-900/80 backdrop-blur-2xl border border-white/50 dark:border-zinc-700/50 rounded-full shadow-2xl hover:scale-105 hover:shadow-[#1DB954]/20 transition-all duration-300 group cursor-pointer"
      onClick={() => song?.songUrl && window.open(song.songUrl, '_blank')}
    >
      {/* Background glow if playing */}
      {song?.isPlaying && (
        <div className="absolute inset-0 bg-[#1DB954]/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      )}

      {/* Album or Logo (Spinning Vinyl Effect) */}
      <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden shadow-inner border-2 border-zinc-200 dark:border-zinc-800">
        {song?.isPlaying && song?.albumImageUrl ? (
          <>
            <img src={song.albumImageUrl} alt="Album" className="w-full h-full object-cover animate-[spin_8s_linear_infinite]" />
            {/* Center dot for vinyl */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-zinc-900 border border-zinc-700 rounded-full"></div>
          </>
        ) : (
          <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
            <SiSpotify className="w-6 h-6 text-gray-400 dark:text-gray-600" />
          </div>
        )}
      </div>

      {/* Info & Visualizer */}
      <div className="flex flex-col max-w-[120px] sm:max-w-[160px] relative z-10">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-black text-[#1DB954] uppercase tracking-widest leading-none">
            {song?.isPlaying ? 'Now Playing' : 'Spotify'}
          </span>
          {song?.isPlaying && (
            <div className="flex items-end gap-[2px] h-2.5 opacity-80">
              <motion.div animate={{ height: ["3px", "10px", "3px"] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-[#1DB954] rounded-sm"></motion.div>
              <motion.div animate={{ height: ["8px", "3px", "8px"] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-[#1DB954] rounded-sm"></motion.div>
              <motion.div animate={{ height: ["4px", "10px", "4px"] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 bg-[#1DB954] rounded-sm"></motion.div>
            </div>
          )}
        </div>
        
        <div className="text-sm font-bold text-gray-900 dark:text-white truncate leading-tight">
          {song?.isPlaying ? song.title : 'Not Playing'}
        </div>
        {song?.isPlaying && (
          <div className="text-[10px] font-medium text-gray-500 dark:text-gray-400 truncate leading-tight">
            {song.artist}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default SpotifyWidget;
