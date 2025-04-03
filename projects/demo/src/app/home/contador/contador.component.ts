import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "cas-counter",
  imports: [CommonModule],
  template: `
    <h3>Counter</h3>
    <div>
      <button (click)="changeCount(+1)" [disabled]="counter >= 5">➕</button>
      <output [ngClass]="{ negative: counter < 0 }">{{ counter }}</output>
      <button (click)="changeCount(-1)" [disabled]="counter <= -5">➖</button>
    </div>
    <p *ngIf="counter === 5" class="max-message">Maximum value reached!</p>
    <p *ngIf="counter === -5" class="min-message">Minimum value reached!</p>
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
export class CounterComponent {
  counter = 0;

  changeCount(amount: number) {
    const newCount = this.counter + amount;
    if (newCount <= 5 && newCount >= -5) {
      this.counter = newCount;
    }
  }
}
