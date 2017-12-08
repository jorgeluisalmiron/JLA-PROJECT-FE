import { SearchCriteria } from './search-criteria.model';
import { Injectable } from '@angular/core';
@Injectable()
export class SearchOptions {
  sortByField: string;
  sortType: string;
  page: number;
  size: number;
  first: boolean;
  last: boolean;
  totalPages: number;
  searchCriteria: SearchCriteria[];


}