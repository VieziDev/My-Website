import Image from "next/image";
import vector from "../../../public/mv-head.svg"
import SocialIconsTab from "./components/SocialIcons";
import SectionContainer from "@/components/SectionContainer";



const Hero: React.FC = () => {
  return (
    <section id="#initial" className="flex h-screen justify-center items-center bg-gray-800">
      <SectionContainer>
        <div className="container flex gap-24 justify-center items-center">
          <span>
            <h1 className="text-8xl text-white font-semibold">Matheus Viezi</h1>
            <p className="text-4xl text-gray-300 my-4">Desenvolvedor Web & Mobile</p>
            <div className="flex gap-4">
              <SocialIconsTab />
            </div>
          </span>
          <div className="">
            <Image alt="My Head" src={vector} />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default Hero;