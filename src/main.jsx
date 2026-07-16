import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const asciiArt = `
  ██╗  ██╗██╗████████╗██╗███╗   ██╗██╗   ██╗███╗   ██╗
  ██║ ██╔╝██║╚══██╔══╝██║████╗  ██║██║   ██║████╗  ██║
  █████╔╝ ██║   ██║   ██║██╔██╗ ██║██║   ██║██╔██╗ ██║
  ██╔═██╗ ██║   ██║   ██║██║╚██╗██║██║   ██║██║╚██╗██║
  ██║  ██╗██║   ██║   ██║██║ ╚████║╚██████╔╝██║ ╚████║
  ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝
`;
console.info(
  "%c" + asciiArt + "\n%c👋 Ah, a fellow developer! Looking under the hood?\n%cI'm Kitinun Khonson, a Full Stack Developer. Let's build something awesome together!\n👉 GitHub: https://github.com/Kitinun",
  "color: #3b82f6; font-weight: bold;",
  "color: #ec4899; font-size: 16px; font-weight: bold; margin-top: 10px;",
  "color: #a855f7; font-size: 14px; margin-top: 5px;"
);

// Boss-Tier: Real-time Core Web Vitals Telemetry
try {
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    const lastEntry = entries[entries.length - 1];
    const lcp = lastEntry.renderTime || lastEntry.loadTime;
    console.info(`%c🚀 Core Web Vitals | LCP: ${Math.round(lcp)}ms`, 'color: #10b981; font-weight: bold; background: #064e3b; padding: 2px 6px; border-radius: 4px; font-family: monospace;');
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries();
    entries.forEach(entry => {
      if (entry.name === 'first-contentful-paint') {
        console.info(`%c⚡ Core Web Vitals | FCP: ${Math.round(entry.startTime)}ms`, 'color: #3b82f6; font-weight: bold; background: #1e3a8a; padding: 2px 6px; border-radius: 4px; font-family: monospace;');
      }
    });
  }).observe({ type: 'paint', buffered: true });
} catch (e) {
  // Ignore if unsupported
}

// Boss-Tier: CSS Houdini Paint API (Render Engine Multithreading)
if ('paintWorklet' in CSS) {
  const workletCode = `
    class GradientPainter {
      paint(ctx, geom, properties) {
        const gradient = ctx.createLinearGradient(0, 0, geom.width, geom.height);
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.05)');
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.05)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0.05)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, geom.width, geom.height);
      }
    }
    registerPaint('dynamic-gradient', GradientPainter);
  `;
  const blob = new Blob([workletCode], { type: 'application/javascript' });
  CSS.paintWorklet.addModule(URL.createObjectURL(blob)).catch(() => {});
}

// Boss-Tier: Initialize Web Worker (Multithreading)
if (window.Worker) {
  const analyticsWorker = new Worker(new URL('./workers/analytics.worker.js', import.meta.url), { type: 'module' });
  analyticsWorker.postMessage({ type: 'INIT_ANALYTICS' });
  
  // Listen for worker messages (optional, just for demo)
  analyticsWorker.onmessage = (e) => {
    if (import.meta.env.DEV && e.data.type === 'ANALYTICS_PING_SENT') {
      console.debug('Worker pulse detected:', e.data);
    }
  };
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
