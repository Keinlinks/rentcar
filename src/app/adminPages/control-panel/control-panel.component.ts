import { Component } from '@angular/core';
import { carModel } from 'src/app/models/carResponse';
import { dataUser } from 'src/app/models/dataUser';
import { ProductStateService } from 'src/app/productService/product-state.service';
import { UsersService } from 'src/app/usersService/users.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  allCars!: carModel[];
  allUsers!: dataUser[];
  selected: boolean = true;

  constructor(
    private stateProduct: ProductStateService,
    private userService: UsersService
  ) {
    stateProduct.getCars().subscribe((data) => {
      this.allCars = data.allCar;
    });

    userService.getUsers().subscribe((data) => {
      this.allUsers = data.users;
    });
  }
}
