interface IVehicle {
  id?: string,
  _id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  doorsQty: number,
  seatsQty: number
}

export default IVehicle;