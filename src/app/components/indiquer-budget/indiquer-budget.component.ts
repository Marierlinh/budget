import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-indiquer-budget',
  templateUrl: './indiquer-budget.component.html',
  styleUrls: ['./indiquer-budget.component.css']
})

export class IndiquerBudgetComponent implements OnInit {
  montant: number;
  montantMauvais: boolean;

  constructor(private _budgetService: BudgetService, 
              private router: Router) {
    this.montant=0;
    this.montantMauvais = false;
  }

  ngOnInit():void {

  }

  ajouter() {
    if(this.montant > 0) {
      this.montantMauvais = false;
      this._budgetService.budget = this.montant;
      this._budgetService.restant = this.montant;
      this.router.navigate(['/depenses'])
    }else {
      this.montantMauvais = true;
    }
  }

}
