import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'nav',component:NavbarComponent},
  {path:'contact',component:ContactComponent},
  {path:'loader',component:LoaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
