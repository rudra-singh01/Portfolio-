import express from 'express';
import User from './models/userSchema.js';

const app = express();
import cors from "cors"
app.use(express.json());
app.use(cors());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});