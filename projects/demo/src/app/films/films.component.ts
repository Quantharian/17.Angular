import { Component, inject } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { TimeService } from '../core/services/time.service';

@Component({
  selector: 'cas-films',
  providers: [TimeService],
  imports: [ListComponent],
  template: `
    <h2>Films</h2>
    <cas-list></cas-list>
    {{ timeService.getTime() }}
    {{ time }}
  `,
  styles: ``,
})
export default class FilmsComponent {
  timeService = inject(TimeService);
  time = new Date().toLocaleTimeString();
}
