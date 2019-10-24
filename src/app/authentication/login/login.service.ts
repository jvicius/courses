import { SessionService } from './../session.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private sessionService: SessionService) {

  }

  login(data): Promise<any> {
    return this.httpClient.post(environment.apiUrl+'/login', data).toPromise();
  }

  getUserInfo(): Promise<any> {
    var token = JSON.parse(this.sessionService.getSession());
    return this.httpClient.post(environment.apiUrl+'/me', token).toPromise();
  }

}
