import { inject, Injectable } from '@angular/core';
import { Shoes } from '../models/shoes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShoesListService {
  private http = inject(HttpClient);
  private apiUrl = environment.shoesListUrl;

  getProducts(): Observable<{ productos: Product[] }> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get(this.apiUrl, { headers }) as Observable<{
      productos: Product[];
    }>;
  }
}
