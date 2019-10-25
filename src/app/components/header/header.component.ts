import { SessionService } from './../../authentication/session.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sessionService: SessionService) {
  }

  isAuthenticated: boolean;

  ngOnInit() {
    this.sessionService.auth.subscribe(c => {
      this.isAuthenticated = c;
    });
  }

}
