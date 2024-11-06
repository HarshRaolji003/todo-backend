const express = require('express');
const route = express.Router();
// controllers
const { 
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo
} = require('../controllers/todoControllers');

// Todo routes
route.get('/todo',getTodo);

route.post('/todo',createTodo);

route.put('/todo/:id',updateTodo);

route.delete('/todo/:id',deleteTodo);

module.exports = route;