import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaArrowUp, FaFileDownload } from 'react-icons/fa';
import { useReveal } from '../hooks/useReveal';
import { profile, about, experience, education, projects, skills } from '../data';

function Section({ id, title, subtitle, children }) {
  const [ref, shown] = useReveal();
  return (
    <section id={id} className="section">
      <div ref={ref} className={`container reveal ${shown ? 'in' : ''}`}>
        <h2 className="title"><span className="grad">{title}</span></h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export const About = () => (
  <Section id="about" title="About Me">
    <div className="about-grid">
      <div>{about.paragraphs.map((p, i) => <p key={i} className="muted">{p}</p>)}</div>
      <div className="stats">{about.stats.map((s) => <div key={s.label} className="card stat"><b className="grad">{s.value}</b><span>{s.label}</span></div>)}</div>
    </div>
    <h3 className="sub">My engineering approach</h3>
    <div className="grid steps">
      {about.approach.map(([t, d], i) => <div key={t} className="card step"><span className="num grad">0{i + 1}</span><h4>{t}</h4><p className="muted">{d}</p></div>)}
    </div>
  </Section>
);

export const Experience = () => (
  <Section id="experience" title="Experience & Education">
    <div className="two-col">
      <div className="timeline">
        <h3>Work</h3>
        {experience.map((e) => (
          <div key={e.title + e.date} className="card tl-item">
            <small>{e.date}</small><h4>{e.title}</h4><em>{e.company}</em>
            <p className="muted">{e.description}</p>
            <div className="chips">{e.skills.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
      <div className="timeline">
        <h3>Education</h3>
        {education.map((e) => (
          <div key={e.degree} className="card tl-item">
            <small>{e.date}</small><h4>{e.degree}</h4><em>{e.school}</em>
            <p className="muted">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export const Projects = () => (
  <Section id="projects" title="Featured Projects" subtitle="Source code and live deployments for each project.">
    <div className="grid">
      {projects.map((p) => (
        <article key={p.title} className={`card project ${p.featured ? 'featured' : ''}`}>
          <div className="thumb">{p.image ? <img src={p.image} alt={p.title} loading="lazy" /> : <span>{p.title[0]}</span>}
            <em className={`status ${p.status}`}>{p.status === 'deployed' ? '● Live' : '● In progress'}</em></div>
          <small className="tag">{p.tag}</small>
          <h4>{p.title}</h4>
          <p className="muted">{p.description}</p>
          <ul className="hl">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="proj-btns">
            {p.github ? <a className="btn ghost sm" href={p.github} target="_blank" rel="noreferrer"><FaGithub /> Source code</a>
              : <span className="btn ghost sm off"><FaGithub /> Repo soon</span>}
            {p.demo ? <a className="btn primary sm" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live demo</a>
              : <span className="btn ghost sm off"><FaExternalLinkAlt /> Demo soon</span>}
          </div>
        </article>
      ))}
    </div>
  </Section>
);

export const Skills = () => (
  <Section id="skills" title="Technical Skills" subtitle="Tools and technologies I work with.">
    <div className="grid">
      {skills.map((g) => (
        <div key={g.group} className="card"><h4>{g.group}</h4>
          <div className="chips">{g.items.map((i) => <span key={i}>{i}</span>)}</div></div>
      ))}
    </div>
  </Section>
);

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!profile.formEndpoint) {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=Portfolio%20contact&body=${body}`;
      return;
    }
    setStatus('sending');
    try {
      const r = await fetch(profile.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(form) });
      if (!r.ok) throw new Error();
      setStatus('sent'); setForm({ name: '', email: '', message: '' });
    } catch { setStatus('error'); }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind? Let's talk.">
      <div className="two-col">
        <div className="card info">
          <p><FaEnvelope /> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="muted">Open to junior full-stack roles, apprenticeships and entry-level software opportunities.</p>
          <p><FaMapMarkerAlt /> {profile.location}</p>
        </div>
        <form className="card form" onSubmit={submit}>
          <input name="name" value={form.name} onChange={change} placeholder="Your name" required />
          <input name="email" type="email" value={form.email} onChange={change} placeholder="Your email" required />
          <textarea name="message" rows="5" value={form.message} onChange={change} placeholder="Your message" required />
          <button className="btn primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message'}</button>
          {status === 'sent' && <p className="ok">Thanks! Your message was sent.</p>}
          {status === 'error' && <p className="err">Something went wrong. Please try again.</p>}
        </form>
      </div>
    </Section>
  );
}

const NAV = ['about', 'experience', 'projects', 'skills', 'contact'];
const top = () => (window.__lenis ? window.__lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }));
const goTo = (id) => (e) => { e.preventDefault(); const el = document.getElementById(id); if (el) (window.__lenis ? window.__lenis.scrollTo(el, { offset: -70 }) : el.scrollIntoView({ behavior: 'smooth' })); };

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="foot-cta card">
        <div><h3>Let's build something reliable.</h3><p className="muted">I'm open to junior full-stack roles and apprenticeships.</p></div>
        <div className="btn-row">
          <a className="btn primary" href="#contact" onClick={goTo('contact')}>Contact me</a>
          <a className="btn ghost" href={profile.resume} target="_blank" rel="noreferrer"><FaFileDownload /> Resume</a>
        </div>
      </div>
      <div className="foot-grid">
        <div><h3 className="grad">{profile.name}</h3><p className="muted">Full-stack application developer · React · Node.js · MySQL · AI APIs</p>
          <span className="badge"><i /> {profile.availability}</span></div>
        <div><h5>Explore</h5>{NAV.map((n) => <a key={n} href={`#${n}`} onClick={goTo(n)} className="flink">{n}</a>)}</div>
        <div><h5>Connect</h5>
          <a className="flink" href={`mailto:${profile.email}`}><FaEnvelope /> {profile.email}</a>
          {profile.social.github && <a className="flink" href={profile.social.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>}
          {profile.social.linkedin && <a className="flink" href={profile.social.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>}
          <span className="flink"><FaMapMarkerAlt /> {profile.location}</span></div>
      </div>
      <div className="foot-bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React &amp; Vite</p>
        <button className="icon-btn" onClick={top} aria-label="Back to top"><FaArrowUp /></button>
      </div>
    </div>
  </footer>
);
