const nodemailer = require('nodemailer');
require('dotenv/config');

const user = 'Site Topp Quality <sactoppquality@gmail.com>';
const address = process.env.EMAIL_TRANSPORTER;
const password = process.env.PASS_EMAIL;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: address,
        pass: password
    }
})

async function sendEmail(dataEmail) {
    const { name, email, subject, message } = dataEmail

    const bodyEmail = `Olá, voce tem uma nova mensagem eviada por <b>${name} ${email}</b><br />
        Segue abaixo a mensagem<br /><br />
        ${message}<br/><br/>
        Utilize as informações recebidas para entrar em contato com o interessado!
    `;
    const result = await transporter.sendMail({
        from: user,
        to: address,
        subject: subject,
        html: bodyEmail,
    })

    return result;
}

module.exports = {
    sendEmail
}