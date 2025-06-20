//1. Tính tổng từ 1 đến 100.
console.log("Bai 1:");
function calculator() {
    let sum = 0;
    let i = 1;
    for (i; i <= 100; i++) {
        sum = sum + i;
    }
    console.log("Sum" + " " + sum);


}
calculator();

//2. In bảng cửu chương từ 2 đến 9. 
console.log("Bai 2:");



//3. Tạo một mảng chứa các số lẻ từ 1 đến 99
console.log("Bai 3:");
function printOddNumber() {
    let oddNumber = [];
    for (let i = 1; i <= 99; i = i + 2) {
        oddNumber.push(i);
    }
    console.log(oddNumber);

}
printOddNumber();

//4. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: 
console.log("Bai 4:");