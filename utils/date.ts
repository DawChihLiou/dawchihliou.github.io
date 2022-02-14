export function format(iso: string) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(iso).toLocaleDateString('en-US', options)
}
