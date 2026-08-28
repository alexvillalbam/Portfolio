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
    <div className='min-h-screen bg-white text-gray-900 antialiased'>
      <a
        href='#main-content'
        className='fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-white px-4 py-2 font-semibold text-blue-800 shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500'>
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
