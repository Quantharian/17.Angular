import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'cas-header',
  imports: [LogoComponent],
  template: `
    <cas-logo />
    <header>
      <!-- <img src="../assets/logo.svg" alt="logo" /> -->
      <h1>Welcome {{ title }}!</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    :host {
      display: block;
      text-align: center;
    }
  `,
})
export class HeaderComponent {
  title = 'demo';
  constructor() {
    console.log(this.title);
  }
}
