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

5. Inicia Docker.

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

**¡RECUERDA SIEMPRE CERRAR SESIÓN PARA NO TENER ERRORES EN FUTURAS EJECUCIONES!**

## Funcionalidades

Esta prueba fue realizada en tiempo récord con una arquitectura Hexagonal en el backend orientado al desarrollo con DDD y programación funcional en el front. Cuenta con las siguientes funcionalidades:

- **Base de datos**: Persiste el usuario, cómics favoritos y cómics.
- **Registro de cómics**: Los cómics se registran por ID y Título.
- **Pantalla de LogIn**:
  - Hace login y almacena un token que permite la interacción con el backend, el cual controla las peticiones al API de Marvel y las funcionalidades de la aplicación.
  - Sin un login no se puede acceder a rutas protegidas como el "Dashboard" y los cómics específicos cuyos detalles se quieren ver.
  - LogIn con token JWT, el cual es persistido en el estado de Redux y almacenado en localStorage.
- **Pantalla de Registro**:
  - Comprueba si existe el usuario que se va a registrar por medio de su identificación y su correo.
  - Maneja el formulario de registro con validación de campos con la librería de React Hook Form.
- **Sistema de verificación**: Tanto el front como el backend poseen un sistema de verificación de formularios y datos enviados.
- **Favoritos**: Sistema para añadir y obtener cómics favoritos de usuarios específicos.
- **Seguridad**:
  - En el backend se encripta la llave con la que se hacen las solicitudes al API de Marvel.
  - En el front no se usaron librerías de diseño predefinido; cada línea de CSS fue escrita como parte de un reto personal.
- **Interfaz de usuario**: Una vez iniciada sesión, se obtiene el usuario y se despliega su nombre en un componente que también permite cerrar sesión.

<p align="right">
  <img src="https://media.giphy.com/media/SvFocn0wNMx0iv2rYz/giphy.gif" alt="GIF Animado">
</p>
