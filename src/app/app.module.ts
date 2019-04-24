import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import {DataMeteoComponent} from './components/data-meteo/data-meteo.component';
import {HomeComponent} from './components/home/home.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {PersonModule} from './components/personal/person.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    SlideshowModule,
    PersonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MessagesComponent,
    MenuComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    DataMeteoComponent,
    HomeComponent,
    NotFoundComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
