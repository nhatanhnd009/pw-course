//1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng.
console.log("Bai 1:");
function printNameValue(students) {
    for (let property of students) { // lấy ra các cặp hoc sinh
        for (let key in property) {
            console.log(key + ":" + " " + property[key]); //lấy name (key) trong từng cặp vừa lấy ở trên
        }
    }
};
printNameValue([
    { name: "Alex", age: 10 },
    { name: "Anna", age: 11 },
    { name: "Alice", age: 12 }
]);

//2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng.
console.log("Bai 2:");
function sumValue(student1) {
    let total = 0;
    for (let key in student1) {
        if (typeof student1[key] === "number") {
            total = total + student1[key];
        }
    }
    console.log("Sum Value:" + " " + total);
}

sumValue({ name: "Alex", age: 10, salary: 20 });

//3.Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng.
console.log("Bai 3:");
function arrProperty(obj2) {
    let arr = [];
    for (key in obj2) {
        arr.push(key);
    }
    console.log(arr);
}
arrProperty({ name: "Alex", age: 10, salary: 20 });