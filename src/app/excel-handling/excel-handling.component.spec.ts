import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelHandlingComponent } from './excel-handling.component';

describe('ExcelHandlingComponent', () => {
  let component: ExcelHandlingComponent;
  let fixture: ComponentFixture<ExcelHandlingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelHandlingComponent]
    });
    fixture = TestBed.createComponent(ExcelHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
