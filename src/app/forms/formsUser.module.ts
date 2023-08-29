import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChangePasswordComponent, ProfileInformationComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [ChangePasswordComponent, ProfileInformationComponent],
})
export class FormsUserModule {}
