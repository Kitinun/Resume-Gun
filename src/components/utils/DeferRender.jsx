import { useState, useEffect } from 'react';

// Boss-Tier: React Time Slicing via requestIdleCallback
// Defers rendering of non-critical components until the browser's main thread is completely idle
const DeferRender = ({ children }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        setShouldRender(true);
      }, { timeout: 2000 });
    } else {
      // Fallback for Safari/Legacy
      setTimeout(() => setShouldRender(true), 200);
    }
  }, []);

  return shouldRender ? children : null;
};

export default DeferRender;
