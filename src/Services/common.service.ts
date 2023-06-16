import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private _httpClient: HttpClient) {}

  fetchData(dataObj: any): any {
    let url = dataObj.api_url;
    let data = dataObj.param_data;
    try {
      if (dataObj.method == 'post') {
        return this._httpClient.post<any>(url, data);
      } else if (dataObj.method == 'delete') {
        return this._httpClient.delete<any>(url);
      } else {
        return this._httpClient.get<any>(url);
      }
    } catch (error) {
      console.log('Error');
    }
  }
}
