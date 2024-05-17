export interface CurrencyConvertResponse {
    amount: number;
    base: string;
    date: string;
    rates: Rate;
}

interface Rate {
    [key: string]: number;
}