import { useState } from 'react';
import { Camera, Bike, Activity, Heart, Image as ImageIcon, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Hobbies = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Wedding
    { id: 1, src: '/image/wedding/0Z9A1945.JPEG', category: 'wedding', title: t.hobbies.images.weddingDay, span: 'col-span-2 row-span-2' },
    { id: 2, src: '/image/wedding/0Z9A1993.JPEG', category: 'wedding', title: t.hobbies.images.moments, span: 'col-span-1 row-span-1' },
    { id: 3, src: '/image/wedding/0Z9A2372.JPEG', category: 'wedding', title: t.hobbies.images.celebration, span: 'col-span-1 row-span-2' },
    { id: 4, src: '/image/wedding/0Z9A2392.JPEG', category: 'wedding', title: t.hobbies.images.smile, span: 'col-span-1 row-span-1' },
    { id: 5, src: '/image/wedding/7V8A1956.JPEG', category: 'wedding', title: t.hobbies.images.family, span: 'col-span-2 row-span-1' },
    { id: 6, src: '/image/wedding/7V8A2104.JPEG', category: 'wedding', title: t.hobbies.images.love, span: 'col-span-1 row-span-1' },
    
    // Cycling
    { id: 7, src: '/image/hobby/Cycling/SIMPLESAMPLE-136.JPG', category: 'cycling', title: t.hobbies.images.morningRide, span: 'col-span-1 row-span-2' },
    { id: 8, src: '/image/hobby/Cycling/SIMPLESAMPLE-194 2.JPG', category: 'cycling', title: t.hobbies.images.cyclingCrew, span: 'col-span-2 row-span-1' },
    { id: 9, src: '/image/hobby/Cycling/SIMPLESAMPLE-203.JPG', category: 'cycling', title: t.hobbies.images.onTheRoad, span: 'col-span-1 row-span-1' },
    { id: 10, src: '/image/hobby/Cycling/SIMPLESAMPLE-236 2.JPG', category: 'cycling', title: t.hobbies.images.nightRide, span: 'col-span-1 row-span-1' },

    // Running
    { id: 11, src: '/image/hobby/running/16482317-E237-475E-9E03-C405945C6FC3.JPG', category: 'running', title: t.hobbies.images.marathon, span: 'col-span-2 row-span-2' },
    { id: 12, src: '/image/hobby/running/IMG_2446.jpg', category: 'running', title: t.hobbies.images.track, span: 'col-span-1 row-span-1' },
    { id: 13, src: '/image/hobby/running/IMG_2937.JPG', category: 'running', title: t.hobbies.images.runner, span: 'col-span-1 row-span-1' },
    { id: 14, src: '/image/hobby/running/IMG_4788.JPG', category: 'running', title: t.hobbies.images.finishLine, span: 'col-span-2 row-span-1' },
  ];

  const filters = [
    { id: 'all', label: t.hobbies.filters.all, icon: ImageIcon },
    { id: 'wedding', label: t.hobbies.filters.wedding, icon: Heart },
    { id: 'cycling', label: t.hobbies.filters.cycling, icon: Bike },
    { id: 'running', label: t.hobbies.filters.running, icon: Activity },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="p-2 mt-20 laptop:mt-36 laptop:p-0" 
      id="hobbies"
    >
      <div className="flex flex-col tablet:flex-row tablet:items-end justify-between mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Camera className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            {t.hobbies.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">{t.hobbies.subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-gray-100 dark:bg-zinc-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-zinc-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 auto-rows-[150px] tablet:auto-rows-[200px] gap-2 tablet:gap-4">
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.05 }}
              key={img.id}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ${img.span} bg-gray-100 dark:bg-zinc-800`}
              onClick={() => setSelectedImage(img)}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05} transitionSpeed={2000} className="w-full h-full">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-white/20 backdrop-blur-md text-white rounded-md uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{img.title}</h3>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl animate-zoom-in"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              decoding="async"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Hobbies;
