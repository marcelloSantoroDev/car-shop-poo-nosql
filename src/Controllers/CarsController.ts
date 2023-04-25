import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

class CarsController {
  private service: CarsService;

  constructor() {
    this.service = new CarsService();
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const car: ICar = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status,
      buyValue: req.body.buyValue,
      doorsQty: req.body.doorsQty,
      seatsQty: req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  }
}

export default CarsController;