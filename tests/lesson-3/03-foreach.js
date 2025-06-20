//1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra 
console.log("Bai 1:");
function printArr(arr) {
    let result = 0;
    arr.forEach((value) => result = (result + value + " "));
    console.log(result)
}
printArr([1, 3, 5, 7, 9, 10]);

//2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3 
console.log("Bai 2:");
function calculator(arr) {
    let sum = 0;
    let maxNumber = arr[0];
    let minNumber = arr[0];
    arr.forEach((value) => sum = sum + value);
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > maxNumber) {
            maxNumber = arr[i];

        };
        if (arr[i] < minNumber) {
            minNumber = arr[i];

        };
    };
    console.log(sum + " " + maxNumber + " " + minNumber);

}
calculator([1, 4, 5, 6]);

//3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6] 
console.log("Bai 3:");
function createArr(arr) {
    let newArr = [];
    arr.forEach((value) => newArr.push(value * 2));
    console.log(newArr);
};
createArr([1, 4, 5]);