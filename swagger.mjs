// swagger.mjs
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { serve, setup } from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "User API", version: "1.0.0" },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./src/microservices/users/infrastructure/api/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default function swaggerSetup(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}