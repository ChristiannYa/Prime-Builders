import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './config/email/environment.mjs';
import { errorHandler } from './middlewares/errorHandler.mjs';
import contactRoutes from './routes/contact.mjs';

const app = express();

app.use(cors(config.cors));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contact', contactRoutes);

app.use(errorHandler);

console.log('Email config:', {
  service: process.env.EMAIL_SERVICE,
  user: process.env.EMAIL_USER,
  passLength: process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0,
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
