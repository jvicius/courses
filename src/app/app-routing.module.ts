import { AuthGuard } from './authentication/guards/auth.guard';
import { NotfoundComponent } from './components/errors/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo : 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component : DashboardComponent, canActivate:[AuthGuard]},
  {path: 'auth', loadChildren: () => import( './authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path: '**', component : NotfoundComponent},
 // {path: 'not-found', component : NotfoundComponent},
  //{path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
