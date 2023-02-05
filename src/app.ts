// const express = require('express');

import express, { Request, Response, NextFunction } from 'express';

import todoRoutes from './routes/todos';

const PORT = 7000;

const app = express();

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.json({ message: err.message });
});

app.listen(`connected to port ${PORT}`);
