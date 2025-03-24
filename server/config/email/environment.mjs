export const config = {
  port: process.env.PORT || 3000,
  cors: {
    origins: ['http://primebuildercpt.netlify.app', 'http://localhost:5173'],
  },
  methods: ['POST', 'GET'],
  credentials: true,
};
