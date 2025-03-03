# USERSAPI

## Requisitos Previos

- **NodeJS**: Versión 22.14.0 o superior (`node -v`)
- **NPM**: Versión 10.9.2 o superior (`npm -v`)
- **Docker**

## Instalación

1. Descarga el proyecto desde el siguiente [enlace]()
2. Extrae el contenido del archivo zip (Click derecho -> "Extract here").
3. Abre la carpeta en Visual Studio Code.
4. Abre un nuevo terminal (Ctrl + Shift + Ñ).
5. Inicia Docker y ejecutar los siguientes comandos de manera secuencial
   ```sh

      docker-compose up -–build

      docker exec -it node_usersapp /bin/bash
      apt update && apt install -y postgresql-client
      psql -h node_db -U user -d usersapp_db
      password123
      nslookup node_db
      \q
      exit

      npx sequelize-cli db:migrate
      npx sequelize db:seed:all --env development

   ```

**Para probar los endpoints se necesita usar Postman ya que suele ser necesario enviar el token JWT retornado en el login en los headers**

El proyecto tiene por defecto usuarios 
admin@example.com
guest@example.com

Con la contraseña 
password123

Se usan los valores 1 como Admin y 2 como Guest

La dirección de la documentación es http://localhost:3001/api-docs/#/

<p align="right">
  <img src="https://media.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.gif" alt="GIF Animado">
</p>
