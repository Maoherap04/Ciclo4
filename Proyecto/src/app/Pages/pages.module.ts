import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ],
    exports: [
      NavbarComponent
    ]
})
export class PagesModule { }
