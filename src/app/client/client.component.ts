import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/Services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  data: any[] = [];
  constructor(private _clientService: ClientService) {}

  ngOnInit(): void {
    this._clientService.getClientData().subscribe((res: any) => {
      console.log(res);
      this.data = res;
    });
  }
}
