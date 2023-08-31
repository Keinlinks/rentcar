import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardCarComponent } from 'src/app/components/card-car/card-car.component';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CardCarComponent, CommonModule, RouterModule],
})
export class HomeComponent {
  allCars!: carModel[];
  constructor(private productService: ProductStateService) {
    productService.allCars.asObservable().subscribe((data) => {
      this.allCars = data.slice(0, 12);
    });
  }
}
