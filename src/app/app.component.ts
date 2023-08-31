import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { catchError, filter } from 'rxjs';
import { RoleServiceService } from './services_states/role_state/role-service.service';
import { ProductStateService } from './productService/product-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private roleService: RoleServiceService,
    private productService: ProductStateService
  ) {}
  title = 'rentcar';
  ngOnInit() {
    this.roleService.verifyRole().subscribe((data) => {
      this.roleService.setUserDataRole(data.userData);
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.roleService.verifyRole().subscribe((data) => {
          this.roleService.setUserDataRole(data.userData);
          this.productService
            .getCars()
            .pipe(
              catchError((error) => {
                return [];
              })
            )
            .subscribe((data) => {});
        });
      });
    this.productService.getCars().subscribe((data) => {});
  }
}
