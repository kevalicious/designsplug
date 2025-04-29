import { Injectable } from '@angular/core';
//import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = "http://localhost/designplug/api/products";
  
  constructor(private http: HttpClient) { }

  getProduct():Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/viewproducts.php`);
  }

  getProductbyId(id: any):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/viewproductbyid.php?id=${id}`).pipe(
      catchError((error) => {
        console.error('Error fetching product:', error);
        return throwError(() => error);
      })
    );
  }

}
