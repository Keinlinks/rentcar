import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleServiceService } from '../services_states/role_state/role-service.service';

@Injectable({
  providedIn: 'root',
})
export class profileSettingService {
  constructor(
    private http: HttpClient,
    private roleState: RoleServiceService
  ) {}
  private server: string = 'http://localhost:';
  private port: number = 3000;
  changePassword(oldPassword: string, newPassword: string) {
    const id = this.roleState.userData.id;
    const passwordPacket = {
      id: id,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    return this.http.post(
      `${this.server}${this.port}/changePassword`,
      passwordPacket
    );
  }

  changeProfile(attribute: string, newData: any) {
    const id = this.roleState.userData.id;
    const newDataPacket = {
      id: id,
      newData: newData,
    };

    return this.http.post(
      `${this.server}${this.port}/${attribute}Change`,
      newDataPacket
    );
  }
  deleteAcount() {
    const data = {
      id: this.roleState.userData.id,
    };

    return this.http.post(`${this.server}${this.port}/deleteAcount`, data);
  }
  deleteAcountById(id: number) {
    const data = {
      id: id,
    };

    return this.http.post(`${this.server}${this.port}/deleteAcount`, data);
  }
}
