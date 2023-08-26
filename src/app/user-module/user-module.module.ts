import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import { SharedModule } from '../shared/shared.module';
import { PageProductComponent } from '../pages/page-product/page-product.component';
import { PageProfileComponent } from '../pages/page-profile/page-profile.component';
const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: PageProductComponent },
      { path: 'profile', component: PageProfileComponent },
    ],
  },
];

@NgModule({
  declarations: [UserPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HomeComponent,
  ],
})
export class UserModuleModule {}
