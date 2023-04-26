import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  public createCarDomain(car: ICar) {
    if (car) {
      const id = car._id;
      const { buyValue, color, doorsQty, model, seatsQty, year, status } = car;
      return new Car({ buyValue, color, doorsQty, model, seatsQty, year, id, status });
    }
    return null;
  }

  protected carsModel = new CarsModel();

  public async create(car: ICar) {
    const newCar = await this.carsModel.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const result = await this.carsModel.getAll();

    if (result.length === 0) return { type: 'NOT_FOUND', message: 'Car not found' };

    const cars = result.map((car) => this.createCarDomain(car));

    return { type: null, message: cars };
  }

  public async getById(id: string) {
    const result = await this.carsModel.getById(id);
    if (result) {
      const car = this.createCarDomain(result);
      return { type: null, message: car };
    }
    return { type: 'NOT_FOUND', message: 'Car not found' };
  }
}

export default CarsService;