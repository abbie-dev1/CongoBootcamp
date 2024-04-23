import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

private Url = './assets/employees.json'; //Replace with your API URL
//private Url = 'https://fakestoreapi.com/products/';
  constructor(private http : HttpClient) { }

  getEmployees(): Observable<any>
  {
    return this.http.get<any>(this.Url);
  }
}
