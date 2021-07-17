import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
