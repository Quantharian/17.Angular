import { Component } from '@angular/core';
import { CounterComponent } from './contador/contador.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CounterSignalComponent } from './contador.signal/contador.signal.component';

@Component({
  selector: 'cas-about',
  imports: [CounterComponent, GreetingComponent, CounterSignalComponent],
  template: ` <h2>About</h2>
    <p>Esta aplicación es una demo del uso de Angular</p>
    <p>A continuación un ejemplo de componente contador</p>
    <cas-counter (countEvent)="setCounter()"></cas-counter>
    <p>A continuación un ejemplo de componente que saluda a un usuario</p>
    <cas-greetings />
    <p>A continuación un ejemplo de componente con Signals</p>
    <cas-counter-signal (countEvent)="setCounter()"></cas-counter-signal>`,
  styles: ``,
})
export default class AboutComponent {
  clicks = 0;
  setCounter() {
    this.clicks++;
  }
}
