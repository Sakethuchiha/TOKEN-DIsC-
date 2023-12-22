import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tweet_router from './routes/tweet_route.js';
import { PORT, mongodbURL } from './config.js';

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use('/user', tweet_router);

mongoose
  .connect(mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App is connected to the database');
    app.listen(PORT, () => {
      console.log(`App is listening to PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });