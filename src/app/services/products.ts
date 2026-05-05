import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Products {
   baseUrl = 'https://api.everrest.educata.dev/shop/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<any>(`${this.baseUrl}/all?page_size=50`);
  }

 // getAllProducts() {
  //  return this.http.get<any>(`${this.baseUrl}/all`);
 // }

  getProductById(id: string) {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }
}
