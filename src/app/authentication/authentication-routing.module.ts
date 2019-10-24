import { NotauthGuard } from './guards/notauth.guard';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full' },
  {path: 'login', component: LoginComponent, canActivate:[NotauthGuard]},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
