import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatewiseCasesComponent } from './statewise-cases.component';

describe('StatewiseCasesComponent', () => {
  let component: StatewiseCasesComponent;
  let fixture: ComponentFixture<StatewiseCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatewiseCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatewiseCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
