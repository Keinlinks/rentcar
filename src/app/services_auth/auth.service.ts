import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private server: string = 'http://localhost:';
  private port: number = 3000;
  constructor(private http: HttpClient) {}

  userLogin(email: string, password: string) {
    let dataUser = {
      email: email,
      password: password,
    };
    return this.http.post(`${this.server}${this.port}/login`, dataUser);
  }
  userRegister(
    name: string,
    lastName: string,
    email: string,
    address: string,
    password: string,
    phone: number
  ) {
    let newUser = {
      name: name,
      lastName: lastName,
      address: address,
      phone: phone,
      email: email,
      password: password,
    };
    return this.http.post(`${this.server}${this.port}/register`, newUser);
  }
}
