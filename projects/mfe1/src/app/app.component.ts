import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Welcome to MFE1</h3>
    <br/>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
