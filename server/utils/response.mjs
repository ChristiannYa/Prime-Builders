export const successResponse = (message, data = null) => ({
  status: 'success',
  message,
  ...(data && { data }),
});

export const errorResponse = (message, errors = null, status = 'error') => {
  const response = {
    status,
    message,
  };

  if (errors) {
    response.errors = errors;
  }

  return response;
};
