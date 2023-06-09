import {
  Schema,
} from 'mongoose';
import AbstractODM from './AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesModel extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true }, 
      color: { type: String, required: true }, 
      status: { type: Boolean, default: false }, 
      buyValue: { type: Number, required: true }, 
      category: { type: String, required: true }, 
      engineCapacity: { type: Number, required: true }, 
    });
    super('Motorcycle', schema);
  }
}

export default MotorcyclesModel;
