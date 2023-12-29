# shoppingCartChallenge
A shopping cart UI that consuming a few endpoints.


En este repositorio podemos encontrar un ejercicio para la creacion de una aplicacion en React que cuenta con las sifuientes funcionalidades:

- En la pantalla principal se muestra un catalogo con todos los productos que estan disponibles para comprar
- al seleccionar cualquer tarjeta del producto nos llevara a la vista detallada del producto
- si se selecciona el boton de añadir al carrito, este hara la validacion para buscarlo en el carrito, si existe se mostrara una alerta con este mensaje
  Si el producto no existe en el carrito se agrega y se muestra una alerta con esta accion.
- En la vista del detalle del producto se puede seleccionar el numero de piezas que se agregan al carrito, mostrando sus respectivas alertas.
- En la vista del carrito podremos encontrar el listado de los productos que se van a comprar, asi como la opcion de agregar piezas o eliminarlas, ademas del resumen del pedido
## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/)

Para ejecutar este proyecto como primer paso debemos clonalonar este repositorio:

   ```bash
   git clone [https://github.com/MigueLopezAG/blog-app.git](https://github.com/MigueLopezAG/shoppingCartChallenge.git)

Una vez clonado el repositorio navegaremos al directorio del proyecto desde la terminal
  cd shoppingCartChallenge

una vez que estemos apuntando al directorio instalaremos las dependencias del endpoint
  cd challenge-endpoint
  npm install

Para iniciar el servidor utilizamos la siguiente instruccion:
 node index.js

una vez que tengamos corriendo el servidor procedemos a iniciar el proyecto del cliente, para esto nos ubicamos en la ruta del proyecto shoppingCartChallenge en una nueva terminal 
y accedemos a la carpeta cliente
  cd client

ya hubicados instalamos las dependencias del proyecto
  npm install

y continuamos con la configuracion para ejecutar el proyecto de manera local
  -Copiamos el archivo '.env.example' y lo renombramos como '.env'

En este archivo .env cambiamos la variable API_URL por la direccion del servidor, para este ejemplo vamos a utilizar "http://localhost:3000"
  API_URL=http://localhost:3000

una vez configurado las variables de entorno iniciaremos nuestro proyecto
  npm run dev
Ahora podremos acceder al proyecto
