import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch'
import { Customer } from '../model/customer.model'
import { SearchOptions } from '../model/search-options.model';
import { ResponsePage } from '../responses/responsepage'

@Injectable()
export class CustomerService {

  private baseUrl: string='http://localhost:8080/api/customers';
  constructor(private http:HttpClient) { }

  public findBySearchPaginable (search: SearchOptions):Observable<ResponsePage>{
    
       return this.http.post<ResponsePage>(this.baseUrl+'/search', search)
       .catch(this.handleErrorObservable);
     }

  public getAll():Observable<Customer[]>{
       return this.http.get<Customer[]>(this.baseUrl)
       .catch(this.handleErrorObservable);
        
    }
      
  public getAllByPagination(start: number,size: number):Observable<ResponsePage>{
      
    return this.http.get(this.baseUrl+'/'+start+'/'+size).catch(this.handleErrorObservable);
  }

  public getByField(search_by_field,search_by_value):Observable<Customer[]>{
    
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

  public create(customer: Customer):Observable<Customer>{

    return this.http.post(this.baseUrl, customer)
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
