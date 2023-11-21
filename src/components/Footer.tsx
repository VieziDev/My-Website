'use client'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactElement } from "react";

interface IconsLinks {
  icon: ReactElement;
  href: string;
}

const iconsLinks: IconsLinks[] = [
  { icon: <GitHubLogoIcon />, href: 'https://github.com/VieziDev' },
  { icon: <LinkedInLogoIcon />, href: 'https://facebook.com' },
  { icon: <InstagramLogoIcon />, href: 'https://instagram.com' },

];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <div className="container mx-auto ">
        <p>&copy; {new Date().getFullYear()} MV Web Developer. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-2">
          {iconsLinks.map((item) => (
            <Link key={item.href} className='hover:bg-gray-700 p-2 rounded-md' href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;