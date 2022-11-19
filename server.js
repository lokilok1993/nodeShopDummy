// Node объект для http
const http = require('http');

// Express объект логики сервера
const app = require('./app');

// Установка порта из окружения или 1111
const port = process.env.PORT || 1111;

// Запускаем сервер и слушаем запросы 
const server = http.createServer(app);
server.listen(port);