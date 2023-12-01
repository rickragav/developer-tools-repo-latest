import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getToolsList() {
    var params = new HttpParams();

    var httpOptions = {
      params: params,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.get('https://toolnest.fun/landing.php', httpOptions);
  }
}
