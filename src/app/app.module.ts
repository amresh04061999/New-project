import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule}from '@angular/common/http'
import { HttpService } from './service/http.service';
import { ArtistComponent } from './artist/artist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudioComponent } from './studio/studio.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    PageNotFoundComponent,
    StudioComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
