import { Component, OnInit } from '@angular/core';

import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private BasicAuth: AuthappService) { }

  ngOnInit(): void {
    this.BasicAuth.clearAll();
  }

}
