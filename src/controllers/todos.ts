// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  // const newTodo = {};
  const newTodo = new Todo(Math.random().toString());
};
