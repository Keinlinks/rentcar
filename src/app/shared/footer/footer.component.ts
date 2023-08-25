import { Component } from '@angular/core';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isAdmin: boolean = false;
  constructor(private roleService: RoleServiceService) {
    roleService.getRole().subscribe((role) => {
      if (role === 'admin') this.isAdmin = true;
      else {
        this.isAdmin = false;
      }
    });
  }
}
