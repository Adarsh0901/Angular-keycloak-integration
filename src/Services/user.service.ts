import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _commonService: CommonService) {}

  getUserData(): any {
    try {
      let dataObj = {
        method: 'get',
        api_url: 'http://localhost:3000/userList',
      };
      let resp = this._commonService.fetchData(dataObj);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  addUserData(data: any): any {
    try {
      let dataObj = {
        method: 'post',
        api_url: 'http://localhost:3000/userList',
        param_data: data,
      };
      let resp = this._commonService.fetchData(dataObj);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  updateUserData(data: any): any {
    try {
      let dataObj = {
        method: 'put',
        api_url: `http://localhost:3000/userList/${data.id}`,
        param_data: data,
      };
      let resp = this._commonService.fetchData(dataObj);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  deleteUserData(id: any): any {
    try {
      let dataObj = {
        method: 'delete',
        api_url: `http://localhost:3000/userList/${id}`,
      };
      let resp = this._commonService.fetchData(dataObj);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
}
