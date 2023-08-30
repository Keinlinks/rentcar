import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-page-rent-visit',
  templateUrl: './page-rent-visit.component.html',
  styleUrls: ['./page-rent-visit.component.scss'],
})
export class PageRentVisitComponent {
  isUser: boolean = true;
  car: carModel = {
    id: 0,
    model: '',
    year: 0,
    price: 0,
    km: 0,
    color: '',
    currentClientId: 0,
  };
  param_id!: string;
  constructor(
    private roleService: RoleServiceService,
    private productService: ProductStateService,

    private route: ActivatedRoute
  ) {
    roleService.getRole().subscribe((role) => {
      if (role === 'user') {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
    this.param_id = this.route.snapshot.paramMap.get('id') ?? '0';
  }

  ngOnInit() {
    this.productService.getCars().subscribe((cars) => {
      this.car = cars.allCar.filter((car) => {
        return car.id == +this.param_id;
      })[0];
    });
  }
}
