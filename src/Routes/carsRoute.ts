import express from 'express';
import CarsController from '../Controllers/CarsController';

const router = express.Router();

const carsController = new CarsController();

router.use('/', carsController.create);

export default router;