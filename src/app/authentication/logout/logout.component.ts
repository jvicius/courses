import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit() {
    this.sessionService.removeSession();
    this.router.navigate(['../login'], {relativeTo: this.activatedRoute});
  }

}
