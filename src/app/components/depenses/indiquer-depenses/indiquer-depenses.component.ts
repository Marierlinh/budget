import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-indiquer-depenses',
  templateUrl: './indiquer-depenses.component.html',
  styleUrls: ['./indiquer-depenses.component.css']
})
export class IndiquerDepensesComponent implements OnInit{
  nomDepense: string;
  montant: number;
  formeIncorrecte: boolean;
  textIncorrecte: string;

  constructor(private _budgetService: BudgetService) {
    this.nomDepense='';
    this.montant=0;
    this.formeIncorrecte=false;
    this.textIncorrecte='';
  }
  ngOnInit():void{

  }

  ajouterDepenses(){
    if(this.montant > this._budgetService.restant){
      this.formeIncorrecte=true;
      this.textIncorrecte = 'le montant saisi est supérieur au solde';
      return;
    }

    if(this.nomDepense === '' || this.montant <= 0){
      this.formeIncorrecte = true;

    } else {

      //objet
      const DEPENSE = {
        nom: this.nomDepense,
        montant: this.montant
      }
      // envoyer objet via le sujet
      this._budgetService.ajouterDepense(DEPENSE);
      //reset form
      this.formeIncorrecte = false;
      this.nomDepense= '';
      this.montant=0;
    }
  }
}
