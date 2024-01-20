import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : string = "davide";
  password : string = "1234_Gino!!";

  autenticato : boolean = true;
  errMsg : string = 'Spiacente, la userid o la password sono errati!';

  constructor(private route: Router) {}

  ngOnInit(): void {
  }

  titolo: string = "Accesso & Autenticazione";
  sottotitolo: string = "Procedi ad inserire la userid e la password";

  gestAuth = () => {

    if (this.userId === "davide" && this.password === "1234_Gino!!1") {

      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;

    }
    else {
      this.autenticato = false;
    }
  }

}
