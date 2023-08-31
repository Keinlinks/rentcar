import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { carModel } from 'src/app/models/carResponse';
import { ProductStateService } from 'src/app/productService/product-state.service';

@Component({
  selector: 'app-producrtcard-admin',
  templateUrl: './producrtcard-admin.component.html',
  styleUrls: ['./producrtcard-admin.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProducrtcardAdminComponent implements OnInit {
  @Input() car!: carModel;
  state: string = 'disponible';
  stateBoolean: boolean = false;
  route: string = '';
  imgSource: string = '';
  showPopup: boolean = false;
  constructor(private productService: ProductStateService) {}
  ngOnInit() {
    if (
      this.car.currentClientId != null &&
      this.car.currentClientId != 0 &&
      this.car.currentClientId != undefined
    ) {
      this.state = 'arrendado';
      this.stateBoolean = true;
    }
    this.route = `/products/${this.car.id}`;
    this.imgSource = `../../../assets/imagenes/imagenId_${this.car.id}.png`;
  }
  deleteCar() {
    this.productService.deleteCar(this.car.id).subscribe((data) => {
      this.showPopup = false;
      alert('El vehiculo fue eliminado de la base de datos!');
    });
  }
}
