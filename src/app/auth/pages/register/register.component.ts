import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services_auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  buttonText = 'Registrarse';
  disabledButton = false;
  constructor(
    private fb: FormBuilder,

    private router: Router,
    private auth: AuthService
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  registerSubmit() {
    let newUser = this.registerForm.value;
    if (this.registerForm.valid) {
      this.disabledButton = true;
      this.buttonText = 'Enviando datos...';
      if (newUser.password === newUser.passwordConfirm) {
        this.auth
          .userRegister(
            newUser.name,
            newUser.lastName,
            newUser.email,
            newUser.address,
            newUser.password,
            newUser.phone
          )
          .subscribe(
            (response) => {
              this.disabledButton = false;
              this.buttonText = 'Registrarse';
              alert('Registrado con éxito!');
              this.router.navigateByUrl('/login');
            },
            (err) => {
              alert('Ocurrió un error: Email ya existe');
            }
          );
      } else {
        this.disabledButton = false;
        this.buttonText = 'Registrarse';
        alert('Las contraseñas no son iguales ');
      }
    }
  }
}
