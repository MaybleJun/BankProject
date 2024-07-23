export function convertFormCurrency(
    amount: number,
    language: string = 'ru-RU',
    currencyCode: string = 'RUB',
    minFractionDigits: number = 0,
): string {
    return amount.toLocaleString(language, {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: minFractionDigits,
    });
}
