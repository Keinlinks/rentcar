import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { carModel } from 'src/app/models/carResponse';
import { PipesModule } from 'src/app/pipes/pipes.module';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
  standalone: true,
  imports: [RouterModule, PipesModule],
})
export class CardCarComponent implements OnInit {
  @Input() car!: carModel;
  imgSource: string = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.imgSource = `../../../assets/imagenes/imagenId_${this.car.id}.png`;
  }

  route() {
    this.router.navigate([`products/${this.car.id}`]);
  }
}
