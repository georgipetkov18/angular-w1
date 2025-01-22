import { Routes } from '@angular/router';
import { CurrenciesPageComponent } from './pages/currencies-page/currencies-page.component';
import { ConverterPageComponent } from './pages/converter-page/converter-page.component';
import { CurrencyRatesPageComponent } from './pages/currency-rates-page/currency-rates-page.component';

export const routes: Routes = [
    {path: '', component: CurrenciesPageComponent},
    {path: 'converter', component: ConverterPageComponent},
    {path: 'rates', component: CurrencyRatesPageComponent},
];
