//Using Intl formatter with undefined locale so it automatically determines how to format based on user location

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'EUR',
  style: 'currency',
})

//Formatting the currency
export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
