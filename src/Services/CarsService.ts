import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  public createCarDomain(car: ICar) {
    if (car) {
      const { buyValue, color, doorsQty, model, seatsQty, year, id, status } = car;
      return new Car({ buyValue, color, doorsQty, model, seatsQty, year, id, status });
    }
    return null;
  }

  protected carsModel = new CarsModel();

  public async create(car: ICar) {
    const newCar = await this.carsModel.create(car);
    return this.createCarDomain(newCar);
  }
}

export default CarsService;