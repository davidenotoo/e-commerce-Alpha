import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: string = "davide";
  password: string = "1234!!_!C";

  autenticato: boolean = true;
  errMsg: string = "Spiacente, la userId e/ o la password sono errati!";

  // okMsg: string = "";




  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  gestAuth = (): void => {
    console.log(this.userId);

    if (this.userId === "davide" && this.password === "1234!!_!C1") {
      this.route.navigate(['welcome', this.userId]);
      this.autenticato = true;
      //this.okMsg = "Login effettuato";
    } else {
      this.autenticato = false;
    }



  }

}
