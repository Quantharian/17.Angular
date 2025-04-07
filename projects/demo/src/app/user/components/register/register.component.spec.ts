import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

const mockUserService: UserService = jasmine.createSpyObj('UserService', {
  register: of({}),
});

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the form', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
    const labels = form.querySelectorAll('label span');
    expect(labels.length).toEqual(5);
    expect(labels[0].textContent).toEqual('Nombre');
    expect(labels[1].textContent).toEqual('Apellido');
    expect(labels[2].textContent).toEqual('Email');
    expect(labels[3].textContent).toEqual('Contraseña');
    expect(labels[4].textContent).toEqual('Avatar');
  });

  it('should be completed by user', () => {
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
    const nameInput = form.elements.nameItem('firstName') as HTMLInputElement;
    nameInput.value = 'Juan';
    nameInput.dispatchEvent(new Event('input'));
    const lastNameInput = form.elements.nameItem(
      'lastName',
    ) as HTMLInputElement;
    lastNameInput.value = 'Pérez';
    lastNameInput.dispatchEvent(new Event('input'));
    const emailInput = form.elements.nameItem('email') as HTMLInputElement;
    emailInput.value = 'juanperez@acme.es';
    emailInput.dispatchEvent(new Event('input'));
    const passwordInput = form.elements.nameItem(
      'password',
    ) as HTMLInputElement;
    passwordInput.value = '12345';
    passwordInput.dispatchEvent(new Event('input'));
    const avatarInput = form.elements.nameItem('avatar') as HTMLInputElement;
    const file = new File([''], 'avatar.png', { type: 'image/png' });
    avatarInput.files = Object.create(file);
    avatarInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.formGroup.valid).toBeTruthy();
    expect(component.formGroup.get('firstName')?.value).toEqual('Juan');

    const button = form.querySelector('button') as HTMLButtonElement;
    button.click();
    fixture.detectChanges();
    expect(mockUserService.register).toHaveBeenCalled();
  });

  it('should invalid if the form is not completed', () => {
    spyOn(console, 'error');
    (mockUserService.register as jasmine.Spy).and.throwError(
      new Error('Error'),
    );
    expect(console.error).toHaveBeenCalled();
  });
});
