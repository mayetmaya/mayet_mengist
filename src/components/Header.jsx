import { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { profile } from '../data';

const LINKS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

export default function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const cur = [...LINKS].reverse().find((id) => { const el = document.getElementById(id); return el && el.getBoundingClientRect().top <= 120; });
      if (cur) setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id); if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -70 }); else el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="progress" style={{ width: `${progress}%` }} />
      <div className="container header-row">
        <button className="logo" onClick={() => go('home')}>
          <span className="grad">{profile.name}</span>
          {profile.availability && <span className="badge"><i /> {profile.availability}</span>}
        </button>
        <nav className={`nav ${open ? 'open' : ''}`}>
          {LINKS.map((id) => (
            <button key={id} className={active === id ? 'active' : ''} onClick={() => go(id)}>{id}</button>
          ))}
        </nav>
        <div className="actions">
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button className="icon-btn menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>
    </header>
  );
}
