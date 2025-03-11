import { Component } from '@angular/core';

@Component({
  selector: 'cas-menu',
  imports: [],
  template: `<nav>
    <ul>
      @for (item of items; track $index) {
      <li>
        <a [href]="item.path"> {{ item.label }} </a>
      </li>
      }
    </ul>

    <!-- <li><a routerLink="/about"> About</a></li>
    <li><a routerLink="/contact"> Contact</a></li> -->
  </nav>`,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class MenuComponent {
  items = [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: '/',
      label: 'About',
    },
    {
      path: '/',
      label: 'Contact',
    },
  ];
}
