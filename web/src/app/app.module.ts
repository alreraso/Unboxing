import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule }from '@angular/forms'
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { WhyrecyclingComponent } from './components/whyrecycling/whyrecycling.component';
import { WhatrecyclingComponent } from './components/whatrecycling/whatrecycling.component';
import { BogotarecyclingComponent } from './components/bogotarecycling/bogotarecycling.component';
import { CartonrecyclingComponent } from './components/cartonrecycling/cartonrecycling.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ProfileComponent } from './components/profile/profile.component';

import{ RecolectorService } from './services/recolector.service'
import{ ConjuntoService } from './services/conjunto.service'
import{ AgregarrecolectorService } from './services/agregarrecolector.service';
import { ProfiledualComponent } from './components/profiledual/profiledual.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    WhyrecyclingComponent,
    WhatrecyclingComponent,
    BogotarecyclingComponent,
    CartonrecyclingComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    ProfileComponent,
    ProfiledualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    RecolectorService,
    ConjuntoService,
    AgregarrecolectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
