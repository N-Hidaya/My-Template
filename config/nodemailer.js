import nodemailer from 'nodemailer'

//Key in your env EMAIL and PASS in Next deployment page env settings. Or any other hosting parties.
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