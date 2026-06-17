const URL = `${import.meta.env.VITE_SERVER_URL}/mailer`;

export const mailerService = {
  sendMail: async (emailData) => {
    const response = await fetch(`${URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return data;
  },
};
