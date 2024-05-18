import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Rate } from '../../models/currency-rates-response';

@Component({
  selector: 'app-currency-rates-page',
  standalone: true,
  imports: [],
  templateUrl: './currency-rates-page.component.html',
  styleUrl: './currency-rates-page.component.css'
})
export class CurrencyRatesPageComponent implements OnInit, OnDestroy {
  private currencyService: CurrencyService = inject(CurrencyService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private getLatestRatesSub!: Subscription;
  private paramsSub!: Subscription;

  public from: string = 'EUR';
  public rates: any[] = []
  ngOnInit(): void {
    this.paramsSub = this.route.queryParams.subscribe(params => {
      this.from = params['code'];
      this.currencyService.getLatestRates(this.from).subscribe(res => {
        this.rates = Object.entries(res.rates);
      });
    })
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.getLatestRatesSub.unsubscribe();
  }
}
