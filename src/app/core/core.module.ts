import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {MatButtonModule, MatMenuModule} from '@angular/material';
import {RouterModule} from '@angular/router';

const components = [
  FooterComponent,
  HeaderComponent,
  MenuComponent,
  NotFoundComponent
];

@NgModule({
  declarations: [...components],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ]
})
export class CoreModule { }
