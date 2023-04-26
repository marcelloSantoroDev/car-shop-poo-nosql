import { Request, Response } from 'express';
import CarsService from '../Services/CarsService';
import ICar from '../Interfaces/ICar';

class CarsController {
  private service: CarsService;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.service = new CarsService();
    this.req = req;
    this.res = res;
  }

  public async create() {
    const { model, year, color, buyValue, doorsQty, seatsQty, status } = this.req.body;
    const car: ICar = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      return this.res.status(500).json({ message: error });
    }
  }

  public async getAll() {
    try {
      const { message } = await this.service.getAll();
      return this.res.status(200).json(message);
    } catch (error) {
      return this.res.status(500).json({ message: error });
    }
  }
  
  public async getById() {
    const { id } = this.req.params;
    try {
      const { type, message } = await this.service.getById(id);

      if (type) {
        return this.res.status(404).json({ message });
      }
      
      return this.res.status(200).json(message);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }
}

export default CarsController;