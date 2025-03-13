import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cas-greetings',
  imports: [FormsModule],
  template: `
    <div>
      <input [(ngModel)]="name" placeholder="Enter your name" />
      <button (click)="clearName()">Borrar</button>
      <p>Hola {{ name ? name : 'amigo' }}!</p>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
  `,
})
export class GreetingComponent {
  @Input() name = '';

  clearName() {
    this.name = '';
  }
}
