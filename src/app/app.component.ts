import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'keycloak-project';
  constructor(private _keycloakService: KeycloakService) {}
  isloggedIn = false;
  userProfile: any;
  public async ngOnInit() {
    this.isloggedIn = await this._keycloakService.isLoggedIn();
    if (this.isloggedIn) {
      this.userProfile = await this._keycloakService.loadUserProfile();
    }
  }
  logoutUser() {
    this._keycloakService.logout('http://localhost:4200/');
  }
}
