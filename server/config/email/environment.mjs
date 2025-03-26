export const config = {
  port: process.env.PORT || 3000,
  cors: {
    origin: ['https://primebuildersctp.netlify.app/', 'http://localhost:5173'],
    methods: ['POST', 'GET'],
    credentials: true,
  },
};
