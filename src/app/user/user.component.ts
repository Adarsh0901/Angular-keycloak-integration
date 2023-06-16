import { Component, OnInit } from '@angular/core';
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
  userList: any[] = [];
  public editId: user = { id: 0, username: '', email: '' };
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this._userService.getUserData().subscribe((res: any) => {
      this.userList = res;
    });
  }

  deleteUser(id: any) {
    this._userService.deleteUserData(id).subscribe((res: any) => {
      console.log(res);
      this.getUserList();
    });
  }
}
