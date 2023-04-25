import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(
    vehicle: IVehicle,
  ) {
    this.model = vehicle.model;
    this.year = vehicle.year;
    this.color = vehicle.color;
    this.status = vehicle.status;
    this.buyValue = vehicle.buyValue;
  }
  getModel(): string {
    return this.model;
  }
  getYear(): number {
    return this.year;
  }
  getColor(): string {
    return this.color;
  }
  getStatus(): boolean {
    return this.status;
  }
  getBuyValue(): number {
    return this.buyValue;
  }
}