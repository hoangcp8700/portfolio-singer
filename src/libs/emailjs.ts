import emailjs from '@emailjs/browser';

type SendMailType = {
  full_name: string;
  message: string;
  from_email?: string;
  phone: string;
};

const configs = {
  serviceID: import.meta.env.VITE_APP_SERVICE_ID || '',
  templateID: import.meta.env.VITE_APP_TEMPLATE_ID || '',
  publicID: import.meta.env.VITE_APP_PUBLIC_ID || '',
};

export const sendMail = async ({ full_name, phone, from_email, message }: SendMailType) => {
  try {
    const form = {
      full_name,
      message,
      from_email,
      phone,
    };
    console.log(configs, form);
    await emailjs.send(configs.serviceID, configs.templateID, form, configs.publicID).then(
      (result) => {
        console.log('SUCCESS!', result, result.status, result.text);
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );
  } catch (err) {
    console.error(err);
  }
};
