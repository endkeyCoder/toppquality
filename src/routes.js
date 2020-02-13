const { Router } = require('express');
const { sendEmail } = require('./config/email');

const routes = Router();
''
routes.post('/sendEmail', async (req, res) => {
    const result = await sendEmail(req.body);

    if (result.accepted) {
        res.status(200).send({ message: 'Email enviado', data: result })
    } else {
        res.status(400).send({
            message: 'Problema ao enviar o email, informe o problema através do whatsapp por favor',
            data: result
        })
    }
})

routes.get('/', (req, res) => {
    res.json({ message: 'server ok' })
})

module.exports = routes;