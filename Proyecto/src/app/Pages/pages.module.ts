import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AgregarComponent } from './admin/agregar/agregar.component';
import { SuprComponent } from './admin/supr/supr.component';
import { ModificarComponent } from './admin/modificar/modificar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    AgregarComponent,
    SuprComponent,
    ModificarComponent,
    
  ],
  imports: [
    CommonModule,
    ],
    exports: [
      NavbarComponent
    ]
})
export class PagesModule { }
