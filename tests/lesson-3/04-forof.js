//1. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. Ví dụ với chuỗi ”Playwright”
console.log("Bai 1:");

function revertString(string) {
    let arr = [];
    for (let i = string.length - 1; i >= 0; i--) {
        arr.push(string[i]);

    }
    console.log(arr);
}
revertString("Playwright");

//2. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5
console.log("Bai 2:");
function filterValue(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = true; //->neu ko trung se la true
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            newArr.push(arr[i]);

        }
    }
    console.log(newArr);
};
filterValue([1, 2, 3, 4, 5, 1, 6, 3, 8, 2, 9,9]);