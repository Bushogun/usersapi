const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./src/microservices/users/infraestructure/api/routes/userRoutes.js');

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use('/api/users', userRoutes);

import('./swagger.mjs')
  .then((module) => {
    const swaggerSetup = module.default;
    swaggerSetup(app); 
  })
  .catch((error) => {
    console.error('❌ Error al cargar Swagger:', error);
  });

function startServer() {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
}

async function main() {
    startServer();
}

main().catch((error) => {
    console.error('❌ Error al iniciar la aplicación:', error);
    process.exit(1);
});