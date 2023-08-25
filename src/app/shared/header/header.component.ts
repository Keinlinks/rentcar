import { Component } from '@angular/core';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  userRole: string = 'visit';
  constructor(private roleService: RoleServiceService) {
    roleService.getRole().subscribe((role) => {
      if (role === 'admin') {
        this.userRole = 'admin';
        return;
      }
      if (role === 'user') {
        this.userRole = 'user';
        return;
      }
      if (role === 'visit') {
        this.userRole = 'visit';
        return;
      }
    });
  }
}
