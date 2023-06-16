import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AuthGuard } from './Guards/KeycloakAuthGuard.guard';
import { UserComponent } from './user/user.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: 'Home',
    component: HomePageComponent,
  },
  {
    path: 'user-dashboard',
    canActivate: [AuthGuard],
    component: DashboardPageComponent,
  },
  {
    path: 'user',
    canActivate: [AuthGuard],
    component: UserComponent,
  },
  {
    path: 'client',
    canActivate: [AuthGuard],
    component: ClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
