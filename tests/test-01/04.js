// let lowercaseText = text.toLowerCase();
// let uppercaseText = text.toUpperCase();
let code = "1104 Challenge";
function decryptCode(code) {
    let result = '';
    for (let i of code) {
        if (i == i.toUpperCase()) {
            result += i.toLowerCase();
        }
        else {
            result += i.toUpperCase();
        }
    }
    return result;

}
let decryptCodeText = decryptCode(code);
console.log(`Decrypted: ${decryptCodeText}`)