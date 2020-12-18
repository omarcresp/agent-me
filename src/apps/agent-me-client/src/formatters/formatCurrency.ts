export function formatCurrency(number: number) {
  return new Intl.NumberFormat().format(number)
}
