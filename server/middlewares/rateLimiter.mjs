import { RateLimiterMemory } from 'rate-limiter-flexible';

// Set up rate limiter: maximum of 5 requests per minute
const rateLimiter = new RateLimiterMemory({
  points: 5, 
  duration: 60, 
});

export const rateLimiterMiddleware = async (req, res, next) => {
  try {
    await rateLimiter.consume(req.ip);
    next();
  } catch (error) {
    return res.status(429).json({
      status: 'error',
      message: 'Too many requests, please try again later.',
    });
  }
};
