import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiquerDepensesComponent } from './indiquer-depenses.component';

describe('IndiquerDepensesComponent', () => {
  let component: IndiquerDepensesComponent;
  let fixture: ComponentFixture<IndiquerDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiquerDepensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiquerDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
