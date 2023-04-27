import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesModel from '../Models/MotorcyclesModel';

const motorcycleNotFound = 'Motorcycle not found';

class MotorcyclesService {
  public createMotorcycleDomain(motorcycle: IMotorcycle) {
    if (motorcycle) {
      const id = motorcycle._id;
      const { buyValue, color, category, model, engineCapacity, year, status } = motorcycle;
      return new Motorcycle({ buyValue, color, category, model, engineCapacity, year, id, status });
    }
    return null;
  }

  protected MotorcyclesModel = new MotorcyclesModel();

  public async create(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.MotorcyclesModel.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const result = await this.MotorcyclesModel.getAll();

    const motorcycles = result.map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return { type: null, message: motorcycles };
  }

  public async getById(id: string) {
    const result = await this.MotorcyclesModel.getById(id);
    if (result) {
      const motorcycle = this.createMotorcycleDomain(result);
      return { type: null, message: motorcycle };
    }
    return { type: 'NOT_FOUND', message: motorcycleNotFound };
  }

  public async update(id: string | undefined, motorcycle: IMotorcycle) {
    const result = await this.MotorcyclesModel.update(id, motorcycle);
    if (!result) return { type: 'NOT_FOUND', message: motorcycleNotFound };
    return { type: null, message: motorcycle };
  }

  public async deleteMotorcycle(id: string) {
    const result = await this.MotorcyclesModel.deleteVehicle(id);
    if (!result) return { type: 'NOT_FOUND', message: motorcycleNotFound };
    return { type: null, message: '' };
  }
}

export default MotorcyclesService;