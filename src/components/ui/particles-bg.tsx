"use client";

import { useCallback, useEffect } from "react";

declare global {
  interface Window {
    pJSDom?: Array<{ pJS: { fn: { vendors: { destroypJS: () => void } } } }>;
    particlesJS?: (tagId: string, config: Record<string, unknown>) => void;
  }
}

const PARTICLE_COLORS = {
  particles: "#009DFF",
  lines: "#009DFF",
  accent: "#7FD3FF",
};

export function ParticlesBackground() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom && window.pJSDom.length > 0) {
      window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
      window.pJSDom = [];
    }

    window.particlesJS?.("particles-js", {
      particles: {
        number: { value: 140, density: { enable: true, value_area: 800 } },
        color: { value: PARTICLE_COLORS.particles },
        shape: {
          type: "circle",
          stroke: { width: 0.5, color: PARTICLE_COLORS.accent },
        },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: PARTICLE_COLORS.lines,
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => initParticles();

    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((p) => p.pJS.fn.vendors.destroypJS());
        window.pJSDom = [];
      }
      document.body.removeChild(script);
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="page-gradient fixed inset-0 -z-10 h-screen w-full"
    />
  );
}
