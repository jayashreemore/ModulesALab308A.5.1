let count = 0;
export function increment() {
    return ++count;
}
function decrement() {
    return --count;
}
export function hello() {
    return "Hello, world!";
}
export default function () {
    return count;
}
export const meaning = 42;
export let nocount = -1;
export { decrement };