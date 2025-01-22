import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  public ratesLeft: any[] = [];
  public ratesMiddle: any[] = [];
  public ratesRight: any[] = [];

  ngOnInit(): void {
    this.paramsSub = this.route.queryParams.subscribe(params => {
      this.from = params['code'];
      this.getLatestRatesSub = this.currencyService.getLatestRates(this.from).subscribe(res => {
        this.fillRates(Object.entries(res.rates));
      });
    });
  }

  fillRates(entries: any[]) {
    const elementsToFill = Math.ceil(entries.length / 3);

    for (let i = 0; i < elementsToFill; i++) {
      this.ratesLeft.push(entries[i]);
    }

    for (let i = elementsToFill; i < elementsToFill * 2; i++) {
      this.ratesMiddle.push(entries[i]);
    }

    for (let i = elementsToFill * 2; i < entries.length; i++) {
      this.ratesRight.push(entries[i]);
    }
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
    this.getLatestRatesSub.unsubscribe();
  }
}
