import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CurrencyRatesResponse } from './models/currency-rates-response';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl = 'https://api.frankfurter.app/';
  private http: HttpClient = inject(HttpClient);

  public convert(amount: number, from: string, to: string) {
    const fullUrl = `${this.baseUrl}latest?amount=${amount}&from=${from}&to=${to}`;
    return this.http.get<CurrencyRatesResponse>(fullUrl);
  }

  public getCurrencies() {
    return this.http.get<string>(this.baseUrl + 'currencies').pipe(map((currencies) => {
      const entries = Object.entries(currencies);
      return entries.map(value => {
        return {code: value[0], name: value[1]};
      })
    }));
  }

  public getLatestRates(from: string) {
    const fullUrl = `${this.baseUrl}latest?from=${from}`;
    return this.http.get<CurrencyRatesResponse>(fullUrl);
  }
}
