import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  utente: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.utente = this.route.snapshot.params['userid'];
  }

}
