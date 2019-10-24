import { SessionService } from './../session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: any = [];

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
   /* if (this.sessionService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }*/
  }

  login() {
    //console.log('login');
    this.loginService.login(this.user).then(response => {
      
      this.sessionService.saveSession(response);
      
      this.loginService.getUserInfo().then(response => {
        console.log(response);
        this.sessionService.saveUserInfo(response);
        this.router.navigate(['/dashboard']);
      }).catch(error=>{
        console.log(error);
      });

    }).catch(error => {
      console.log(error);
    });
  }

}
