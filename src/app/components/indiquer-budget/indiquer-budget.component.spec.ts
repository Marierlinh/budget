import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiquerBudgetComponent } from './indiquer-budget.component';

describe('IndiquerBudgetComponent', () => {
  let component: IndiquerBudgetComponent;
  let fixture: ComponentFixture<IndiquerBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiquerBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiquerBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
