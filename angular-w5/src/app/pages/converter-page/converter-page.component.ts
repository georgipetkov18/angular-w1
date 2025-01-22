import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CurrencyService } from '../../currency.service';
import { Currency } from '../../models/currency';
import { Subscription } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './converter-page.component.html',
  styleUrl: './converter-page.component.css'
})
export class ConverterPageComponent implements OnInit, OnDestroy {
  private currencyService: CurrencyService = inject(CurrencyService);
  private currencySub!: Subscription;

  public currencies: Currency[] = [];
  public from: string = '';
  public to: string = '';
  public amount: number = 1;
  public convertedResult: number | null = null;
  public errorMsg: string | null = null;

  ngOnInit(): void {
    this.currencySub = this.currencyService.getCurrencies().subscribe(currencies => {
      this.currencies = currencies;
      this.from = `${currencies[0].code} - ${currencies[0].name}`;
      this.to = `${currencies[0].code} - ${currencies[0].name}`;
    });
  }

  onSubmit() {
    this.errorMsg = null;
    const fromCode = this.from.split(' - ')[0];
    const toCode = this.to.split(' - ')[0];

    if (fromCode === toCode) {
      this.errorMsg = 'Currencies must be different';
      this.convertedResult = null;
      return;
    }

    if (this.amount < 1) {
      this.errorMsg = 'The amount must be at least 1';
      this.convertedResult = null;
      return;
    }
    this.currencyService.convert(this.amount, fromCode, toCode).subscribe(res => {
      this.convertedResult = res.rates[toCode];
    });
  }

  ngOnDestroy(): void {
    this.currencySub.unsubscribe();
  }
}
