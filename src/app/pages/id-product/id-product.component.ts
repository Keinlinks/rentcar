import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-id-product',
  templateUrl: './id-product.component.html',
  styleUrls: ['./id-product.component.scss'],
})
export class IdProductComponent implements OnInit {
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
    private productService: ProductStateService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.param_id = this.route.snapshot.paramMap.get('id') ?? '0';
  }
  ngOnInit() {
    this.productService.getCars().subscribe((cars) => {
      this.car = cars.allCar.filter((car) => {
        return car.id == +this.param_id;
      })[0];
    });
  }
  changeRoute() {
    this.router.navigate([`rent/${this.param_id}`]);
  }
}
