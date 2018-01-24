import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListInventoryTransactionsComponent } from './form-list-inventory-transactions.component';

describe('FormListInventoryTransactionsComponent', () => {
  let component: FormListInventoryTransactionsComponent;
  let fixture: ComponentFixture<FormListInventoryTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListInventoryTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListInventoryTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
