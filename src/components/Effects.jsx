import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({ duration: 1.2, easing: (t) => 1 - Math.pow(1 - t, 3) });
    window.__lenis = lenis;
    let id; const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); window.__lenis = null; };
  }, []);
  return null;
}

export function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  useEffect(() => {
    let x = 0, y = 0, rx = 0, ry = 0, id;
    const move = (e) => { x = e.clientX; y = e.clientY; if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`; };
    const loop = () => { rx += (x - rx) * 0.15; ry += (y - ry) * 0.15; if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`; id = requestAnimationFrame(loop); };
    const over = (e) => ring.current?.classList.toggle('hover', !!e.target.closest('a,button,input,textarea'));
    window.addEventListener('mousemove', move); window.addEventListener('mouseover', over);
    id = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); cancelAnimationFrame(id); };
  }, []);
  return (<><div ref={ring} className="cursor-ring" /><div ref={dot} className="cursor-dot" /></>);
}
