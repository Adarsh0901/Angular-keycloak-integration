import { Injectable } from '@angular/core';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _commonService: CommonService) {}

  getClientData(): any {
    try {
      let dataObj = {
        method: 'get',
        api_url: 'http://localhost:3000/ClientList',
      };
      let resp = this._commonService.fetchData(dataObj);
      console.log(resp);
      return resp;
    } catch (error) {
      console.log(error);
    }
  }
}
