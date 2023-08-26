import { Component } from '@angular/core';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-page-rent-visit',
  templateUrl: './page-rent-visit.component.html',
  styleUrls: ['./page-rent-visit.component.scss'],
})
export class PageRentVisitComponent {
  isUser: boolean = true;
  constructor(private roleService: RoleServiceService) {
    roleService.getRole().subscribe((role) => {
      if (role === 'user') {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
  }
}
