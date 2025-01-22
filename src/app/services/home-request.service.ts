import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeRequest } from '../interfaces/home-request.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeRequestService {
  private http = inject(HttpClient);
  private apiUrl =
    'https://0589-2800-810-565-248-5dcf-5ba8-492b-8dfa.ngrok-free.app/api/v1/ollama/market-all-products';

  sendHomeRequest(data: HomeRequest): Observable<any> {
    const formData = new FormData();
    formData.append('query', data.query);
    formData.append('secret_key', data.secret_key);

    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true',
    });

    return this.http.post(this.apiUrl, formData, { headers });
  }
}
