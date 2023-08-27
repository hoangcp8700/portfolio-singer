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

export interface ContactFormTypes {
  fullName: string;
  email: string;
  content: string;
}

const schemasContactForm = yup.object({
  fullName: yup.string().required('Full name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  content: yup.string().max(255, 'Max length is 255 character').default(''),
});

const Contact: React.FC = () => {
  const methods = useForm<ContactFormTypes>({
    resolver: yupResolver(schemasContactForm),
    mode: 'onSubmit',
    defaultValues: {
      fullName: '',
      email: '',
      content: '',
    },
  });

  const onSubmit = async (values: ContactFormTypes, formHandlers: UseFormReturn<ContactFormTypes>) => {
    console.log('values', values);
    formHandlers.reset();
    try {
      throw new Error('error');
    } catch (error) {
      throw new Error('error');
    }
  };
  return (
    <Container noPaddingTopBottom>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex-1 pt-8 md:p-4 flex-center flex-col'>
          <div className='w-full px-2'>
            <Text className='text-[32px] md:text-[56px] mb-2 font-semibold text-black900'>Liên Hệ</Text>

            <Heading className='text-base md:text-lg font-medium text-black900'>
              {contactDescription1}
              <br />
              {contactDescription2}
            </Heading>
          </div>
          <Form
            onSubmit={onSubmit}
            methods={methods}
            className='flex flex-col gap-y-3 mt-5 md:mt-[50px] w-full relative'
          >
            <InputControl name='fullName' placeholder='Nhập tên của bạn' />
            <InputControl name='email' placeholder='email@gmail.com' />
            <TextareaControl rows={4} name='content' placeholder='Hãy gửi thông điệp bạn muốn nhắn...' />
            <Form.FieldSubmit className='font-medium' wrapperClassName='ml-2 mt-4'>
              Gửi
            </Form.FieldSubmit>
          </Form>
        </div>
        <div
          style={{ backgroundImage: `url(${info1})` }}
          className='min-h-[60vh] md:min-h-[80vh] relative flex-1 bg-[length:160%_160%] bg-[50%_20%] rounded-2xl overflow-hidden'
        >
          <ThumbnailEffectStyled className='top-[80px] md:top-[165px]' />
        </div>
      </div>
    </Container>
  );
};

export default Contact;

const ThumbnailEffectStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 160px;
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
