// const express = require('express');

import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todos';

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

// const PORT = 7001;
// app.listen(`connected to port ${PORT}`);
// app.listen(`listening to port 7000 ${7000}`);
app.listen(7001);
