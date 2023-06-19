import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/Services/common.service';
import { UserService } from 'src/Services/user.service';

interface user {
  id: number;
  username: string;
  email: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @ViewChild('addModal') addModalRef!: ElementRef;
  @ViewChild('editModal') editModalRef!: ElementRef;
  userList: any[] = [];
  public editId: user = { id: 0, username: '', email: '' };
  public addUser: user = {
    id: 0,
    username: '',
    email: '',
  };
  constructor(
    private _userService: UserService,
    private _commonService: CommonService
  ) {}

  ngOnInit() {
    this.getUserList();
  }

  addUserdata() {
    if (this._commonService.emailValidation(this.addUser.email)) {
      this._userService.addUserData(this.addUser).subscribe((res: any) => {
        this.addModalRef.nativeElement.click();
        this.getUserList();
      });
    } else {
      alert('Use correct email format');
    }
  }

  editUser() {
    if (this._commonService.emailValidation(this.editId.email)) {
      this._userService.updateUserData(this.editId).subscribe((res: any) => {
        this.editModalRef.nativeElement.click();
        this.getUserList();
      });
    } else {
      alert('Use correct email format');
    }
  }

  getUserList() {
    this._userService.getUserData().subscribe((res: any) => {
      this.userList = res;
    });
  }

  deleteUser(id: any) {
    this._userService.deleteUserData(id).subscribe(async (res: any) => {
      await this.getUserList();
    });
  }
}
