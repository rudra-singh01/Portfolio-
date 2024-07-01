import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err);
});

// Import the contact route
import router from './router/contact.js'

app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
