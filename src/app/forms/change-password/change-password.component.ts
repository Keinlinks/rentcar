import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profileSettingService } from 'src/app/profileService/profileSetting.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  constructor(
    private profileSetting: profileSettingService,
    private fb: FormBuilder
  ) {
    this.passwordForm = fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  passwordForm!: FormGroup;

  changePassword() {
    if (this.passwordForm.valid) {
      const oldPassword = this.passwordForm.value.oldPassword;
      const newPassword = this.passwordForm.value.newPassword;
      this.profileSetting
        .changePassword(oldPassword, newPassword)
        .subscribe((data) => {
          alert('La contraseña se modifico correctamente!');
        });
    }
  }
}
