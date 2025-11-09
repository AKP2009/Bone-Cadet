// app/page.tsx
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Badges from './components/Badges';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      {/* Hero is placed before the main content */}
      <Hero />

      {/* Page content — layout already includes a single <main> wrapper, avoid nested <main> */}
      <About />
      <Services />
      <Badges />
      <Testimonials />
      <Contact />
    </>
  );
}