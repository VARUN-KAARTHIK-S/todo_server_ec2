//route.post,route.get,route.put,route.delete

import { addTodo, getTodo, updateTodo, deleteTodo } from "../Controller/todoController.js";
import express from 'express'

const route = express.Router();
route.post('/addtodo', addTodo);
route.get('/gettodo', getTodo);
route.put('/updateTodo/:id', updateTodo);
route.delete('/deleteTodo/:id', deleteTodo)

export default route                                                      