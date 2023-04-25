interface IVehicle {
  id?: number,
  model: string,
  year: number,
  color: string,
  status: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number
}

export default IVehicle;