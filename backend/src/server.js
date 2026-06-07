import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import request from './controllers/request.controller.js';

const app = express();
const PORT = 3000;


app.use(express.json({limit:'16kb'}));
app.use(express.urlencoded({limit:'16kb'}));
app.use(cors());

app.get('/api/v1/health', (req, res) => res.status(200).send('Welcome Back!'));

app.post('/api/v1/request', request);

app.listen(PORT || 3000, () => console.log(`Server is running on ${PORT || 3000}`));

export default app;