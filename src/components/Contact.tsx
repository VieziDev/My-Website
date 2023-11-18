// Importing necessary components
import Image from "next/image";
import vector from "../../public/mv-head.svg";
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    sendEmail(data);
  };

  return (
    <section id="contact" className="flex h-screen justify-center items-center bg-gray-800">
      <div className="container flex align-baseline">
        <div className="m-auto w-2/5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-6xl text-white font-semibold mb-4">Contato</h1>
            <div className='mb-5'>
              <label htmlFor='name' className='block text-lg font-medium text-white'>Nome Completo</label>
              <input {...register('name', { required: true })} type='text' placeholder='Nome Completo' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md' />
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-lg font-medium text-white'>E-mail</label>
              <input {...register('email', { required: true })} type='email' placeholder='exemplo@dominio.com' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md' />
            </div>
            <div className='mb-5'>
              <label htmlFor='message' className='block text-lg font-medium text-white'>Mensagem</label>
              <textarea {...register('message', { required: true })} rows={4} placeholder='Escreva sua mensagem' className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md'></textarea>
            </div>
            <div>
              <button className='hover:shadow-form rounded-md bg-[#007ACB] py-3 px-8 text-lg font-semibold text-white outline-none'>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
