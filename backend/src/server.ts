import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
import { errors } from 'celebrate';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

<<<<<<< HEAD
// app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
=======
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d


app.use(errors());

app.listen(3333);