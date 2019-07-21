import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './static-pages/components/home/home.component';
import {AboutComponent} from './static-pages/components/about/about.component';
import {DataMeteoComponent} from './data-pages/components/data-meteo/data-meteo.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {StaticPagesRoutingModule} from "./static-pages/static-routing.module";

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'data-meteo',
    component: DataMeteoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    StaticPagesRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
