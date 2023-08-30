import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { capitalizeFirstLetter } from './upper-case.pipe';
import { PointNumberPipe } from './point-number.pipe';

@NgModule({
  declarations: [capitalizeFirstLetter, PointNumberPipe],
  imports: [CommonModule],
  exports: [capitalizeFirstLetter, PointNumberPipe],
})
export class PipesModule {}
