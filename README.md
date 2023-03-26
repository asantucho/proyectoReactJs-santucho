# E-commerce de cosmética

# Descripción

Este es un proyecto de e-commerce que vende productos de cosmética. Los usuarios pueden filtrar productos por categoría (skincare y make-up), buscar productos por palabras clave y agregar productos al carrito. Para confirmar la compra, los usuarios deben llenar un formulario.

# Tecnologías utilizadas

ReactJS
Bootstrap (para los estilos iniciales)
Firebase (para la base de datos)
React Icons (para agregar íconos al sitio web)
Sweet Alert (para mostrar alertas personalizadas)
Swiper (para el carrusel de marcas)

# Instalación

Para instalar la aplicación, siga estos pasos:

Clone el repositorio a su máquina local.
Instale las dependencias ejecutando el comando npm install.
Cree una cuenta de Firebase y configure la base de datos para su proyecto. Luego, agregue las credenciales de Firebase en un archivo .env en la raíz del proyecto (consulte el archivo .env.example para ver cómo debe ser estructurado el archivo .env).
Inicie la aplicación ejecutando el comando npm start.

# Funcionalidades

Filtrado por categoría: Los usuarios pueden filtrar los productos por categoría (skincare o make-up).
Búsqueda por palabras clave: Los usuarios pueden buscar productos por palabras clave.
Ir al detalle: apretando el botón para aprender más sobre el producto, el usuario será redirigido al detalle del producto en particular seleccionado, donde le aparecerá también la posibilidad de seleccionar una cantidad y agregar al carrito.
Agregar productos al carrito: Los usuarios pueden agregar productos al carrito haciendo clic en el botón "Add to cart" en el componente ItemDetailContainer, luego de haber seleccionado una cantidad mayor a 0 en el contador.
Confirmación de la compra: Los usuarios deben llenar un formulario para confirmar la compra, el cual será submitido y aparecerá un modal señalando el resultado de la operación. En caso exitoso, el carrito se vaciará y la orden será enviada a una nueva colección el firestore.

# Agradecimientos

Gracias al profe, al tutor corrector por sus tips y a mis compañeros de cursada.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
