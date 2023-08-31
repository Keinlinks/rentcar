export interface carResponse {
  message: string;
  allCar: carModel[];
}

export interface carModel {
  id: number;
  description: string;
  model: string;
  year: number;
  price: number;
  km: number;
  color: string;
  currentClientId: number;
}
export interface carModel_Interface {
  id?: number;
  description: string;
  model: string;
  year: number;
  price: number;
  km: number;
  color: string;
  currentClientId: number;
}
