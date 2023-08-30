import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductAdminComponent } from './add-product-admin/add-product-admin.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProducrtcardAdminComponent } from '../componentsAdmin/producrtcard-admin/producrtcard-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'add-product', component: AddProductAdminComponent },
      { path: '', component: ControlPanelComponent },
    ],
  },
];
@NgModule({
  declarations: [
    AddProductAdminComponent,
    ControlPanelComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ProducrtcardAdminComponent,
    ReactiveFormsModule,
  ],
})
export class AdminModuleModule {}
