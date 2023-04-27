import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsModel from '../Models/CarsModel';

const carNotFound = 'Car not found';

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

    const cars = result.map((car) => this.createCarDomain(car));

    return { type: null, message: cars };
  }

  public async getById(id: string) {
    const result = await this.carsModel.getById(id);
    if (result) {
      const car = this.createCarDomain(result);
      return { type: null, message: car };
    }
    return { type: 'NOT_FOUND', message: carNotFound };
  }

  public async update(id: string | undefined, car: ICar) {
    const result = await this.carsModel.update(id, car);
    if (!result) return { type: 'NOT_FOUND', message: carNotFound };
    return { type: null, message: car };
  }

  public async deleteCar(id: string) {
    const result = await this.carsModel.deleteCar(id);
    console.log(result + '<<<<<<<<<<<< RETORNO FIND BY ID AND UPDATE')
    if (!result) return { type: 'NOT_FOUND', message: carNotFound };
    return { type: null, message: '' };
  } 
}

export default CarsService;