import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MaterialDesign } from '../material/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const router: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'admin/dashboard'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    ProductComponent, 
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialDesign,
    FormsModule,
    RouterModule.forChild(router)
  ]
})
export class ComponentModule { }
