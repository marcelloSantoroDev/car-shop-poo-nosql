import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const idValidation = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  
  if (mongoose.Types.ObjectId.isValid(id)) next();
  
  return res.status(422).json({ message: 'Car not found' });
};

export default idValidation;