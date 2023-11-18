import Image from "next/image"
import vector from "../../public/My_Head_Notebook.svg"

const About: React.FC = () => {
  return (
    <section id="about" className="flex h-screen justify-center items-center bg-gray-800">
      <div className="container flex align-baseline">
        <Image className="" alt="My Head" src={vector} />
        <div className="m-auto w-2/5">
          <h1 className="text-6xl text-white font-semibold">Sobre Mim</h1>
          <p className="text-justify text-xl text-gray-300 my-4">Sou um desenvolvedor com habilidades em Javascript, Typescript, React JS, Node JS e Flutter, com experiência em criação de aplicações web e mobile de alta qualidade e eficiência. Além disso, possuo habilidades em UI&UX, o que me permite criar interfaces incríveis e intuitivas para o usuário. Eu valorizo muito a qualidade em todos os projetos que desenvolvo e estou sempre em busca de aprimorar minhas habilidades e conhecimentos em tecnologia.</p>
        </div>
      </div>
    </section>
  )
}

export default About;