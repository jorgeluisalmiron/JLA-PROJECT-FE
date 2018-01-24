import { Injectable } from '@angular/core';
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
    content: any;
}