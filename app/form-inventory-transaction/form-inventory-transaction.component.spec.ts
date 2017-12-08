import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInventoryTransactionComponent } from './form-inventory-transaction.component';

describe('FormInventoryTransactionComponent', () => {
  let component: FormInventoryTransactionComponent;
  let fixture: ComponentFixture<FormInventoryTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInventoryTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInventoryTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
