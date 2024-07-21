import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT|| "3000"),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export const sendEmail = async (to: string, subject: string, text: string, attachmentBuffer: Buffer) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to,
    subject,
    text,
    attachments: [
      {
        filename: 'loan_approval.pdf',
        content: attachmentBuffer,
      },
    ],
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}