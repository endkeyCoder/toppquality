const { Router } = require('express');
const { sendEmail } = require('./config/email');

const routes = Router();
''
routes.post('/sendEmail', async (req, res) => {
    const result = await sendEmail(req.body);
    console.log('verifique o que aconteceu');
    console.log(result);
    res.send({ message: 'server ok', dataEmail: req.body })
})

routes.get('/', (req, res) => {
    res.json({ message: 'server ok' })
})

module.exports = routes;