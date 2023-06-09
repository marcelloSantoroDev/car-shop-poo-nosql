import express from 'express';
import CarsController from '../Controllers/CarsController';

const router = express.Router();

router.post('/', (req, res) => new CarsController(req, res).create());
router.get('/', (req, res) => new CarsController(req, res).getAll());
router.get('/:id', (req, res) => new CarsController(req, res).getById());
router.put('/:id', (req, res) => new CarsController(req, res).update());
router.delete('/:id', (req, res) => new CarsController(req, res).deleteCar());

export default router;