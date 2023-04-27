import express from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const router = express.Router();

router.post('/', (req, res) => new MotorcyclesController(req, res).create());
router.get('/', (req, res) => new MotorcyclesController(req, res).getAll());
router.get('/:id', (req, res) => new MotorcyclesController(req, res).getById());
router.put('/:id', (req, res) => new MotorcyclesController(req, res).update());
router.delete('/:id', (req, res) => new MotorcyclesController(req, res).deleteMotorcycle());

export default router;