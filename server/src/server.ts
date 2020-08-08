import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// Making Express understand JSON. It's necessary to read request body.
app.use(express.json());
app.use(routes);

// Listen http requests at definied port: 3333
app.listen(3333);