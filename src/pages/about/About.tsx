import Image from "next/image";
import vector from "../../../public/My_Head_Notebook.svg";
import SectionContainer from "@/components/SectionContainer";

const About: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-800 text-white">
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-center gap-16 h-screen">
          <div className="md:w-1/2">
            <h2 className="text-6xl font-bold">Sobre Mim</h2>
            <p className="mt-4 text-lg text-justify">
              Sou um desenvolvedor com habilidades em Javascript, Typescript, React JS, Node JS e Flutter, com experiência em criação de aplicações web e mobile de alta qualidade e eficiência. Além disso, possuo habilidades em UI&UX, o que me permite criar interfaces incríveis e intuitivas para o usuário. Eu valorizo muito a qualidade em todos os projetos que desenvolvo e estou sempre em busca de aprimorar minhas habilidades e conhecimentos em tecnologia.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image height={600} width={600} alt="My Head" src={vector} />
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export default About;

