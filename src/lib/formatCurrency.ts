export function formatCurrency(amount: number | null): string {
  if (amount === null || amount === undefined) {
    return 'Ask for Price';
  }
  return `PKR ${amount.toLocaleString()}`;
}
