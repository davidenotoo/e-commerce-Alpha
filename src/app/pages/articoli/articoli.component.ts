import { Component, OnInit } from '@angular/core';

import { ArticoliService } from 'src/services/articoli.service';
import { IArticoli } from 'src/app/models/Articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli: IArticoli[]  = []

  constructor(private articoliService: ArticoliService) { }

  ngOnInit(): void {
    this.articoli = this.articoliService.getArticoli();
  }

}
