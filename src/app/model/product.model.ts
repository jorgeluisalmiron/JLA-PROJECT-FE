import { Injectable } from '@angular/core';
@Injectable()
export class Product {
  id: number;
  code: string;
  name: string;
  mark: string;
  main_supplier: string;
  uom: string;
  constructor() {}
}