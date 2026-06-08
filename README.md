# grupo_9_tp_3_back

Programación III - Tecnicatura Universitaria en Programación

**Profesor**: Gustavo Ramoscelli.

**Ayudante**: Maria Victoria Ruiz.

**Grupo**: Grupo 9.

**Integrantes**: Mazzante Bautista, Vidal Santiago, De Rosa Tiago, Tapuerca Thiago y Wilberger Franco.

**Descripcion**: Este trabajo práctico consiste en la mejora del primer proyecto creado, transformándolo en una aplicación web dinámica mediante la implementación de una arquitectura de back-end. El objetivo es el diseño y despliegue de una API REST funcional que centralice la gestión de datos y permita su consumo de forma remota.

**Metologia y Organizacion**: Usamos Github Descktop con una rama principal 'main', una rama 'dev' y ramas individuales por alumno. Realizamos Pull Requests para cada integración. Cada Uno fue avanzando en su propia rama y fuimos subiendo de apoco todo al Dev.

**Division del trabajo**:
- Mazzante Bautista:
- Vidal Santiago:
- De Rosa Tiago: Documentacion, ayuda en crear los servicios y Ayuda en general con todo lo que es JS en los controlers.
- Tapuerca Thiago:
- Wilberger Franco: 

**Distribución de los archivos y carpetas**:

* **controller**

ruta1Controller.js: Contiene la lógica asíncrona de los endpoints. Acá se definen las funciones getServicios y getServicioById, encargadas de leer el archivo JSON mediante fs.promises, procesar la información y manejar las respuestas o errores (500/404).

**data**

equipo.json: Array con los datos de los desarrolladores del proyecto (incluye ID, nombre, imagen y descripción).

servicios.json: Catálogo de los productos/servicios ofrecidos (incluye ID, nombre, imagen y precio).

usuarios.json: Datos de los perfiles registrados (incluye ID, nombre, mail, fecha de registro, foto y un array con sus últimos pedidos).

***models**

server.js: Define la clase Server. Configura la inicialización de Express, setea el puerto de escucha (dinámico o 3000), aplica middlewares (cors y express.json()), maneja errores y conecta los paths principales con sus respectivos archivos de rutas.

**routes**

equipoRoutes.js: Utiliza el Router de Express para definir el endpoint de la sección de equipo, vinculándolo directamente con su controlador importado.

perfilRoutes.js: Emplea el Router para gestionar las rutas de los usuarios, conectando las peticiones (tanto el listado general como la búsqueda específica por ID) con sus funciones correspondientes en el controlador.

serviciosRoutes.js: Configura los endpoints del catálogo de productos. Mediante el módulo de Express, asocia las rutas para obtener todos los servicios o el detalle de uno en particular con su controlador asignado.

**Archivos**

App.js: Punto de entrada de la aplicación. Instancia la clase Server y ejecuta el método listen() para levantar la API.

package.json / package-lock.json: Gestionan las dependencias instaladas (Express, Cors) y la información del repositorio en GitHub.

gitignore: Excluye carpetas pesadas o innecesarias como node_modules.

**Documentacion De Funciones**:

El back-end está diseñado utilizando bloques async/await y try/catch para prevenir caídas del servidor ante fallos de lectura.

**Clase Server** (server.js):

constructor: Inicializa la app de Express y define el puerto de manera dinámica (usando variables de entorno o 3000 por defecto). Llama automáticamente a los métodos de middlewares, rutas y manejo de errores.

middlewares: Configura CORS para permitir peticiones desde el frontend y habilita express.json() para que la API sea capaz de interpretar los cuerpos (bodies) de las peticiones entrantes en formato JSON.

routes: Conecta el path /servicios con las rutas definidas en serviciosRoutes.js. Incluye también una ruta de prueba /api y está preparado para escalar con más rutas.

errorHandler: Middleware global que captura los errores de la aplicación y responde de forma segura con un estado HTTP (status) y un mensaje en formato JSON, evitando que el servidor se caiga.

listen: Pone a escuchar al servidor y emite un mensaje por consola (console.log) indicando el puerto activo, cumpliendo con la buena práctica de establecer flags..

**Controladores de Servicios** (serviciosController.js):

obtenerServicios: Lee de manera asíncrona el archivo servicios.json. Lo parsea y retorna el array completo con un estado HTTP 200 (implícito en json()). Captura cualquier fallo en el bloque catch devolviendo un estado 500 y logueando el error.

obtenerServicioById: Parecido al anterior, pero extrae el parámetro dinámico req.params.id. Utiliza el método .find() para buscar una coincidencia exacta iterando sobre los IDs (previamente convertidos a Number). Si el servicio no existe, interrumpe el flujo y retorna un error 404 ("Servicio no encontrado").

**Estructura de Archivos JSON**: 
Los datos del sistema se almacenan localmente dentro de la carpeta data/. Cada archivo contiene un array principal de objetos, simulando tablas de una base de datos para facilitar su consumo y persistencia desde la API.

**Ejemplo JSON**:

**Servicios JSON**
[
{
"id": 4,
"nombre": "Shampoo",
"categoria": "Higiene",
"precio": 4500
}
]

