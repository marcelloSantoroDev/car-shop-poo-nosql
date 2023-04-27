import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import IVehicle from '../Interfaces/IVehicle';

class AbstractODM<T> {
  protected model: Model<T>;

  constructor(name: string, schema: Schema) {
    this.model = models[name] || model(name, schema);
  }

  public async create(vehicle: IVehicle) {
    return this.model.create({ ...vehicle });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(id: string) {
    return this.model.findById(id);
  }

  public async update(id: string | undefined, vehicle: IVehicle) {
    return this.model.findByIdAndUpdate(id, vehicle);
  }

  public async deleteVehicle(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;
