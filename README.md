# Proyecto CoinMarket Challenge

Este proyecto es parte de un desafío que consiste en desarrollar una aplicación móvil que se conecta a la API de CoinMarket para mostrar un listado de 100 criptomonedas con sus precios en dólares. La aplicación permite agregar criptomonedas a una lista de favoritos, utilizar autenticación de Google para acceder a la aplicación y ver más detalles sobre cada criptomoneda.

## Características

- Conexión a la API de CoinMarket para obtener datos en tiempo real sobre criptomonedas.
- Visualización de un listado de 100 criptomonedas con sus precios en dólares.
- Funcionalidad para agregar criptomonedas a una lista de favoritos.
- Autenticación de Google para acceder a la aplicación.
- Navegación entre pantallas implementada con React Navigation.
- Visualización de detalles adicionales sobre cada criptomoneda.
- Uso de Zustand y AsyncStorage para almacenar la lista de favoritos y persistir la información.
- Configuración de ESLint y Prettier para estandarizar el código.
- Template con las variables de entorno para poder configurarlas con credenciales propias.

## Tecnologías utilizadas

- React Native
- Axios
- React Query
- Zustand
- AsyncStorage
- React Navigation
- React Native Config
- Google Sign-In
- ESLint
- Prettier

## Instrucciones de instalación

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Instala las dependencias utilizando Yarn:
   ```sh
   yarn install
   ```
4. Instala los Pods para iOS:
   ```sh
   yarn run ios:install
   ```
5. Para correr la app en iOS:
   ```sh
   yarn run ios
   ```
6. Para correr la app en Android:
   ```sh
   yarn run android
   ```

## Contribuir

Si quieres contribuir a este proyecto, ¡eres bienvenido! Siéntete libre de abrir un pull request con cualquier mejora o corrección que desees realizar. También puedes informar sobre problemas abriendo un issue en el repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
