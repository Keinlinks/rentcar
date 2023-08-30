import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { carModel } from 'src/app/models/carResponse';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}
}
