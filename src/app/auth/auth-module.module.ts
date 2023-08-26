import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, PageAuthComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthModuleModule {}
