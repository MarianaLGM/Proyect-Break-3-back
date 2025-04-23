**************************************CENTRO DE ESTÉTICA********************************************************
![Logo tienda de ropa](https://res.cloudinary.com/dljpuje5r/image/upload/v1745252932/Tova_cn1yyn.png)


## ÍNDICE
*[Descripción del proyecto](#Descripción-del-proyecto)
*[Funcionalidades del proyecto](#Funcionalidades-del-proyecto)
*[Tecnologías utilizadas](#Tecnologías-utilizadas)
*[Características de archivos](#Características-de-los-archivos)
*[Base de datos](#Base-de-datos)
*[Servidor](#Servidor)
*[Modelos](#Modelos)
*[Rutas](#Rutas)
*[Controladores](#Controladores)
*[Despliegue](#Despliegue)
*[Firebase](#Firebase)
*[Autores](#Autores)

## Descripción del proyecto
Proyecto realizado como requisito del Bootcamp Full Stack Developer de The Bridge. Centro de estética, donde los usuarios pueden agendar citas online y también dispone de una pasarela de pago para la compra de tarjetas regalo. A los administradores de la tienda, les permite crear un usuario e iniciar sesión para poder gestionar los productos: crear, editar o borrar cualquier artículo.

## Funcionalidades del proyecto
- `Registro de usuarios`: Permite el registro de usuarios para los administradores de la tienda online. Requiere de correo electrónico y contraseña (min. 6 caracteres).
- `Inicio de sesión de usuarios`: Al iniciar sesión, el administrador podrá realizar funciones, como crear, editar o borrar un servicio.
- `Clasificación de los tratamientos por categoría`: Permite una visión rápida de todos los tratamientos organizados por categorías: faciales y corporales.
- `Ver detalles del servicio`: Permite visualizar todos los detalles del servicio haciendo click en "ver".
- `Creación de nuevo servicio`: Permite crear un nuevo producto, introduciendo valores como titulo, descripción, duración categoría, precio y url de la imágen. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Editar un servicio`: Permite editar todos los campos rellenados en la creación del servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Borrar un servicio`: Borra cualquier servicio. Para esta funcionalidad debe haber realizado inicio de sesión.
- `Reserva`: Permite a los usuarios seleccionar fecha y hora para agendar un servicio de forma sencilla.
- `Regala TOVA`: Opción para adquirir tarjetas regalo a través de una pasarela de pago segura.
- `Contacto`: Canal directo para que los usuarios puedan realizar consultas o solicitar información personalizada.


****************************************TECNOLOGÍAS UTILIZADAS**************************************************

- **Node.js** – Entorno de ejecución para JavaScript en el servidor.
- **Express.js** – Framework minimalista para crear la API REST.
- **MongoDB** – Base de datos NoSQL.
- **Mongoose** – ODM que facilita la interacción con MongoDB desde Node.js.
- **Firebase Admin SDK** – Permite validar tokens y gestionar usuarios desde el backend.
- **dotenv** – Carga de variables de entorno desde un archivo `.env`.
- **cors** – Middleware para habilitar el intercambio de recursos entre distintos orígenes.
- **cookie-parser** – Middleware para manejar cookies en peticiones HTTP.

****************************************CARACTERÍSTICAS ARCHIVOS**************************************************

### 📁 controllers
- controllers/authControllers.js: Archivo que contiene la configuración de firebase y la lógica para manejar tanto la creación de usuario, como el registro, inicio y cierre de sesión del administrador utilizando Firebase. Devuelve las respuestas en formato HTML.
- controllers/ServicesControllers.js: Archivo que contiene la lógica para manejar las solicitudes CRUD de los servicios. Devuelve las respuestas en formato HTML.

### 📁 routes
- routes/servicesRoutes.js: Archivo que contiene la definición de las rutas CRUD para los servicios. Este llama a los métodos del controlador.
- routes/authRoutes.js: Archivo que contiene la definición de las rutas para la autenticación. Este llama a los métodos del controlador.

### 📁 models
- Contiene los modelos de la bbdd. Un modelo para la gestión de servicios y otro para la gestión de las citas.

### 📁 middlewares
- middlewares/verifyToken.js: Archivo que contiene el middleware para comprobar si el usuario está autenticado. Este busca la sesión del usuario y, si no la encuentra, redirige al formulario de login.

### 📄 index.js
- Configura Express, conecta con MongoDB, define middlewares globales y lanza el servidor.

### 📄 .env
- Archivo que contendrá las variables de entorno. 

### 📄package.json
- package.json: Archivo que contendrá las dependencias del proyecto. Se debe hacer ```npm i``` para instalar todas las dependencias necesarias para que el proyecto funcione. (npm start)

**********************************************SERVIDOR***********************************************

- `express`: Framework para crear el servidor.

- `mongoose`: Conexión a la base de datos MongoDB.

- `dotenv`: Para cargar las variables de entorno desde un archivo .env.

- `cookie-parser`: Para manejar cookies de autenticación.

- `firebase-admin`: Para manejar la autenticación con Firebase.

******************************************************BBDD**********************************************************

La base de datos se gestiona mediante MongoDB Atlas.

Una vez creada la base de datos, copiamos la uri y la guardamos en el archivo .env

MONGO_URI=<uri_bd_atlas>

*******************************************************MODELOS******************************************************

### Services

- Título, tipo STRING
- Descripción, tipo STRING
- Imagen, tipo STRING
- Categoría ('Tratamiento facial', 'Tratamiento corporal'.), tipo STRING
- Duración, tipo STRING
- Precio, tipo NÚMERO

### Appointment

- Dia, tipo STRING
- Hora, tipo STRING
- Servicio ('Terapia Facial Revitaluxe', 'Luminova - Fotoregeneración Avanzada', 'Limpieza Facial PureGlow', 
'Limpieza - Facial RenewUp', 'Tratamiento Reafirmante Imperium Cell', 'Zionic Remodelación Corporal Activa', 'Tratamiento Estrías', 'Acmella Oleracea - Lifting Natural'.),tipo STRING
- Nombre, tipo STRING
- Telefono, tipo NÚMERO
- Observaciones, tipo STRING

*********************************************************RUTAS******************************************************
## Rutas
POSTMAN:  https://documenter.getpostman.com/view/40898562/2sB2cVe22t

### services

- `GET /`: Devuelve todos los services. Cada servicio tendrá un enlace a su página de detalle.

- `GET /create`: Crea un servicio si el administrador está logado.

- `GET /id/:_id`: Devuelve el detalle de un servicio.
- `PUT /id/:_id`: Crea un servicio si el administrador está logado.
- `DELETE /id/:_id`: Elimina un servicio si el administrador está logado.

- `GET /tratamientos-faciales`: obtiene las tratamientos faciales.
- `GET /tratamientos-corporales`: obtiene las tratamientos corporales.

- `GET /appointment`: obtiene las citas agendadas.
- `POST /appointment`: crea una cita.


### user

- `POST /register`: Registro de usuario para continuar al login.

- `POST /login`: Comprobación de auténticación para continuar al dashboard.

- `POST /logout`: Cierra sesión.

****************************************************CONTROLADORES**************************************************
### 📄 ServicesControllers.js

- `create`: Crea un nuevo servicio con los datos que se pasan en el body (POST).

- `getAll`: Devuelve todos los servicios existentes en la base de datos (GET).

- `getByID`: Devuelve un servicio por su ID (GET).

- `getByTratamientoFacial`: Devuelve solo los servicios  con la categoría: “Tratamiento facial”.

- `getByTratamientoCorporal`: Devuelve solo los servicios con la categoría: “Tratamiento corporal”.

- `updateById`: Permite modificar/actualizar un servicio por su ID (PUT).

- `deleteService`: Elimina un servicio por ID (DELETE).

### 📄 AppointmentsControllers.js

- `create`: Crea una cita (POST) con los datos facilitados por el usuario a través del formulario. 

- `getAll`: Muestra todas las citas que se fueron almacenando en la base de datos (GET).

### 📄 authControllers.js

- `registerPost`: Envío de datos del administrador para crear una cuenta de usuario.

- `loginPost`: Comprobación de auténticación para continuar al dashboard.

- `logoutPost`: Cierre de sessión.


**********************************************SERVIDOR***********************************************

Este servidor está construido con Node.js y Express, y gestiona:

- Levantamos el servidor npm start.

- Autenticación con Firebase.

- Conexión y operaciones con la base de datos MongoDB (a través de Mongoose).

- Rutas para servicios y citas.

- Middleware para el manejo de cookies, JSON y formularios.

- CORS configurado para permitir la conexión desde el frontend.


**********************************************DESPLIEGUE***********************************************






**********************************************FIREBASE***********************************************

Utilizamos firebase-admin para:

- Registrar nuevos usuarios (createUser).

- Verificar tokens enviados desde el frontend (verifyIdToken).


************************************************AUTORES*************************************************
[Adni Sosa](https://github.com/AdniSosa)  | [Mariana Lobeto](https://github.com/MarianaLGM)
