import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'products.json';

  constructor(private http: HttpClient) { }

   getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
   }

   
  
}
