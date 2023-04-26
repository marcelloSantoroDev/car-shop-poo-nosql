import express from 'express';
import CarsController from '../Controllers/CarsController';

const router = express.Router();

router.post('/', (req, res) => new CarsController(req, res).create());

export default router;