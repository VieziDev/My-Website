'use client'
import About from "@/components/About";
import './globals.css'
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";



export default function MyPorfolio() {
  return (
    <main className="bg-gray-800 m-auto scroll-smooth">
      <Hero />
      <About />
      <Contact />
    </main>
  );
}