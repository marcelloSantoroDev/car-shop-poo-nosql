import express from 'express';
import carsRoute from './carsRoute';
import motorcycleRoute from './motorcyclesRoute';

const router = express.Router();

router.use('/cars', carsRoute);
router.use('/motorcycles', motorcycleRoute);

export default router;