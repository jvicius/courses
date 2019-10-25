import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Promise<any> {
    return this.httpClient.get(environment.apiData + '/users').toPromise();
  }

  getStudent(id: number): Promise<any> {
    return this.httpClient.get(environment.apiData + '/users/' + id).toPromise();
  }
}
