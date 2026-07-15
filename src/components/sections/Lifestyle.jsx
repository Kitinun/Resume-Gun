import React from 'react';
import { motion } from "framer-motion";
import HackerText from "../ui/HackerText";
import { Activity, MapPin } from "lucide-react";

const Lifestyle = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3 }}
      className="mt-24 w-full tablet:mx-10 laptop:w-4/5 p-2 laptop:p-0"
    >
      <h2 className="text-3xl font-extrabold mb-8 flex items-center gap-3 text-gray-900 dark:text-white font-mono tracking-tight">
        <HackerText text="Lifestyle Dashboard" />
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-5">
        
        {/* Card 1: Manchester United */}
        <div className="col-span-1 relative group h-[200px] sm:h-[220px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-900 to-black z-0 group-hover:scale-105 transition-transform duration-700"></div>
          {/* Subtle Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent z-10 mix-blend-overlay"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-white text-center">
            <div className="w-20 h-20 mb-3 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" alt="Manchester United Logo" className="w-full h-full object-contain" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest leading-tight text-[#FBE122] drop-shadow-md">
              Glory Glory<br/><span className="text-white">Man United</span>
            </h3>
            <span className="text-[10px] sm:text-xs text-red-300 font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">#RedDevil</span>
          </div>
        </div>

        {/* Card 2: Active Lifestyle */}
        <div className="col-span-1 relative group h-[200px] sm:h-[220px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-zinc-900">
          {/* Background image from hobbies */}
          <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
            <img src="/image/hobby/running/IMG_4788.webp" alt="Running" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" decoding="async" />
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/20 backdrop-blur-md rounded-lg text-orange-500">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Active Life</h3>
            </div>
            <p className="text-sm font-medium text-gray-300">Running & Cycling</p>
          </div>
        </div>

        {/* Card 3: Location & Status */}
        <div className="col-span-1 md:col-span-2 laptop:col-span-1 relative group h-[200px] sm:h-[220px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#0f0f11] flex items-center p-6 sm:p-8 border border-zinc-800">
          {/* Background Grid Texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          
          {/* Radar / Glowing Map Pin on the right */}
          <div className="absolute right-8 sm:right-16 top-1/2 -translate-y-1/2 flex items-center justify-center scale-75 sm:scale-100">
             {/* Radar Rings */}
             <div className="w-32 h-32 rounded-full border border-blue-500/20 absolute animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
             <div className="w-20 h-20 rounded-full border border-blue-500/40 absolute animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-500"></div>
             <div className="w-10 h-10 rounded-full border border-blue-500/60 absolute animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] animation-delay-1000"></div>
             
             {/* Center Pin */}
             <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_#3b82f6] relative z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>
             
             {/* Subtle Glow Behind */}
             <div className="absolute w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>

          <div className="relative z-20 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
               <span className="text-green-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                 Available for work
               </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-1 sm:mb-2 leading-none flex items-center gap-2">
              Thailand
            </h3>
            <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
              <MapPin className="w-4 h-4" />
              <p className="text-xs sm:text-sm font-mono tracking-widest">13.7563° N, 100.5018° E</p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Lifestyle;
