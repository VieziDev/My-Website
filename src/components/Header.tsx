'use client'
import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import logo from "../../public/logo.svg";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Mim', href: '#about' },
  // { name: 'Habilidades', href: '#skills' },
  { name: 'Contato', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;
  return (
    <header className={`flex bg-gray-800 text-white p-4 w-full fixed  justify-between ${isScrolled ? 'bg-opacity-80 backdrop-blur-lg' : 'bg-opacity-0'} `}>
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <Image alt="My Logo" src={logo} />
        </div>
        <ul className='flex gap-3 align-middle'>
          {navItems.map((item) => (
            <Link key={item.name} className='hover:bg-gray-700 p-2 rounded-md ' href={item.href}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};


export default Header;
