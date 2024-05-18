export interface CurrencyRatesResponse {
    amount: number;
    base: string;
    date: string;
    rates: Rate;
}

export interface Rate {
    [key: string]: number;
}