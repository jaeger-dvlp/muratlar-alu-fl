import { Resend } from 'resend';

import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendMail(req: NextApiRequest) {
  try {
    const { name, email, message, surname } = await req.body;
    const mailToSent = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'omer.kayalar0101@icloud.com',
      subject: 'İletişim Talebi | Muratlar Aluminyum',
      text: `
        İsim: ${name}
        Soyisim: ${surname}
        E-posta: ${email}
        Mesaj: ${message}
      `,
    });

    if (mailToSent?.error) {
      throw new Error(mailToSent.error.message);
    }

    return {
      status: 200,
      body: { message: 'contact.response.success' },
    };
  } catch (error: any) {
    // eslint-disable-next-line no-console
    console.error(error);
    return {
      status: 500,
      body: { error: 'contact.response.error' },
    };
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return SendMail(req)
      .then((response) => res.status(response.status).json(response.body))
      .catch((error) => res.status(500).json({ error: error.message }));
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
