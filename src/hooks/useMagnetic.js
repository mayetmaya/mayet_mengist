import { useEffect, useRef } from 'react';
export function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = Math.hypot(dx, dy) < 100 ? `translate(${dx * strength}px, ${dy * strength}px)` : '';
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [strength]);
  return ref;
}
