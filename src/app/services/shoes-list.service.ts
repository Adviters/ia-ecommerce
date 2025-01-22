import { inject, Injectable } from '@angular/core';
import { Shoes } from '../models/shoes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ShoesListService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://0589-2800-810-565-248-5dcf-5ba8-492b-8dfa.ngrok-free.app/api/v1/ollama/products';

  getProducts(): Observable<{ productos: Product[] }> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.get(this.apiUrl, { headers }) as Observable<{
      productos: Product[];
    }>;
  }
}
