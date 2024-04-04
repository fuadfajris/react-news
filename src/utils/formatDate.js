export const formatDated = (date) => {
    const event = new Date(date)

    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return event.toLocaleDateString('en-EN', options)
}