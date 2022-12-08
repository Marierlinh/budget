import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiquerBudgetComponent } from './components/indiquer-budget/indiquer-budget.component';
import { DepensesComponent } from './components/depenses/depenses.component';


const routes: Routes = [
  { path: '', redirectTo: '/indiquer-budget', pathMatch: 'full'},
  { path:  'indiquer-budget', component: IndiquerBudgetComponent},
  { path:  'depenses', component: DepensesComponent},
  { path:'**', redirectTo: '/indiquer-budget', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
