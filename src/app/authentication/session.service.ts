import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private target = localStorage;
  private sessionitem = 'app-session';
  private useritem = 'userinfo';
  public auth: BehaviorSubject<boolean>;

  constructor() {
    this.auth = new BehaviorSubject(this.isAuthenticated());
   }

  saveUserInfo(data)
  {
    this.target.setItem(this.useritem, JSON.stringify(data));
  }

  getUSerInfo() {
    return this.target.getItem(this.useritem);
  }

  saveSession(data) {
    this.target.setItem(this.sessionitem, JSON.stringify(data));
    this.auth.next(true);
  }

  getSession() {
    return this.target.getItem(this.sessionitem);
  }

  isAuthenticated() {
    return this.target.getItem(this.sessionitem) ? true : false;
  }

  removeSession() {
    this.target.removeItem(this.sessionitem);
    this.target.removeItem(this.useritem);
    this.auth.next(false);
  }



}
