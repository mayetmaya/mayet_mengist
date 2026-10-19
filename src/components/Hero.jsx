import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaArrowRight } from 'react-icons/fa';
import { useMagnetic } from '../hooks/useMagnetic';
import { profile } from '../data';

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({ left: (i * 37) % 100, delay: (i * 1.3) % 6, dur: 14 + (i % 5) * 3 }));

export default function Hero() {
  const [i, setI] = useState(0), [text, setText] = useState(''), [del, setDel] = useState(false);
  const b1 = useMagnetic(), b2 = useMagnetic();

  useEffect(() => {
    const word = profile.roles[i];
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === '') { setDel(false); return setI((i + 1) % profile.roles.length); }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, !del && text === word ? 1400 : del ? 40 : 90);
    return () => clearTimeout(t);
  }, [text, del, i]);

  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2);
  const social = [['github', FaGithub], ['linkedin', FaLinkedin], ['twitter', FaTwitter]].filter(([k]) => profile.social[k]);

  return (
    <section id="home" className="hero">
      <div className="particles">{PARTICLES.map((p, k) => <span key={k} style={{ left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.dur}s` }} />)}</div>
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow rise" style={{ '--d': '0s' }}>Hello, I'm</p>
          <h1 className="rise" style={{ '--d': '.1s' }}><span className="grad">{profile.name}</span></h1>
          <h2 className="rise" style={{ '--d': '.2s' }}>{text}<span className="caret">|</span></h2>
          <p className="lead rise" style={{ '--d': '.3s' }}>{profile.tagline}</p>
          <div className="btn-row rise" style={{ '--d': '.4s' }}>
            <a ref={b1} href="#projects" className="btn primary">View my work <FaArrowRight /></a>
            <a ref={b2} href={profile.resume} target="_blank" rel="noreferrer" className="btn ghost"><FaFileDownload /> Resume</a>
          </div>
          <div className="socials rise" style={{ '--d': '.5s' }}>
            {social.map(([k, Icon]) => <a key={k} href={profile.social[k]} target="_blank" rel="noreferrer" aria-label={k}><Icon /></a>)}
          </div>
        </div>
        <div className="avatar-wrap rise" style={{ '--d': '.3s' }}>
          <div className="avatar">{profile.photo ? <img src={profile.photo} alt={profile.name} /> : <span>{initials}</span>}</div>
        </div>
      </div>
    </section>
  );
}
