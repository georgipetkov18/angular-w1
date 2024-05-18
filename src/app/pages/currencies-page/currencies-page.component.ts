import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Subscription } from 'rxjs';
import { Currencies } from '../../models/currencies-response';
import { Currency } from '../../models/currency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currencies-page',
  standalone: true,
  imports: [],
  templateUrl: './currencies-page.component.html',
  styleUrl: './currencies-page.component.css'
})
export class CurrenciesPageComponent implements OnInit, OnDestroy {
  private currencyService: CurrencyService = inject(CurrencyService);
  private router: Router = inject(Router);
  private currencySub!: Subscription;

  public currencies: Currency[] = [];

  ngOnInit(): void {
    this.currencySub = this.currencyService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
    });
  }

  navigateToRates(code: string) {
    this.router.navigate(['/rates'], {queryParams: {code: code}})
  }
  
  ngOnDestroy(): void {
    this.currencySub.unsubscribe();
  }

}
