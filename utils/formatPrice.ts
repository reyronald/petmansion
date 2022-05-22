export function formatPrice(number: number) {
  const formatted = new Intl.NumberFormat('es-DO', {
    style: 'currency',
    currency: 'DOP',
  }).format(number)
  return formatted
}
