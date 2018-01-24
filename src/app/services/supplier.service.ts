import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch'
import { Supplier } from '../model/supplier.model'
import { SearchOptions } from '../model/search-options.model';
import { ResponsePage } from '../responses/responsepage'

@Injectable()
export class SupplierService {

  private baseUrl: string='http://localhost:8080/api/suppliers';
  constructor(private http:HttpClient) { }

  public findBySearchPaginable (search: SearchOptions):Observable<ResponsePage>{
    
       return this.http.post<ResponsePage>(this.baseUrl+'/search', search)
       .catch(this.handleErrorObservable);
     }

  public getAll():Observable<Supplier[]>{
       return this.http.get<Supplier[]>(this.baseUrl)
       .catch(this.handleErrorObservable);
        
    }
      
  public getAllByPagination(start: number,size: number):Observable<ResponsePage>{
      
    return this.http.get(this.baseUrl+'/'+start+'/'+size).catch(this.handleErrorObservable);
  }

  public getByField(search_by_field,search_by_value):Observable<Supplier[]>{
    
    return this.http.get(this.baseUrl+'subject/getByField/'+search_by_field+'='+search_by_value).catch(this.handleErrorObservable);
    
  }
  public getById(id):Observable<Response>{
    console.log('GetById');
    return this.http.get(this.baseUrl+'/'+id).catch(this.handleErrorObservable);
    
  }

  public delete(id):Observable<Response>
  {
    return this.http.delete(this.baseUrl+'/'+id).catch(this.handleErrorObservable);
    
  }

  public create(supplier: Supplier):Observable<Supplier>{

    return this.http.post(this.baseUrl, supplier)
    .catch(this.handleErrorObservable);
  
  }

  public update(object):Observable<Response>{
  
    return this.http.put(this.baseUrl, object).catch(this.handleErrorObservable);
  }

  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error);
  }

 }
