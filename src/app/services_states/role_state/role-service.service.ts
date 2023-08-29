import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { dataUser } from 'src/app/models/dataUser';
import { jsonResponse } from 'src/app/models/jsonResponse';

@Injectable({
  providedIn: 'root',
})
export class RoleServiceService {
  public role: BehaviorSubject<string> = new BehaviorSubject('visit');
  public $userData: BehaviorSubject<dataUser> = new BehaviorSubject({
    address: '',
    email: '',
    id: 0,
    lastName: '',
    name: '',
    phone: 0,
    rentDays: 0,
    rentID: 0,
  });
  private server: string = 'http://localhost:';
  private port: number = 3000;
  private token: string = '';
  public userData: dataUser = {
    address: '',
    email: '',
    id: 0,
    lastName: '',
    name: '',
    phone: 0,
    rentDays: 0,
    rentID: 0,
  };
  constructor(private http: HttpClient, private router: Router) {
    if (localStorage.getItem('token')) {
      this.verifyRole()
        .pipe(
          map((response) => {
            this.changeRole(response.role);
          })
        )
        .subscribe();
    }
  }
  verifyRole(): Observable<responseRole> {
    this.token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<responseRole>(`${this.server}${this.port}/roles`, {
      headers: headers,
    });
  }

  getRole() {
    return this.role.asObservable();
  }

  changeRole(newRole: string) {
    this.role.next(newRole);
  }
  getUserData() {
    return this.userData;
  }
  setUserData(newUser: jsonResponse) {
    this.userData = newUser.dataUser;
    localStorage.setItem('token', newUser.token);
  }
  setUserDataRole(newUser: dataUser) {
    this.userData = newUser;
    this.$userData.next(newUser);
  }
  logout() {
    this.userData = {
      address: '',
      email: '',
      id: 0,
      lastName: '',
      name: '',
      phone: 0,
      rentDays: 0,
      rentID: 0,
    };
    localStorage.removeItem('token');
    this.changeRole('visit');
  }
}

interface responseRole {
  message: string;
  role: string;
  userData: dataUser;
}
