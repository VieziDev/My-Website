'use client'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
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

const SocialIconsTab: React.FC = () => {
  return (
    socialIcons.map((item, index) => (
      <Link key={index} href={item.href} target="_blank" className="hover:bg-gray-700 p-2 rounded-md" >
        {item.icon}
      </Link>
    ))
  )
}

export default SocialIconsTab;