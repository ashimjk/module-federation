import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProviderComponent} from "./provider.component";
import {CommonModule} from "@angular/common";

const PROVIDER_ROUTES: Routes = [
  {
    path: 'provider',
    component: ProviderComponent
  }
];

@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PROVIDER_ROUTES)
  ],
  exports: [ProviderComponent]
})
export class ProviderModule {
}
