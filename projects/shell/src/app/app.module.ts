import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {ProviderModule} from "./provider/provider.module";

const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'provider'
  },
  {
    path: 'lazy',
    loadChildren: () => import('mfe1/ConfigModule').then(m => m.ConfigModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    ProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
