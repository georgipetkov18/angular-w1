import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  private router: Router = inject(Router);
  private getLatestRatesSub!: Subscription;
  private paramsSub!: Subscription;

  public from: string = 'EUR';
  public rates: any[] = []
  ngOnInit(): void {
    this.paramsSub = this.route.queryParams.subscribe(params => {
      this.from = params['code'];
      this.getLatestRatesSub = this.currencyService.getLatestRates(this.from).subscribe(res => {
        this.rates = Object.entries(res.rates);
      });
    });
  }

  

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.getLatestRatesSub.unsubscribe();
  }
}
