import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { dataUser } from 'src/app/models/dataUser';
import { profileSettingService } from 'src/app/profileService/profileSetting.service';
import { RoleServiceService } from 'src/app/services_states/role_state/role-service.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.scss'],
})
export class ProfileInformationComponent {
  showPopup: boolean = false;
  userInfo!: dataUser;
  name!: string;
  lastname!: string;
  email!: string;
  phone!: number;
  address!: string;

  constructor(
    private router: Router,
    private profileSetting: profileSettingService,
    private fb: FormBuilder,
    private roleService: RoleServiceService
  ) {
    roleService.$userData.asObservable().subscribe((data) => {
      this.userInfo = data;
      this.name = data.name;
      this.lastname = data.lastName;
      this.email = data.email;
      this.phone = data.phone;
      this.address = data.address;
    });
  }
  passwordForm!: FormGroup;

  changeProfile(attribute: string, change: string) {
    this.profileSetting.changeProfile(attribute, change).subscribe((data) => {
      alert('Se actualizo correctamente!');
    });
  }
  changeProfileNumber(attribute: string, change: number) {
    if (this.phone.toString().length > 7)
      this.profileSetting.changeProfile(attribute, change).subscribe((data) => {
        alert('Se actualizo correctamente');
      });
  }
  deleteAcount() {
    this.profileSetting.deleteAcount().subscribe((data) => {
      alert('Se elimino la cuenta correctamente!');
      this.roleService.logout();
      this.router.navigateByUrl('/');
    });
  }
}
