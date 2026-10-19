// ============================================================
//  EDIT THIS FILE ONLY — all text, links and lists come from here.
//  Anything marked  ← EDIT  is a placeholder you must replace.
//  Leave a link as '' and the site shows a "coming soon" button.
// ============================================================

export const profile = {
  name: 'Mayet Mengist',
  roles: ['Full-Stack Application Developer', 'React & Node.js Developer', 'AI-Powered App Builder'],
  tagline: 'Electrical & Control Systems engineer turned full-stack developer — building reliable web apps with React, Node.js, MySQL and LLM APIs.',
  availability: 'Open to junior roles and System Design',
  email: 'mayamayet23@gmail.com',          // ← EDIT
  location: 'Ethiopia',                      // ← EDIT (city, country)
  resume: '/resume.pdf',                     // ← put your CV in /public/resume.pdf
  photo: '../public/me.jpg',                                 // ← e.g. '/me.jpg' (file in /public)
  formEndpoint: '',                          // optional Formspree URL
  social: { github: 'https://github.com/mayetmaya/ChatGPT', linkedin: '', twitter: '' },   // ← EDIT: full URLs
};

export const about = {
  paragraphs: [
    'I am an aspiring full-stack application developer with an academic background in Electrical Engineering and Control Systems Engineering, a completed six-month full-stack bootcamp, and hands-on technical work.',
    'I build applications with React, JavaScript, Node.js, Express, MySQL and external APIs, and I am developing my skills in AI-powered software: LLM integration and retrieval-based workflows.',
    'I am looking for a junior full-stack role, apprenticeship or entry-level software opportunity where I can contribute to real projects and grow alongside experienced developers.',
  ],
  stats: [
    { value: '5 yrs', label: 'Senior Technical Assistant' },
    { value: '3 yrs', label: 'Senior Control System Engineer' },
    { value: 'MSc', label: 'Control Systems · CGPA 3.85' },
    { value: 'BSc', label: 'Electrical Engineering · CGPA 3.45' },
    { value: '3', label: 'Featured projects' },
  ],
  approach: [
    ['Understand', 'Clarify the requirements and the real problem.'],
    ['Decompose', 'Split the system into clear components.'],
    ['Investigate', 'Debug methodically, one hypothesis at a time.'],
    ['Validate', 'Test the result before calling it done.'],
  ],
};

export const experience = [
  { title: 'Senior Technical Assistant', company: 'University environment', date: '5 years',
    description: 'Technical work in an academic environment, supporting laboratories, equipment and systems.',
    skills: ['Troubleshooting', 'Technical support', 'Systems'] },
  { title: 'Senior Control System Engineer', company: 'Practical electrical work', date: '3 years',
    description: 'Hands-on electrical installation and fault-finding that built a disciplined, safety-aware troubleshooting mindset.',
    skills: ['Fault-finding', 'Safety', 'Hands-on'] },
];

export const education = [
  { degree: 'Full-Stack Development Bootcamp', school: 'Evangadi', date: '2026',
    description: 'React, Node.js, Express, MySQL, AI Integration, Embedding, RAG and REST API development through project-based learning.' },
  { degree: 'MSc, Control Systems Engineering', school: 'Bahir Dar University', date: '2025 · CGPA 3.85',
    description: 'Systems modelling, analysis and control — the source of my systems-oriented approach.' },
  { degree: 'BSc, Electrical Engineering', school: 'Bahir Dar University', date: '2019 · CGPA 3.45',
    description: 'Foundation in electrical engineering and engineering problem-solving.' },
];

// status: 'deployed' | 'in-progress'.  github / demo: full URLs, or '' if not ready yet.
export const projects = [
  { title: 'Evangadi Forum', tag: 'AI-assisted Q&A platform', status: 'deployed', featured: true,
    description: 'A collaborative question-and-answer application with user authentication, question/answer workflows and AI-assisted question drafting through a Gemini integration.',
    highlights: ['JWT-based authentication', 'REST API with Express + MySQL', 'Gemini-powered question drafting'],
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'JWT', 'Gemini API'],
    github: 'https://github.com/mayetmaya/AI_Powered_Forum',   // ← EDIT
    demo: 'https://ai-powered-forum-eight.vercel.app/',     // ← EDIT (deployed frontend URL)
    image: '' },
  { title: 'Netflix-Inspired Movie App', tag: 'Movie discovery interface', status: 'deployed',
    description: 'A React interface that turns external REST API data into an interactive browsing experience, built from reusable components.',
    highlights: ['Reusable components', 'Async data fetching', 'Responsive layout'],
    tech: ['React', 'JavaScript', 'CSS', 'Vite', 'REST API'],
    github: 'https://github.com/mayetmaya/netflix-clone', demo: 'https://netflix-clone-one-roan-41.vercel.app/', image: '../public/netflix.png' },
  { title: 'ChatGPT-Style AI App', tag: 'Conversational AI interface', status: 'deployed',
    description: 'A conversational web app that integrates a large language model API into a clean chat interface, focused on prompt design and safe handling of AI responses.',
    highlights: ['LLM API integration', 'Prompt design', 'Async HTTP/JSON communication'],
    tech: ['React', 'JavaScript', 'LLM API', 'HTTP/JSON'],
    github: 'https://github.com/mayetmaya/ChatGPT', demo: 'https://chat-gpt-theta-one-54.vercel.app/', image: '' },
];

export const skills = [
  { group: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Responsive UI', 'React Router'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST API design', 'Authentication', 'Validation'] },
  { group: 'Data', items: ['MySQL', 'SQL', 'Relational modelling', 'CRUD', 'DB connectivity'] },
  { group: 'AI Integration', items: ['LLM APIs', 'Prompt design', 'Gemini API', 'RAG & embeddings (learning)'] },
  { group: 'Tools & Workflow', items: ['Git', 'GitHub', 'npm', 'VS Code', 'Debugging', 'Env variables', 'Deployment basics'] },
];
