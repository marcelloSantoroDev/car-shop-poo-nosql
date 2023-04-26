import express from 'express';
import CarsController from '../Controllers/CarsController';
import idValidation from '../middlewares/idValitation';

const router = express.Router();

router.post('/', (req, res) => new CarsController(req, res).create());
router.get('/', (req, res) => new CarsController(req, res).getAll());
router.get('/:id', idValidation, (req, res) => new CarsController(req, res).getById());

export default router;