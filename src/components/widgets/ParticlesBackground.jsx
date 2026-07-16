import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const checkCapabilities = async () => {
      // 1. Reduced Motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
      
      // 2. Slow Network
      if (navigator.connection) {
        const { effectiveType, saveData } = navigator.connection;
        if (saveData || effectiveType === 'slow-2g' || effectiveType === '2g' || effectiveType === '3g') return false;
      }

      // 3. Low-end CPU (Boss-Tier)
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return false;

      // 4. Low Battery (Boss-Tier)
      try {
        if ('getBattery' in navigator) {
          const battery = await navigator.getBattery();
          if (battery.level < 0.2 && !battery.charging) return false;
        }
      } catch (e) {
        // Ignore battery API errors
      }

      return true;
    };

    checkCapabilities().then(shouldRun => {
      if (!shouldRun) {
        setShouldRender(false);
      } else {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }
    });
  }, []);

  if (!shouldRender) return null;

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#3b82f6",
        },
        links: {
          color: "#60a5fa",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 40,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    );
  }

  return null;
};

export default React.memo(ParticlesBackground);
