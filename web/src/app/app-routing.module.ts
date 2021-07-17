import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BogotarecyclingComponent } from './components/bogotarecycling/bogotarecycling.component';
import { CartonrecyclingComponent } from './components/cartonrecycling/cartonrecycling.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { WhatrecyclingComponent } from './components/whatrecycling/whatrecycling.component';
import { WhyrecyclingComponent } from './components/whyrecycling/whyrecycling.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'whyrecycling',
    component:WhyrecyclingComponent
  },
  {
    path:'whatrecycling',
    component:WhatrecyclingComponent
  },
  {
    path:'bogotarecycling',
    component:BogotarecyclingComponent
  },
  {
    path:'cartonrecycling',
    component:CartonrecyclingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
