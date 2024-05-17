import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Subscription } from 'rxjs';
import { Currencies } from '../../models/currencies-response';

@Component({
  selector: 'app-currencies-page',
  standalone: true,
  imports: [],
  templateUrl: './currencies-page.component.html',
  styleUrl: './currencies-page.component.css'
})
export class CurrenciesPageComponent implements OnInit, OnDestroy {
  private currencyService: CurrencyService = inject(CurrencyService);
  private currencySub!: Subscription;

  public currencies: any[] = [];

  ngOnInit(): void {
    this.currencySub = this.currencyService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    });
  }
  
  ngOnDestroy(): void {
    this.currencySub.unsubscribe();
  }

}
