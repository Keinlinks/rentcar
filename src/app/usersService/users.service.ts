import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { AllUsers } from '../models/allusersResponse';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { dataUser } from '../models/dataUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  allUsers: BehaviorSubject<dataUser[]> = new BehaviorSubject([
    {
      name: '',
      lastName: '',
      phone: 0,
      email: '',
      rentDays: 0,
      rentID: 0,
      address: '',
      id: 0,
    },
  ]);

  getUsers(): Observable<AllUsers> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get<AllUsers>(`http://localhost:3000/getAllUsers`, { headers: headers })
      .pipe(
        tap((response) => {
          this.allUsers.next(response.users);
        }),
        catchError((error) => {
          console.error('Error en la solicitud:', error);

          return throwError('Hubo un error al obtener los usuarios.');
        })
      );
  }
}
