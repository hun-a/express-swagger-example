const app = require('../src/app');

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is running - { env: ${process.env.NODE_ENV}, port: ${PORT} }`));
