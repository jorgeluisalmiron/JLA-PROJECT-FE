import { Component, OnInit, Pipe } from '@angular/core';
import { InventoryTransactionService } from '../services/inventory-transaction.service';
import { InventoryTransaction } from '../model/inventory-transaction.model'
import { SearchCriteria } from '../model/search-criteria.model';
import { SearchOptions } from '../model/search-options.model';
import { ResponsePage } from '../responses/responsepage'
// import { Router } from '@angular/router'

@Component({
  selector: 'app-list-of-customers',
  templateUrl: './form-list-inventory-transactions.component.html',
  styleUrls: ['./form-list-inventory-transactions.component.css'],
  providers: [InventoryTransactionService, ResponsePage, SearchOptions, InventoryTransaction]
})

export class FormListInventoryTransactionsComponent implements OnInit {
  listOfInventoryTransactions: InventoryTransaction[];
  selectedRow: number;
  toogle: string;
  searchCriteria: SearchCriteria;
  isNewRecord: boolean;


  constructor(private service: InventoryTransactionService,  private responsePage: ResponsePage, public searchOptions: SearchOptions, public customer: InventoryTransaction) {
    this.searchOptions = this.setDefaultSearch();
    this.toogle = 'list';
    this.searchCriteria = new SearchCriteria();


  }

  ngOnInit() {
    this.get();
  }

  public get(): void {
    this.service.findBySearchPaginable(this.searchOptions).subscribe(
      data => {
        this.responsePage = data,
          this.listOfInventoryTransactions = this.responsePage.content,
          this.searchOptions.first = this.responsePage.first;
        this.searchOptions.last = this.responsePage.last;
        this.searchOptions.totalPages = this.responsePage.totalPages;
      },

      error => alert(error),
      () => {
        console.log('Finish')
      }
    );
  }

  public setIndex(idx: number): void {
    this.selectedRow = idx;
    console.log(idx);
  }

  public create(): void {
    this.isNewRecord = true;
    this.customer=null;
    this.customer = new InventoryTransaction();
    this.toogle = 'form';
  }

  public edit(): void {
    this.isNewRecord = false;
    this.customer = this.listOfInventoryTransactions[this.selectedRow];
    this.toogle = 'form';

  }

  /*public openForm(): void {
    //   this.router.navigate(['/subject-form/',this.listOfSubjects[this.selectedRow].id]);

  }
   */

  public sortTable(field): void {
    if (this.searchOptions.sortByField == field) {
      if (this.searchOptions.sortType == 'ASC') {
        this.searchOptions.sortType = 'DESC';
        this.searchOptions.sortByField = field;
      }
      else {
        this.searchOptions.sortType = 'ASC';
        this.searchOptions.sortByField = field;
      }

    }
    else {
      this.searchOptions.sortByField = field;
      this.searchOptions.sortType = 'ASC';
    }
    console.log(this.searchOptions);
    this.get();

  }

  public newRecord(): void {
    console.log('new Record');
    this.toogle = 'form';
  }

  public navigateToSubjectForm(selectedRow): void {
    //    console.log(this.listOfSubjects[this.selectedRow].id);
    //    this.router.navigate(['/subject-form/',this.listOfSubjects[this.selectedRow].id]);
  }

  public deleteDialogOpen(): void {
    this.toogle = 'deleteDialog';
  }

  public closeDialog(): void {
    this.toogle = 'list';
  }

  public delete(): void {
    console.log('Delete: ' + this.selectedRow);
    this.service.delete(this.listOfInventoryTransactions[this.selectedRow].id).subscribe(
      result => console.log('Deleted'),
      error => alert(error),
      () => {
        this.closeDialog();
        this.listOfInventoryTransactions.splice(this.selectedRow, 1);
      }
    );
  }

  public searchDialogOpen(): void {
    this.toogle = 'searchDialog';
  }

  public lastPage() {
    this.searchOptions.page = this.searchOptions.totalPages - 1;
    this.get();

  }

  public firstPage() {
    this.searchOptions.page = 0;
    this.get();

  }
  public prevPage() {
    this.searchOptions.page--;
    this.get();

  }
  public nextPage() {
    this.searchOptions.page++;
    this.get();

  }
  public onChangePageSize(newPageSize) {
    this.searchOptions.size = newPageSize;
    this.get();
  }
  public search(): void {
    this.searchOptions.searchCriteria.push(this.searchCriteria);
    this.get();
    this.closeDialog();
  }

  public listAll(): void {
    this.searchOptions.searchCriteria.pop();
    this.get();
  }

  public cancel() {
    this.closeDialog();
  }

public save():void{
   if (this.isNewRecord)
    {
         console.log('New Record'),
         this.service.create(this.customer).subscribe(
        data => {
          this.customer.id = data.id,
          this.listOfInventoryTransactions.push(this.customer),
          this.closeDialog();
        },
        error => {
          switch(error.status){
            case 422:
            {
              alert('Ya existe una customero con el c�digo ingresado');
              break;
            }
            default:
            {
                alert('Error al crear un nuevo registro');
            }
          }
        },
        () => {

           console.log('POST Finished');

        }
      );
      }
    else
      {
        console.log('Update Record'),
        this.service.update(this.customer).subscribe(
          data => {

          this.closeDialog()
          },
          error => console.log(error),
          () =>{
            console.log('PUT Finished');

          }
        );

      }
  }
  private setDefaultSearch() {
    const searchDefault = {
      sortByField: 'id',
      sortType: 'ASC',
      page: 0,
      size: 10,
      first: false,
      last: false,
      totalPages: 0,
      searchCriteria: []
    };
    return searchDefault;
  }

  /*private sortResults(prop, asc) {
    this.listOfInventoryTransactions = this.listOfInventoryTransactions.sort(function(a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }*/
}
