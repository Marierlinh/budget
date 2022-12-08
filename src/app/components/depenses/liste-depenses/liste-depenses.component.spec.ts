import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDepensesComponent } from './liste-depenses.component';

describe('ListeDepensesComponent', () => {
  let component: ListeDepensesComponent;
  let fixture: ComponentFixture<ListeDepensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDepensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDepensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
