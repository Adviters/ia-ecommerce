import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { HomeRequest } from '../interfaces/home-request.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HomeRequestService {
  private http = inject(HttpClient);
  private apiUrl = environment.homeRequestUrl;

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
