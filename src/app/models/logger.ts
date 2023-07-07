export function myLogger(messages: string[], styles: string[]) {
    messages = messages.map(msg => "%c" + msg)
    console.log(messages.join(" "), ...styles)
}