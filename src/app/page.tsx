import Hero from '@/pages/index/Hero';
import './globals.css'
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';




export default function MyPorfolio() {
  return (
    <main className="bg-gray-800 m-auto">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}