import express from 'express';
import CarsController from '../Controllers/CarsController';
import idValidation from '../middlewares/idValitation';

const router = express.Router();

router.post('/', (req, res) => new CarsController(req, res).create());
router.get('/', (req, res) => new CarsController(req, res).getAll());
router.use(idValidation);
router.get('/:id', (req, res) => new CarsController(req, res).getById());

export default router;