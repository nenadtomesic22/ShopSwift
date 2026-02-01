export default function DateTime() {
  const today = new Date()

  let formattedDate = new Intl.DateTimeFormat('sr-Latn-RS', {
    weekday: 'long',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(today)

  formattedDate = formattedDate.replace(/\.\s+/g, '.')

  const formatted = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

  return <span id="date">{formatted}</span>
}
