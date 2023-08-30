import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { carModel } from 'src/app/models/carResponse';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class CardCarComponent implements OnInit {
  @Input() car!: carModel;
  constructor(private router: Router) {}
  ngOnInit() {}

  route() {
    this.router.navigate([`products/${this.car.id}`]);
  }
}
