import { InventoryTransactionDetail } from './inventory-transaction-detail.model';
import { Injectable } from '@angular/core';
@Injectable()
export class InventoryTransaction {
  id: number;
  date: Date;
  type: string;
  comments: string;
  status: string;
  details: InventoryTransactionDetail[];
}