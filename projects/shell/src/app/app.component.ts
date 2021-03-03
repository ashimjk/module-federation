import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Welcome to Shell</h3>
    <button routerLink="/lazy/config">Go to Config</button>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
