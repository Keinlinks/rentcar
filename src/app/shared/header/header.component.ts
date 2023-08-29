import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userRole: string = 'visit';
  userName: string = '';
  constructor(private roleService: RoleServiceService, private router: Router) {
    roleService.getRole().subscribe((role) => {
      if (role === 'admin') {
        this.userRole = 'admin';
        this.userName = roleService.getUserData().name;
        return;
      }
      if (role === 'user') {
        this.userRole = 'user';
        this.userName = roleService.getUserData().name;
        return;
      }
      if (role === 'visit') {
        this.userRole = 'visit';
        return;
      }
    });
    roleService.$userData.asObservable().subscribe((data) => {
      this.userName = data.name;
    });
  }
  logout() {
    this.roleService.logout();
    this.router.navigateByUrl('/login');
  }
}
