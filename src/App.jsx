import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll, Cursor } from './components/Effects';
import Header from './components/Header';
import Hero from './components/Hero';
import { About, Experience, Projects, Skills, Contact, Footer } from './components/Sections';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <Cursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
