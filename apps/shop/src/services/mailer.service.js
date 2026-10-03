import api from './axios';

export const mailerService = {
  sendMail: async (emailData) => {
    const { data } = await api.post('/mailer/send', emailData);
    return data;
  },
};
