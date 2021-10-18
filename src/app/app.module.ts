import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeniuComponent } from './meniu/meniu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduseCautareComponent } from './produse-cautare/produse-cautare.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    MeniuComponent,
    ProduseCautareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule
    
  ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
