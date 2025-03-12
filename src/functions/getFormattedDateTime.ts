const getFormattedDateTime = (): string => {
    const today = new Date();

    const day = today.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[today.getMonth()]; // Get short month name
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, "0");
    const minutes = String(today.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} - ${hours}:${minutes}`;
};

export default getFormattedDateTime;