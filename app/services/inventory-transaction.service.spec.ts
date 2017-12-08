import { TestBed, inject } from '@angular/core/testing';

import { InventoryTransactionService } from './inventory-transaction.service';

describe('InventoryTransactionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryTransactionService]
    });
  });

  it('should be created', inject([InventoryTransactionService], (service: InventoryTransactionService) => {
    expect(service).toBeTruthy();
  }));
});
