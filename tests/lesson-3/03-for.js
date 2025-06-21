//1. Tính tổng từ 1 đến 100.
console.log("Bai 1:");
function calculator() {
    let sum = 0;
    //let i = 1;
    for (let i = 0; i <= 100; i++) {
        sum = sum + i;
    }
    return sum;

}
calculator();
console.log("Sum" + " " + sum);

//2. In bảng cửu chương từ 2 đến 9. 
console.log("Bai 2:");
function printBangCuuChuong() {
    for (let i = 2; i <= 9; i++) {
        console.log("\n Bang cuu chuong" + " " + i);
        for (let j = 1; j <= 10; j++) {
            console.log(i + "x" + j + "=" + (i * j));
        }
    }
}
printBangCuuChuong();


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
//{“month”: 2, “total”: 100} 
console.log("Bai 4:");
function calTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]["total"];
    }
    console.log("Doanh thu 12 thang la:" + " " + total);
}
calTotal([
    { month: 1, total: 10 },
    { month: 2, total: 150 },
    { month: 3, total: 200 },
    { month: 4, total: 20 },
    { month: 5, total: 100 },
    { month: 6, total: 130 },
    { month: 7, total: 160 },
    { month: 8, total: 170 },
    { month: 9, total: 190 },
    { month: 10, total: 30 },
    { month: 11, total: 250 },
    { month: 12, total: 500 }
]);