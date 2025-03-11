import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'cas-header',
  imports: [],
  template: ` <header>
    <h1>Welcome to {{ title }}!</h1>
    <ng-content></ng-content>
  </header>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class HeaderComponent {
  title = 'hell';
  constructor() {
    console.log(this.title);
  }
}
