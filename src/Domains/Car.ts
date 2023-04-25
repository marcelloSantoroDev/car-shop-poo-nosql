class Car {
  private doorsQty: number;
  private seatsQty: number;

  constructor(
    model: string,
    year: number,
    color: string,
    status: boolean,
    buyValue: number,
    doorsQty: number,
    seatsQty: number,
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}

export default Car;