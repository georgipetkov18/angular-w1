import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CurrencyConvertResponse } from './models/convert-response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = 'https://api.frankfurter.app/';
  private http: HttpClient = inject(HttpClient);

  public convert(amount: number, from: string, to: string) {
    const fullUrl = `${this.baseUrl}/latest?amount=${amount}&from=${from}&to=${to}`;
    return this.http.get<CurrencyConvertResponse>(fullUrl);
  }

  public getCurrencies() {
    return this.http.get<any[]>(this.baseUrl + 'currencies').pipe(map((currencies) => {
      return Object.entries(currencies);
    }));
  }
}
