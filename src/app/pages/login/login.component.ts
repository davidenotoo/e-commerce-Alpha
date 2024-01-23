import { Component, OnInit } from '@angular/core';

import { AuthappService } from 'src/services/authapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "";
  password: string = "";

  autenticato: boolean = true;

  errMsg: string = "Spiacente, la userid e/o la password sono errati!";

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  constructor(private route: Router, private BasicAuth: AuthappService ) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.BasicAuth.autentica(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);

      this.autenticato = true;
    }
    else {
      this.autenticato = false;

    }
  }
}
