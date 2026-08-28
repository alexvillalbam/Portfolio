import Contact from './components/Contact';
import Experience from './components/Experience';
import FeaturedProject from './components/FeaturedProject';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className='min-h-screen bg-surface text-text-main antialiased'>
      <a
        href='#main-content'
        className='fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-surface-raised px-4 py-2 font-semibold text-brand shadow-lifted transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-surface'>
        Saltar al contenido principal
      </a>

      <Navbar />

      <main id='main-content' tabIndex='-1' className='focus:outline-none'>
        <Hero />
        <FeaturedProject />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
