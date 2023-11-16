'use client'

import Image from "next/image";
import vector from "../../public/mv-head.svg"
import { IconButton } from "@radix-ui/themes";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ReactElement } from "react";


interface SocialIcons {
  icon: ReactElement;
  href: string;
}

const socialIcons: SocialIcons[] = [
  {
    icon: <GitHubLogoIcon width={32} height={32} color="white" />,
    href: "https://github.com/VieziDev"
  },
  {
    icon: <LinkedInLogoIcon width={32} height={32} color="white" />,
    href: ""
  },
  {
    icon: <InstagramLogoIcon width={32} height={32} color="white" />,
    href: ""
  },
]

export default function Hero() {
  return (
    <section className="flex h-screen justify-center items-center bg-gray-800">
      <div className="container flex gap-24 justify-center items-center">
        <div>
          <h1 className="text-8xl text-white font-bold">Matheus Viezi</h1>
          <p className="text-4xl text-gray-300 font-semibold my-4">Desenvolvedor Web</p>
          <div className="flex gap-4">
            {socialIcons.map((item, index) => (
              <Link key={index} href={item.href} target="_blank" className="hover:bg-gray-700 p-2 rounded-md" >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <Image alt="My Head" src={vector} />
        </div>
      </div>
    </section>
  )
}