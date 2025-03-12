const getFormattedCurrentDay = (): string => {
    const today = new Date();
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    }).format(today);
};

export default getFormattedCurrentDay;