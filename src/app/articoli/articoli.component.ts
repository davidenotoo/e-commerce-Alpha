import { Component, OnInit } from '@angular/core';
import { Iarticoli } from '../models/articoli';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli: Iarticoli[] = [
    { codart: '014600388', descrizione: 'Barilla Farina 1KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    { codart: '014600387', descrizione: 'Caputo Farina 1KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    { codart: '014600386', descrizione: 'Mulino Farina 1KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() },
    { codart: '014600385', descrizione: 'Giglio Farina 1KG', um: 'PZ', pzcart: 24, peso: 1, prezzo: 1.09, active: true, data: new Date() }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
