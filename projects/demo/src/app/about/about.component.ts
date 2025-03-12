import { Component } from '@angular/core';
import { CounterComponent } from '../home/contador/contador.component';
import { GreetingComponent } from './greeting/greeting.component';

@Component({
  selector: 'cas-about',
  imports: [CounterComponent, GreetingComponent],
  template: ` <h2>About</h2>
    <p>Esta aplicación es una demo del uso de Angular</p>
    <p>A continuación un ejemplo de componente contador</p>
    <cas-counter />
    <p>A continuación un ejemplo de componente que saluda a un usuario</p>
    <cas-greetings />`,
  styles: ``,
})
export default class AboutComponent {}
