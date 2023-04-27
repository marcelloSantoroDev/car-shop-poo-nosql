import { Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

const invalidMongoId = 'Invalid mongo id';

class MotorcyclesController {
  private service: MotorcyclesService;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.service = new MotorcyclesService();
    this.req = req;
    this.res = res;
  }

  public async create() {
    const { model, year, color, buyValue, category, engineCapacity, status } = this.req.body;
    const car: IMotorcycle = {
      model,
      year,
      color,
      status,
      buyValue,
      category,
      engineCapacity,
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
      return this.res.status(422).json({ message: invalidMongoId });
    }
  }

  public async update() {
    const { id } = this.req.params;
    const { model, year, color, status, buyValue, category, engineCapacity } = this.req.body;
    const motorcycle
    : IMotorcycle = { model, year, color, status, buyValue, category, engineCapacity };

    try {
      const { type, message } = await this.service.update(id, motorcycle);

      if (type) {
        return this.res.status(404).json({ message });
      }

      motorcycle.id = id;

      return this.res.status(200).json(motorcycle);
    } catch (error) {
      return this.res.status(422).json({ message: invalidMongoId });
    }
  }

  public async deleteMotorcycle() {
    const { id } = this.req.params;

    try {
      const { type, message } = await this.service.deleteMotorcycle(id);

      if (type) {
        return this.res.status(404).json({ message });
      }

      return this.res.status(202).json({ message: 'Motorcycle deleted' });
    } catch (error) {
      return this.res.status(422).json({ message: invalidMongoId });
    }
  }
}

export default MotorcyclesController;