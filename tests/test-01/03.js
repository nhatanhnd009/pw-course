//let hexadecimalNumber = decimalNumber.toString(16);
let time = 120;
function convertTimeToHex(time) {
    return time.toString(16);
}
let hexadecimalTime = convertTimeToHex(time);
console.log(`Thoi gian tren hanh tinh la: ${hexadecimalTime}s`);