export interface jsonResponse {
  message: string;
  dataUser: {
    name: string;
    lastName: string;
    address: string;
    phone: number;
    email: string;
    id: number;
    rentID: number;
    rentDays: number;
  };
  token: string;
}
