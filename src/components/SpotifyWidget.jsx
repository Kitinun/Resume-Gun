import React, { useEffect, useState } from 'react';
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
      } catch (e) {
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
      <div className="w-full h-[88px] bg-gray-100 dark:bg-zinc-800/50 rounded-2xl animate-pulse"></div>
    );
  }

  return (
    <div className="flex flex-col tablet:flex-row items-center justify-between p-4 bg-white/50 dark:bg-zinc-800/30 backdrop-blur-md border border-gray-100 dark:border-zinc-700/50 rounded-2xl hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 w-full">
        {song?.isPlaying ? (
          <div className="relative shrink-0">
            <img 
              src={song.albumImageUrl} 
              alt={song.album} 
              className="w-16 h-16 rounded-full object-cover shadow-md animate-[spin_8s_linear_infinite]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
              <SiSpotify className="w-6 h-6 text-[#1DB954]" />
            </div>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center shrink-0 shadow-inner">
            <SiSpotify className="w-8 h-8 text-gray-400 dark:text-gray-500" />
          </div>
        )}

        <div className="flex flex-col flex-grow overflow-hidden">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1DB954]">
              {song?.isPlaying ? "Now Playing" : "Not Playing"}
            </span>
            {song?.isPlaying && (
              <div className="flex items-end gap-[2px] h-3">
                <motion.div animate={{ height: ["4px", "12px", "4px"] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#1DB954] rounded-full"></motion.div>
                <motion.div animate={{ height: ["10px", "4px", "10px"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#1DB954] rounded-full"></motion.div>
                <motion.div animate={{ height: ["6px", "12px", "6px"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="w-1 bg-[#1DB954] rounded-full"></motion.div>
              </div>
            )}
          </div>
          
          <a 
            href={song?.songUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-base font-bold text-gray-800 dark:text-white truncate hover:underline hover:text-[#1DB954] transition-colors"
          >
            {song?.isPlaying ? song.title : "Spotify"}
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {song?.isPlaying ? song.artist : "Ready to play some tunes"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;
