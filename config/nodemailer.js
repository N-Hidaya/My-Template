import nodemailer from 'nodemailer'

const email = process.env.EMAIL;
const pwd = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: pwd
    },
    secure: true
})

export const mailOptions = {
    from: email,
    to: email
}