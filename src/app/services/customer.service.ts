import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { SearchOptions } from '../model/search-options.model';
import { ResponsePage } from '../responses/responsepage';
import { Customer } from '../model/customer.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }


  findBySearchPaginable (search: SearchOptions): Observable<ResponsePage> {
     return this.http.post<ResponsePage>(this.baseUrl + '/search', search, httpOptions).
         catch(this.handleErrorObservable);
  }

  getByField(search_by_field, search_by_value): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'subject/getByField/' + search_by_field + '=' + search_by_value).
        catch(this.handleErrorObservable);
  }

  delete(id): Observable<Response> {
    return this.http.delete<Response>(this.baseUrl + '/' + id);
  }

  create(product: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl, product).
       catch(this.handleErrorObservable);
  }

  update(product: Customer): Observable<Response> {
    return this.http.put<Response>(this.baseUrl, product).
        catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error('Error: ' + error.message || error);
    return Observable.throw(error);
  }
 }
