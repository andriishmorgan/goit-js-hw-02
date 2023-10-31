function formatMessage(message, maxLength) {
    if (message.lenght <= maxLength) {
    return message
    } else {
        const newMessage = message.slice(0, maxLength) + '...';
        return newMessage;
}
}
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));