'use client';

import emailjs from '@emailjs/browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Button, ContactInput } from '.';
import { motion } from 'framer-motion';

export interface FormValues extends Record<string, string> {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const serviceID = process.env.NEXT_PUBLIC_MAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_MAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_MAILJS_USER_ID;

    if (!serviceID || !templateID || !userID)
      return toast.error(
        <div>
          에러가 발생하였습니다.
          <br />
          관리자에게 문의 바랍니다.
        </div>,
      );

    emailjs.send(serviceID, templateID, data, userID).then(
      () => {
        toast('메세지가 전송되었습니다.');
      },
      (error) => {
        toast.error(
          <div>
            메세지 전송에 실패했습니다.
            <br />
            다시 시도해 주세요.
            <br />
            {error}
          </div>,
        );
      },
    );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='gap-40pxr flex-col-center mobile:gap-20pxr'
    >
      <h2 className='!text-32pxr font-title1 mobile:!text-28pxr'>Contact</h2>
      <div className='flex w-full flex-col gap-28pxr mobile:gap-22pxr'>
        <ContactInput
          inputType='input'
          register={register}
          errors={errors}
          label='Name'
          required='이름을 입력해 주세요.'
          id='name'
          placeholder='이름을 입력해 주세요.'
        />
        <ContactInput
          inputType='input'
          register={register}
          errors={errors}
          label='Email'
          required='이메일을 입력해 주세요.'
          id='email'
          placeholder='이메일을 입력해 주세요.'
          pattern={{
            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message: '이메일 형식이 올바르지 않습니다.',
          }}
        />
        <ContactInput
          inputType='textarea'
          register={register}
          errors={errors}
          label='Message'
          required='메세지를 입력해 주세요.'
          id='message'
          placeholder='메세지를 입력해 주세요.'
          maxLength={{
            value: 2000,
            message: '메세지는 2000자 이내로 입력 해 주세요.',
          }}
        />
      </div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Button.Primary>전송</Button.Primary>
      </motion.div>
    </form>
  );
}

export default ContactForm;
