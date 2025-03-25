import { body, validationResult } from 'express-validator';

export const contactValidationRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').trim().isEmail().withMessage('Please provide a valid email address'),
  body('phone').optional({ checkFalsy: true })
    .custom((value) => {
      const digitsOnly = value.replace(/\D/g, '');
      return digitsOnly.length === 10;
    }).withMessage('Please provide a valid 10-digit phone number'),
  body('subject').optional({ checkFalsy: true })
    .trim()
    .matches(/^[a-zA-Z0-9 ]*$/).withMessage('Subject can only contain letters, numbers and spaces')
    .isLength({ max: 100 }).withMessage('Subject cannot exceed 100 characters'),
  body('message').trim().notEmpty().withMessage('Please provide a message')
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map(err => ({
    field: err.path,
    message: err.msg
  }));

  return res.status(400).json({
    status: 'error',
    message: 'Validation failed',
    errors: extractedErrors
  });
};
