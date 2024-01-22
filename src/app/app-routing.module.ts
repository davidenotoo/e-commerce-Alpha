import { RouterModule, Routes } from '@angular/router';

import { ArticoliComponent } from './articoli/articoli.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardServiceService } from 'src/services/route-guard-service.service';

const routes: Routes = [
  // rotte libere
  { path: '', component: LoginComponent },
  { path: 'index', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  // rotte protette
  { path: 'welcome/:userid', component: WelcomeComponent, canActivate: [RouteGuardServiceService]},
  { path: 'articoli', component: ArticoliComponent, canActivate: [RouteGuardServiceService] },
  { path: "logout", component: LogoutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
