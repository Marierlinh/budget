import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Module
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

//Component
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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
