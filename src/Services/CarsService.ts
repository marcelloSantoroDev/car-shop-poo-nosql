import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

class CarsService {
  private async createCarDomain(car: ICar) {
    if (car) {
      const { buyValue, color, doorsQty, model, seatsQty, status, year, id } = car;
      return new Car({ buyValue, color, doorsQty, model, seatsQty, status, year, id });
    }
    return null;
  }

  public async create(car: ICar) {
    const carsModel = new CarsModel();
    const newCar = await carsModel.create(car);
    return this.createCarDomain(newCar);
  }
}

export default CarsService;