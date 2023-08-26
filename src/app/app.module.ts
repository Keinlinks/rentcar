import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { ChangePasswordComponent } from './forms/change-password/change-password.component';
import { ProfileInformationComponent } from './forms/profile-information/profile-information.component';
import { PageRentVisitComponent } from './pages/page-rent-visit/page-rent-visit.component';
import { PageProductComponent } from './pages/page-product/page-product.component';
import { CardCarComponent } from './components/card-car/card-car.component';
import { IdProductComponent } from './pages/id-product/id-product.component';
import { ControlPanelComponent } from './adminPages/control-panel/control-panel.component';
import { ProducrtcardAdminComponent } from './componentsAdmin/producrtcard-admin/producrtcard-admin.component';
import { AddProductAdminComponent } from './adminPages/add-product-admin/add-product-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PageProfileComponent,
    ChangePasswordComponent,
    ProfileInformationComponent,
    PageRentVisitComponent,
    PageProductComponent,
    IdProductComponent,
    ControlPanelComponent,
    ProducrtcardAdminComponent,
    AddProductAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeComponent,
    CardCarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
