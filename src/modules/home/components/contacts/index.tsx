import Container from '@shared/components/common/Container';
import React from 'react';
import info1 from '@shared/assets/images/info_1.jpeg';
import Heading from '@shared/components/atoms/Heading';
import { contactDescription1, contactDescription2 } from '@modules/home/contants';
import Form from '@shared/components/molecules/Form';
import { UseFormReturn, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from '@emotion/styled/macro';
import InputControl from '@shared/components/organisms/Form/InputControl';
import TextareaControl from '@shared/components/organisms/Form/TextareaControl';
import Text from '@shared/components/atoms/Text';
import { sendMail } from '@libs/emailjs';
import useToast from '@shared/components/common/Toast/hooks';
import Animate from '@shared/components/molecules/Animate';

export interface ContactFormTypes {
  fullName: string;
  email: string;
  content: string;
  phone: string;
}

const schemasContactForm = yup.object({
  fullName: yup.string().required('Nhập tên'),
  phone: yup.string().required('Nhập số điện thoại'),
  email: yup.string().required('Nhập email').email('Email không hợp lệ'),
  content: yup.string().max(255, 'Tối đa 255 kí tự').default(''),
});

const Contact: React.FC = () => {
  const methods = useForm<ContactFormTypes>({
    resolver: yupResolver(schemasContactForm),
    mode: 'onSubmit',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      content: '',
    },
  });
  const { toastSingleMode } = useToast();

  const onSubmit = async (values: ContactFormTypes, formHandlers: UseFormReturn<ContactFormTypes>) => {
    try {
      await sendMail({
        from_email: values.email,
        full_name: values.fullName,
        message: values.content,
        phone: values.phone,
      });
      toastSingleMode({
        message: 'Gửi mail thành công!',
        type: 'success',
        once: true,
      });

      formHandlers.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container noPaddingTopBottom>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex-1 pt-8 md:p-4 flex-center flex-col'>
          <div className='w-full px-2'>
            <Animate name='fade-right'>
              <Text className='text-[32px] md:text-[56px] mb-2 font-semibold text-black900'>Liên Hệ</Text>
            </Animate>

            <Animate name='fade-right' delay={500}>
              <Heading className='text-base md:text-lg font-medium text-black900'>
                {contactDescription1}
                <br />
                {contactDescription2}
              </Heading>
            </Animate>
          </div>
          <Animate name='fade-right' delay={500} className='mt-5 md:mt-[50px] w-full relative'>
            <Form onSubmit={onSubmit} methods={methods} className='flex flex-col gap-y-3'>
              <InputControl name='fullName' placeholder='Nhập tên của bạn' />
              <InputControl name='email' type='email' placeholder='email@gmail.com' />
              <InputControl name='phone' placeholder='Nhập số điện thoại của bạn' />

              <TextareaControl rows={4} name='content' placeholder='Hãy gửi thông điệp bạn muốn nhắn...' />
              <Form.FieldSubmit className='font-medium' wrapperClassName='ml-2 mt-4'>
                Gửi
              </Form.FieldSubmit>
            </Form>
          </Animate>
        </div>
        <Animate
          className='relative flex-1 bg-[length:cover] bg-[50%_20%] rounded-2xl overflow-hidden'
          name='fade-left'
          delay={300}
          style={{ backgroundImage: `url(${info1})` }}
        >
          <ThumbnailEffectStyled className='top-[80px] md:top-[100px]' />
        </Animate>
      </div>
    </Container>
  );
};

export default Contact;

const ThumbnailEffectStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 115px;
  backdrop-filter: blur(2px);

  filter: blur(4px);

  animation: B 5s linear infinite;
  -moz-animation: B 5s linear infinite;
  -webkit-animation: B 5s linear infinite;

  @keyframes B {
    0% {
      -webkit-filter: blur(4px);
      filter: blur(4px);
    }
    16.6666666667% {
      -webkit-filter: blur(8px);
      filter: blur(8px);
    }
    33.3333333334% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    50% {
      -webkit-filter: blur(16px);
      filter: blur(16px);
    }
    66.6666666668% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
    }
    83.3333333335% {
      -webkit-filter: blur(8px);
      filter: blur(8px);
    }
    100% {
      -webkit-filter: blur(4px);
      filter: blur(4px);
    }
  }
`;
