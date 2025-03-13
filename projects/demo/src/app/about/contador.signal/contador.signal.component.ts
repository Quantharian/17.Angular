import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cas-counter-signal',
  imports: [CommonModule],
  template: `
    <h3>Counter Signal</h3>
    <div>
      <button (click)="changeCount(+1)" [disabled]="counter() >= 5">➕</button>
      <output [ngClass]="{ negative: counter() < 0 }">{{ counter() }}</output>
      <button (click)="changeCount(-1)" [disabled]="counter() <= -5">➖</button>
    </div>
    <p *ngIf="counter() === 5" class="max-message">Maximum value reached!</p>
    <p *ngIf="counter() === -5" class="min-message">Minimum value reached!</p>
  `,
  styles: `
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
    }
    div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
    output {
      margin: 0;
      font-size: 1.5rem;
      width: 50px;
    }
    .negative {
      color: red;
    }
    .max-message {
      color: green;
      font-weight: bold;
    }
    .min-message {
      color: blue;
      font-weight: bold;
    }
  `,
})
export class CounterSignalComponent {
  counter = signal(0);

  changeCount(value: number) {
    // this.counter.set(this.counter() + value);
    this.counter.update((prev) => prev + value);
  }
}
