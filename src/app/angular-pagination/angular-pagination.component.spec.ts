import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPaginationComponent } from './angular-pagination.component';

describe('AngularPaginationComponent', () => {
  let component: AngularPaginationComponent;
  let fixture: ComponentFixture<AngularPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularPaginationComponent]
    });
    fixture = TestBed.createComponent(AngularPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
