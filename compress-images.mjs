import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, parse } from 'path';

const directoryToSearch = './public/image';

const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = join(dirPath, file);
    if (statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
};

const compressImages = async () => {
  const allFiles = getAllFiles(directoryToSearch);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.heic'];

  for (const file of allFiles) {
    const ext = parse(file).ext.toLowerCase();
    
    if (imageExtensions.includes(ext)) {
      console.log(`Processing: ${file}`);
      const webpPath = file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
      
      // Don't process if it's already a webp
      if (ext === '.webp') continue;
      
      try {
        await sharp(file)
          .resize({ width: 1920, withoutEnlargement: true }) // Prevent absurd sizes
          .webp({ quality: 75, effort: 6 }) // Aggressive compression
          .toFile(webpPath);
          
        console.log(`✅ Converted to: ${webpPath}`);
        
        // Delete original
        unlinkSync(file);
      } catch (err) {
        console.error(`❌ Error processing ${file}:`, err.message);
      }
    }
  }
  console.log("Image compression complete!");
};

compressImages();
