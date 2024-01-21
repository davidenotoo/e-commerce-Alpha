import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthappService } from 'src/services/authapp.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : string = "";
  password : string = "";

  autenticato : boolean = true;
  errMsg : string = 'Spiacente, la userid o la password sono errati!';

  constructor(private route: Router, private BasicAuth: AuthappService) {}

  ngOnInit(): void {
  }

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  gestAuth = () => {

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
    }
    else {
      this.autenticato = false;
    }
  }

}
