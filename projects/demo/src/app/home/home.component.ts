import { Component, inject } from '@angular/core';
import { RegisterComponent } from '../user/components/register/register.component';
import { LoginComponent } from '../user/components/login/login.component';
import { TimeService } from '../core/services/time.service';

@Component({
  selector: 'cas-home',
  providers: [TimeService],
  imports: [RegisterComponent, LoginComponent],
  template: `
    <h1>Home</h1>
    <p>Esta es la página de inicio</p>
    <cas-register />
    <cas-login />
    {{ timeService.getTime() }}
  `,
  styles: ``,
})
export default class HomeComponent {
  timeService = inject(TimeService);
}
