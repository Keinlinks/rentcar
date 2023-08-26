import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { roleGuard } from './guards/role-guard.guard';
import { adminGuard } from './guards/admin-guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./user-module/user-module.module').then(
        (m) => m.UserModuleModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./adminPages/admin-module.module').then(
        (m) => m.AdminModuleModule
      ),
    canActivate: [adminGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [roleGuard],
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [roleGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
