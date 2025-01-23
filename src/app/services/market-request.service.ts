import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MarketRequest } from '../interfaces/market-request.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarketRequestService {
  private http = inject(HttpClient);
  private apiUrl = environment.detailRequestUrl;

  sendMarketRequest(data: MarketRequest): Observable<any> {
    const formData = new FormData();
    formData.append('query', data.query);
    formData.append('session_id', data.session_id);
    formData.append('id_producto', data.id_producto.toString());
    formData.append('secret_key', data.secret_key);

    return this.http.post(this.apiUrl, formData);
  }
}
