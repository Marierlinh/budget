import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number;
  restant: number;

  constructor() { 
    this.budget = 0
    this.restant = 0
  }
}
