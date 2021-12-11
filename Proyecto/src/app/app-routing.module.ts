import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { AgregarComponent } from './Pages/admin/agregar/agregar.component';
import { UserComponent } from './Pages/user/user.component';
import { SuprComponent } from './Pages/admin/supr/supr.component';
import { ModificarComponent } from './Pages/admin/modificar/modificar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'agregar', component: AgregarComponent},
  { path: 'supr', component: SuprComponent},
  { path: 'modificar', component: ModificarComponent},
  { path: 'user', component: UserComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
