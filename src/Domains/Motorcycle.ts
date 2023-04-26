import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(
    motorcycle: IMotorcycle,
  ) {
    super(motorcycle);
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }

  getCategory(): string {
    return this.category;
  }

  getEngineCpcty(): number {
    return this.engineCapacity;
  }
}

export default Motorcycle;
