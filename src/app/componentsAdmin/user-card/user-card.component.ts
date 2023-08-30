import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { dataUser } from 'src/app/models/dataUser';
import { profileSettingService } from 'src/app/profileService/profileSetting.service';
import { UsersService } from 'src/app/usersService/users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class UserCardComponent {
  constructor(private profileService: profileSettingService) {}
  showPopup: boolean = false;
  @Input() user: dataUser = {
    name: '',
    lastName: '',
    phone: 0,
    email: '',
    rentDays: 0,
    rentID: 0,
    address: '',
    id: 0,
  };
  deleteAcount() {
    this.profileService.deleteAcountById(this.user.id);
  }
}
