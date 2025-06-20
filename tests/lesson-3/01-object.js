//1. Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một object với 2 thuộc tính kiểu number: math và english 
console.log("Bai 1");
let student = {
    "name": "Tran Van Anh",
    "grades": {
        "math": 8,
        "english": 10

    }
};
console.log("math:" + "" + student.grades["math"]);

//Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for.
// ..in để in ra tên và giá của mỗi sản phẩm.
console.log("Bai 2");
let product = {
    sp1: 200,
    sp2: 300,
    sp3: 115

}
for (let property in product) {
    console.log(property + ":" + "" + product[property]);
}

// Tạo một object bike và sau đó thêm thuộc tính color vào object đó 4. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 
console.log("Bai 3");
let bike = {
    mode: "VN",
    price: 100000,
    year: 2025
}
bike["color"] = "yellow";
console.log(bike);

//4. Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 
console.log("Bai 4");
let employee = {
    name: "Tran Van A",
    age: 31
}
delete employee["age"];
console.log(employee);

//Bai 5
console.log("Bai 5");
let school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Dao", "Huong", "Giang"]
}
console.log(school["classA"]);
console.log(school["classB"]);