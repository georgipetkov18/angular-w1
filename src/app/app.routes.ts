import { Routes } from '@angular/router';
import { CurrenciesPageComponent } from './pages/currencies-page/currencies-page.component';
import { ConverterPageComponent } from './pages/converter-page/converter-page.component';

export const routes: Routes = [
    {path: '', component: CurrenciesPageComponent},
    {path: 'converter', component: ConverterPageComponent},
];
