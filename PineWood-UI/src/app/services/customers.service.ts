import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Customers } from '../models/customers';

const baseUrl = 'http://localhost:5016/api/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient) {}

  getCustomerList(): Observable<Customers[]> {
    return this.http.get<Customers[]>(baseUrl);
  }

  getCustomerDetails(id: any): Observable<Customers> {
    return this.http.get<Customers>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
