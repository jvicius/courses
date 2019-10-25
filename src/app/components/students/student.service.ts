import { SessionService } from './../../authentication/session.service';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  getStudents(): Promise<any> {
    let headers: HttpHeaders = new HttpHeaders({
      "Auth": this.sessionService.getToken(),
    });
    return this.httpClient.get(environment.apiData + '/users', {
      headers
    }).toPromise();
  }

  getStudent(id: number): Promise<any> {
    let headers: HttpHeaders = new HttpHeaders({
      "Auth": this.sessionService.getToken(),
    });
    return this.httpClient.get(environment.apiData + '/users/' + id, {
      headers
    }).toPromise();
  }
}
