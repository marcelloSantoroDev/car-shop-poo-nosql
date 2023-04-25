import express from 'express';
import carsRoute from './carsRoute';

const router = express.Router();

router.use('/cars', carsRoute);

export default router;