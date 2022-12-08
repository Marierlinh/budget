import { Component,  OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-depenses',
  templateUrl: './depenses.component.html',
  styleUrls: ['./depenses.component.css']
})
export class DepensesComponent implements OnInit {


  constructor( private _budgetService: BudgetService, 
               private router: Router){
    
  }

  ngOnInit(): void {
    if(this._budgetService.budget===0){
      this.router.navigate(['/indiquer-budget'])
    }
    console.log(this._budgetService.budget);
  }

}
