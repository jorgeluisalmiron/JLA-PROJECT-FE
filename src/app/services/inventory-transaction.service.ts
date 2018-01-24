import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { InventoryTransaction } from '../model/inventory-transaction.model'
import { SearchOptions } from '../model/search-options.model';
import { ResponsePage } from '../responses/responsepage'

@Injectable()
export class InventoryTransactionService {

  private baseUrl: string='http://localhost:8080/api/inventoryTransactions';
  constructor(private http:Http) { }

  public getAll():Observable<InventoryTransaction[]>{

    return this.http.get(this.baseUrl).map(
      (response) => response.json()
    );
  }

  public getAllByPagination(start: number,size: number):Observable<ResponsePage>{

    return this.http.get(this.baseUrl+'/'+start+'/'+size).map(
      (response) => response.json()
    );
  }

  public findBySearchPaginable (search: SearchOptions):Observable<ResponsePage>{
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl+'/search', search, options)
    .map((response) => response.json())
    .catch(this.handleErrorObservable);
  }

  public getByField(search_by_field,search_by_value):Observable<InventoryTransaction[]>{
    return this.http.get(this.baseUrl+'subject/getByField/'+search_by_field+'='+search_by_value).map(
      (response) => response.json()
    );
  }

  public getById(id):Observable<Response>{
    console.log('GetById');
    return this.http.get(this.baseUrl+'/'+id).map(
      (response) => response.json()
    );
  }

  public delete(id):Observable<Response>
  {
    return this.http.delete(this.baseUrl+'/'+id).map(
      (response) => response.json()
    );
  }


  public create(object):Observable<InventoryTransaction>{
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl, object, options)
    .map((response) => response.json())
    .catch(this.handleErrorObservable);
  }

  public update(object):Observable<Response>{
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl, object, options)
    .map((response) => response.json())
    .catch(this.handleErrorObservable);
  }


  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
