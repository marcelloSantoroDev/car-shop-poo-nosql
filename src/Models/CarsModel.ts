import {
  Model,
  Schema,
  model,
  models,
} from 'mongoose';
import ICar from '../Interfaces/ICar';
import IVehicle from '../Interfaces/IVehicle';

class CarsModel {
  protected schema: Schema;
  protected model: Model<IVehicle>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String },
      year: { type: Number }, 
      color: { type: String }, 
      status: { type: Boolean }, 
      buyValue: { type: Number }, 
      doorsQty: { type: Number }, 
      seatsQty: { type: Number }, 
    });
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async create(car: ICar) {
    return this.model.create({ ...car });
  }
}

export default CarsModel;