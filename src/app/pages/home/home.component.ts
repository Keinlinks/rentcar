import { Component } from '@angular/core';
import { CardCarComponent } from 'src/app/components/card-car/card-car.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CardCarComponent],
})
export class HomeComponent {}
