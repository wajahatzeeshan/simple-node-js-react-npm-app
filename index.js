import express from 'express';

const app = express();
const PORT = 3000;

const htmlResponse = `<h1>Hello Lloyds Modern Engineering Participants!</h1>
<p>This app was built by jenkins</p>`;

app.get('/', (_req, res) => res.status(200).send(htmlResponse));

app.listen(PORT, () => `App is listening on ${PORT}`);
