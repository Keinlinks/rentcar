import { CanActivate, Router } from '@angular/router';
import { RoleServiceService } from '../services_states/role_state/role-service.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class roleGuard implements CanActivate {
  constructor(
    private router: Router,
    private roleService: RoleServiceService
  ) {}
  canPass: boolean = true;
  canActivate(): boolean {
    const role: string = this.roleService.role.getValue();
    if (role === 'admin' || role === 'user') {
      this.canPass = false;
    } else {
      this.canPass = true;
    }
    if (!this.canPass) {
      this.router.navigate(['/']);
    }
    return this.canPass;
  }
}
