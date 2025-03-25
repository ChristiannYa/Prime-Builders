import express from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { sendContactEmail } from '../controllers/contact.mjs';
import {
  contactValidationRules,
  validate,
} from '../middlewares/validation.mjs';
import { rateLimiterMiddleware } from '../middlewares/rateLimiter.mjs';

const router = express.Router();

router.post(
  '/submit',
  rateLimiterMiddleware,
  contactValidationRules,
  validate,
  sendContactEmail
);

export default router;
