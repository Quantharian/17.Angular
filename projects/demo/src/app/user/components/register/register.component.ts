import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cas-register',
  imports: [ReactiveFormsModule],
  template: `<form [formGroup]="formGroup" (submit)="onSubmit()">
    <label>
      <span>Nombre</span
      ><input type="text" id="firstName" formControlName="firstName"
    /></label>
    @if (
      formGroup.get('firstName')?.touched && formGroup.get('firstName')?.invalid
    ) {
      <p>El nombre es requerido</p>
    }

    <label>
      <span>Apellidos</span
      ><input type="text" id="lastName" formControlName="lastName"
    /></label>
    @if (
      formGroup.get('lastName')?.touched && formGroup.get('lastName')?.invalid
    ) {
      <p>El apellido es requerido</p>
    }
    <label
      ><span>E-mail</span
      ><input type="email" id="email" formControlName="email"
    /></label>

    @if (
      formGroup.get('email')?.touched && formGroup.get('email')?.invalid
    ) {
      @if formGroup
      <p>El nombre es requerido</p>
    }

    <label
      ><span>Password</span
      ><input type="password" id="password" formControlName="password"
    /></label>
    <button type="submit" [disabled]="formGroup.invalid">Registrar</button>
  </form>`,
  styles: `
  label(
    display: block;
  )`,
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  formGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });
  checkedPasswd = this.checkedPasswd();

  constructor() {
    this.formGroup.get('password')?.valueChanges.subscribe(() => {
      this.checkedPasswd = this.checkedPasswd();
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      console.log('Formulario invalido');
      return;
    }
    console.log(this.formGroup.value);
  }
}
