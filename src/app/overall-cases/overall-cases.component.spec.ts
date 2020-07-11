import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallCasesComponent } from './overall-cases.component';

describe('OverallCasesComponent', () => {
  let component: OverallCasesComponent;
  let fixture: ComponentFixture<OverallCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
