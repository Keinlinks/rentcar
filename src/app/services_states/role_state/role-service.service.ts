import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleServiceService {
  private role: BehaviorSubject<string> = new BehaviorSubject('admin');
  constructor() {}

  getRole() {
    return this.role.asObservable();
  }
}
