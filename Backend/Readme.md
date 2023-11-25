-- pasos para crear desde cero este backend.

--ejecutar
npm init -y

--ejecutar
npm install

--instalar el modulo para sql server ,express,mogan, cors , dotenv
npm install mssql express morgan cors dotenv

--ejecutar el archivo y probar si corre
node src/index.js

--utilizar  Babel en javascript - nodeJs
--nodemon se utiliza para no estar reiniciando el servidor a cada rato
npm i @babel/core @babel/cli @babel/preset-env @babel/node nodemon -D

--instalar
npm i @babel/plugin-transform-runtime -D


--ahora iniciamos el servidor con ----------------------------------- para desarrollar
npm run dev




--para despliegue ya queda configurado
npm run build
npm start