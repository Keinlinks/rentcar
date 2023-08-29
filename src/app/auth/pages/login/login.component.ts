import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { dataUser } from 'src/app/models/dataUser';
import { jsonResponse } from 'src/app/models/jsonResponse';
import { AuthService } from 'src/app/services_auth/auth.service';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  buttonText = 'Iniciar sesión';
  disabledButton: boolean = false;
  constructor(
    private fb: FormBuilder,

    private router: Router,
    private auth: AuthService,
    private stateRole: RoleServiceService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.disabledButton = true;
      this.buttonText = 'Enviando...';
      this.auth
        .userLogin(this.loginForm.value.email, this.loginForm.value.password)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            this.disabledButton = false;
            this.buttonText = 'Iniciar sesión';
            console.error(error);
            console.log('Error al verificar identidad');
            alert(error.error.message);

            return throwError('Algo salió mal. Por favor, intenta nuevamente.');
          })
        )
        .subscribe((response) => {
          this.stateRole.setUserData(response as jsonResponse);
          this.stateRole.verifyRole().subscribe((roleResponse) => {
            this.stateRole.changeRole(roleResponse.role);
          });
          this.disabledButton = false;
          this.buttonText = 'Iniciar sesión';

          this.router.navigateByUrl('/');
        });
    }
  }
}
