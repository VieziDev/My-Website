'use client'
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../../utils/send-email';
import { useState } from 'react';
import Spinner from './Spinner';
import Toast from '@/components/Toast';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ToastState {
  show: boolean;
  message: string;
  type: "success" | "error";
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await sendEmail(data);
      setToast({ show: true, message: 'E-mail enviado com sucesso!', type: 'success' });
    } catch (error) {
      setToast({ show: true, message: 'Falha ao enviar o e-mail.', type: 'error' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-6xl text-white font-semibold mb-4">Contato</h1>

        {/* Name Field */}
        <div className='mb-5'>
          <label htmlFor='name' className='block text-lg font-medium text-white'>Nome Completo</label>
          <input {...register('name', { required: "Nome é obrigatório" })} type='text' placeholder='Nome Completo' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md' />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className='mb-5'>
          <label htmlFor='email' className='block text-lg font-medium text-white'>E-mail</label>
          <input {...register('email', {
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "E-mail inválido"
            }
          })} type='email' placeholder='exemplo@dominio.com' className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md' />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* Message Field */}
        <div className='mb-5'>
          <label htmlFor='message' className='block text-lg font-medium text-white'>Mensagem</label>
          <textarea {...register('message', { required: "Mensagem é obrigatória" })} rows={4} placeholder='Escreva sua mensagem' className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-[#007ACB] focus:shadow-md'></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`hover:shadow-form rounded-md bg-[#007ACB] py-3 px-8 text-lg font-semibold text-white outline-none`}
          >
            {isLoading ? <Spinner /> : 'Enviar'}
          </button>
        </div>
      </form>

      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </>
  )
}

export default ContactForm;