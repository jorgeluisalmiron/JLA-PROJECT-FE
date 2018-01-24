import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
@Injectable()
export class ResponsePage {
    first: boolean;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort;
    numberOfElements: number;
    content: Product[];
}
