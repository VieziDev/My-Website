import ContactForm from "./components/ContactForm";
import Image from "next/image";
import vector from "../../../public/notebook.svg";
import SectionContainer from "@/components/SectionContainer";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 bg-gray-800 ">
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 h-screen">
          <div className="md:order-2 mb-8 md:mb-0 md:w-2/5"> {/* Formulário à direita */}
            <ContactForm />
          </div>
          <div className="md:order-1 md:w-2/4">
            <Image alt="Notebook" src={vector} layout="responsive" />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Contact;
