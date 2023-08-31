import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import {
  carModel,
  carModel_Interface,
  carResponse,
} from '../models/carResponse';

@Injectable({
  providedIn: 'root',
})
export class ProductStateService {
  server: string = 'http://localhost:';
  port: string = '3000';
  allCars: BehaviorSubject<carModel[]> = new BehaviorSubject([
    {
      id: 0,
      description: '',
      model: '',
      year: 0,
      price: 0,
      km: 0,
      color: '',
      currentClientId: 0,
    },
  ]);
  constructor(private http: HttpClient) {}

  getCars(): Observable<carResponse> {
    return this.http.get<carResponse>(`${this.server}${this.port}/getCar`).pipe(
      tap((response) => {
        this.allCars.next(response.allCar);
      }),
      catchError((error) => {
        console.error('Error en la solicitud:', error);

        return throwError('Hubo un error al obtener los autos.');
      })
    );
  }
  addCar(newCar: carModel_Interface, image: File) {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('json', JSON.stringify(newCar));

    const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data' });

    return this.http.post(`http://localhost:3000/upload`, formData);
  }

  deleteCar(id: number) {
    return this.http.post(`http://localhost:3000/deleteCar`, { id: id });
  }
}
