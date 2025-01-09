import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MarketRequest } from '../interfaces/market-request.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketRequestService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://728c-2800-810-565-248-9cca-684c-dee9-640f.ngrok-free.app/api/v1/ollama/market';

  sendMarketRequest(data: MarketRequest): Observable<any> {
    const formData = new FormData();
    formData.append('query', data.query);
    formData.append('session_id', data.session_id);
    formData.append('id_producto', data.id_producto);
    formData.append('secret_key', data.secret_key);

    return this.http.post(this.apiUrl, formData);
  }
}
