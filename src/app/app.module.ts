import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HistoryComponent } from './components/static-pages/history/history.component';
import { StaticPagesModule } from './components/static-pages/static-pages.module';
import { MissionComponent } from './components/static-pages/mission/mission.component';
import { ReservoirComponent } from './components/static-pages/reservoir/reservoir.component';
import {LightboxModule} from 'ngx-lightbox';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LightboxModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    SlideshowModule,
    PersonModule,
    StaticPagesModule,
    AppRoutingModule, // Always must be last!!!
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
    NotFoundComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
