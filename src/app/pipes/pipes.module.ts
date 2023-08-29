import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { capitalizeFirstLetter } from './upper-case.pipe';

@NgModule({
  declarations: [capitalizeFirstLetter],
  imports: [CommonModule],
  exports: [capitalizeFirstLetter],
})
export class PipesModule {}
