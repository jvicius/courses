import { NotfoundComponent } from './components/errors/notfound/notfound.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component : DashboardComponent},
  {path: '**', component : NotfoundComponent},
 // {path: 'not-found', component : NotfoundComponent},
  //{path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
