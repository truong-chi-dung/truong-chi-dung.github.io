export function strTruncate(str, num) {
    try {
        // return full str length if str length smaller/equal than num.
        if (str.length <= num) {
            return str;
        }

        // return truncated str
        return str.slice(0, num) + "...";
    } catch (error) {
        console.error(`Failed to truncate string: ${error}`)
    }    
}
