import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  budget:number;
  restant: number;
  private depense$ = new Subject<any>();

  constructor() { 
    this.budget = 0
    this.restant = 0
  }

  ajouterDepense(depense: any){
    this.restant = this.restant - depense.montant;
    this.depense$.next(depense);
  }

  getDepenses(): Observable<any> {
    return this.depense$.asObservable();
  }
}
