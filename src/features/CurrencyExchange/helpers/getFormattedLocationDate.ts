export function getFormattedLocationDate() {
    const location = Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone.split('/')[1];

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateWithDots = `${day}.${month}.${year}`;

    const locationDate = `${location} ${dateWithDots}`;

    return locationDate;
}
