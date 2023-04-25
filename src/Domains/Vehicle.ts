export default abstract class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,

  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
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