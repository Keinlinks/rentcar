import { Component } from '@angular/core';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss'],
})
export class PageProductComponent {
  allCars!: carModel[];
  constructor(private productService: ProductStateService) {
    productService.allCars.asObservable().subscribe((data) => {
      this.allCars = data.slice(0, 20);
    });
  }
}
