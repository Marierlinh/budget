import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indiquer-budget',
  templateUrl: './indiquer-budget.component.html',
  styleUrls: ['./indiquer-budget.component.css']
})

export class IndiquerBudgetComponent implements OnInit {
  montant: number;
  montantMauvais: boolean;

  constructor() {
    this.montant=0;
    this.montantMauvais = false;
  }

  ngOnInit():void {

  }

  ajouter() {
    if(this.montant > 0) {
      this.montantMauvais = false;
    }else {
      this.montantMauvais = true;
    }
  }

}
