import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-liste-depenses',
  templateUrl: './liste-depenses.component.html',
  styleUrls: ['./liste-depenses.component.css']
})
export class ListeDepensesComponent implements OnInit, OnDestroy{
  subscription: Subscription;
  budget: number;
  restant: number;
  listedepenses:any[] = [];

  constructor(private _budgetServices: BudgetService){
    this.budget=0;
    this.restant=0;
    this.subscription = this._budgetServices.getDepenses().subscribe(data=>{
      this.restant = this.restant - data.montant;
      this.listedepenses.push(data);

    })
  }

  ngOnInit():void{
    this.budget=this._budgetServices.budget;
    this.restant=this._budgetServices.restant;
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  AppliquerCouleurRestante(){
    if(this.budget / 4 > this.restant){
      return 'alert alert-danger';
    } else if(this.budget / 2 > this.restant){
      return 'alert alert-warning';
    }else {
      return 'alert alert-secondary';
    }
  }
}
