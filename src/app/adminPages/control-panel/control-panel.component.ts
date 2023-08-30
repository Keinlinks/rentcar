import { Component } from '@angular/core';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
})
export class ControlPanelComponent {
  allCars!: carModel[];

  constructor(private stateProduct: ProductStateService) {
    stateProduct.getCars().subscribe((data) => {
      this.allCars = data.allCar;
    });
  }
}
