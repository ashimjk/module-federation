import {NgModule} from "@angular/core";
import {ConfigComponent} from "./config.component";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const CONFIG_ROUTES: Routes = [
  {
    path: 'config',
    component: ConfigComponent
  }
];

@NgModule({
  declarations: [ConfigComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CONFIG_ROUTES)
  ],
  exports: [ConfigComponent]
})
export class ConfigModule {
}
