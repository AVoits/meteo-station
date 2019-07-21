import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';
import {SlideshowModule} from 'ng-simple-slideshow';
import {PersonModule} from './static-pages/components/personal/person.module';
import {LightboxModule} from 'ngx-lightbox';
import {CoreModule} from './core/core.module';
import {DataPagesModule} from './data-pages/data-pages.module';
import {StaticPagesModule} from './static-pages/static-pages.module';

const modules = [
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
  CoreModule,
  DataPagesModule,
  StaticPagesModule
];


@NgModule({
  imports: [
    ...modules,
    AppRoutingModule, // Always must be last!!!
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
