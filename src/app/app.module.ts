import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepensesComponent } from './components/depenses/depenses.component';
import { IndiquerBudgetComponent } from './components/indiquer-budget/indiquer-budget.component';
import { IndiquerDepensesComponent } from './components/depenses/indiquer-depenses/indiquer-depenses.component';
import { ListeDepensesComponent } from './components/depenses/liste-depenses/liste-depenses.component';

@NgModule({
  declarations: [
    AppComponent,
    DepensesComponent,
    IndiquerBudgetComponent,
    IndiquerDepensesComponent,
    ListeDepensesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
