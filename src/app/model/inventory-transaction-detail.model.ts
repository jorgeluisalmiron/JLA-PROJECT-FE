import { Product } from './product.model';
import { Injectable } from '@angular/core';
@Injectable()
export class InventoryTransactionDetail {
  id: number;
  quantity: number;
  uom: string;
  product: Product;
}