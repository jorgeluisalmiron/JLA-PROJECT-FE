import { Component, OnInit } from '@angular/core';
import { GenericForm } from '../utils/generic-form';
import { SupplierService } from '../services/supplier.service';
import { ResponsePage } from '../responses/responsepage';
import { SearchOptions } from '../model/search-options.model';
import { Supplier } from '../model/supplier.model';
import { MessageService } from '../services/message.service';
import { SearchCriteria } from '../model/search-criteria.model';

@Component({
  selector: 'app-form-supplier',
  templateUrl: './form-supplier.component.html',
  styleUrls: ['./form-supplier.component.css'],
  providers: [SupplierService, ResponsePage, SearchOptions, Supplier]
})

export class FormSupplierComponent extends GenericForm<Supplier> implements OnInit  {

  constructor(public service: SupplierService,  public responsePage: ResponsePage, public searchOptions: SearchOptions,
    public element: Supplier, public messageService: MessageService) {
    super(responsePage, searchOptions, element, messageService);
    this.searchOptions = this.setDefaultSearch();
    this.toogle = 'list';
    this.searchCriteria = new SearchCriteria();
  }

  ngOnInit() {
    this.get();
  }

  // Service calls
  get() {
   this.service.findBySearchPaginable(this.searchOptions).subscribe(
      data => {
        this.messageService.clear();
        this.responsePage = data,
        this.listOfElements = this.responsePage.content,
        this.searchOptions.first = this.responsePage.first;
        this.searchOptions.last = this.responsePage.last;
        this.searchOptions.totalPages = this.responsePage.totalPages;
      },

      (err) =>  {
        this.messageService.clear();
        this.log(err);

      },
      () => {
        console.log(this.searchOptions);
      }
    );
  }

  delete() {
    console.log('Delete: ' + this.selectedRow);
    this.service.delete(this.listOfElements[this.selectedRow].id).subscribe(
      () => {
            this.messageService.clear();
            this.closeDialog();
            this.listOfElements.splice(this.selectedRow, 1);
      },
      (err) =>  {
        this.messageService.clear();
        this.log(err);
      }
     );
  }

  post() {
    console.log('New Record'),
    this.service.create(this.element).subscribe(
          data => {
            this.messageService.clear();
            this.element.id = data.id,
            this.listOfElements.push(this.element),
            this.closeDialog();
          },
          (err) =>  {
            this.messageService.clear();
            this.log(err);
          });
    }

   put() {
    console.log('Update Record'),
    this.service.update(this.element).subscribe(
      data => {
          this.messageService.clear();
          this.closeDialog();
      },
      (err) =>  {
        this.messageService.clear();
        this.log(err);
      });
  }

  setDefaultSearch() {
    const searchDefault = {
      sortByField: 'identificationNum',
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

  log(error) {

    switch (error.status) {
      case 422: this.messageService.push('El proveedor ya existe');
                break;
      default: this.messageService.push('Error de conexion con el servidor');
                break;

    }
  }
}
