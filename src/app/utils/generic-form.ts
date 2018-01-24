import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../model/search-criteria.model';
import { ResponsePage } from '../responses/responsepage';
import { SearchOptions } from '../model/search-options.model';
import { MessageService } from '../services/message.service';



export abstract class GenericForm<T>  {
  listOfElements: T[];
  selectedRow: number;
  toogle: string;
  searchCriteria: SearchCriteria;
  isNewRecord: boolean;


  constructor(public responsePage: ResponsePage, public searchOptions: SearchOptions,
    public element: T, public messageService: MessageService) {

  }


  // Service calls
  abstract get();

  abstract delete();

  save() {
    if (this.isNewRecord) {
          this.post();
    } else {
        this.put();
       }
   }

  abstract post();
  abstract put();

  setIndex(idx: number) {
    this.selectedRow = idx;
    console.log(idx);
  }

  create() {
    this.isNewRecord = true;
    this.element = null;
    this.element = <T> new Object();
    this.toogle = 'form';
  }

  edit() {
    this.isNewRecord = false;
    this.element = this.listOfElements[this.selectedRow];
    this.toogle = 'form';

  }

  sortTable(field: string) {
    if (this.searchOptions.sortByField === field) {
      if (this.searchOptions.sortType === 'ASC') {
        this.searchOptions.sortType = 'DESC';
        this.searchOptions.sortByField = field;
      } else {
        this.searchOptions.sortType = 'ASC';
        this.searchOptions.sortByField = field;
      }
    } else {
      this.searchOptions.sortByField = field;
      this.searchOptions.sortType = 'ASC';
    }
    console.log(this.searchOptions);
    this.get();
  }

  newRecord() {
    console.log('new Record');
    this.toogle = 'form';
  }

   deleteDialogOpen() {
    this.toogle = 'deleteDialog';
  }

  public closeDialog() {
    this.toogle = 'list';
  }

   searchDialogOpen() {
    this.toogle = 'searchDialog';
  }

  lastPage() {
    this.searchOptions.page = this.searchOptions.totalPages - 1;
    this.get();

  }

  firstPage() {
    this.searchOptions.page = 0;
    this.get();

  }
  prevPage() {
    this.searchOptions.page--;
    this.get();

  }
  nextPage() {
    this.searchOptions.page++;
    this.get();

  }
  onChangePageSize(newPageSize) {
    this.searchOptions.size = newPageSize;
    this.get();
  }
  search() {
    this.searchOptions.searchCriteria.push(this.searchCriteria);
    this.get();
    this.closeDialog();
  }

  listAll() {
    this.searchOptions.searchCriteria.pop();
    this.get();
  }

  cancel() {
    this.closeDialog();
  }


 abstract setDefaultSearch();
 abstract log(error);
}

