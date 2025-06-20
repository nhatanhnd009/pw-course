//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì). 
console.log("Bai 1:");
function checkBMI(height, weight) {
    let bmi = weight / (height * height);
    if (height <= 0 || weight <= 0) {
        return "Invalid value";
    }
    else {
        if (bmi >= 0 && bmi < 18.5) {
            return "Thieu can";
        }
        else if (bmi >= 18.5 && bmi < 25) {
            return "Binh thuong";
        }
        else if (bmi >= 25 && bmi < 30) {
            return "Thua can";
        }
        else {
            return "Beo phi";
        }
    }
}
let result = checkBMI(1.56, 90);
console.log("BMI cua ban:" + "" + result);

//Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về nhiệt độ đã chuyển đổi. 
console.log("Bai 2:");
function convertTemp(n, type) {
    if (type == "C") {
        return ("do F = " + (n * 9 / 5) + 32);

    }
    else {
        return ("do C = " + (n - 32) * 5 / 9);
    }
}
let convertResult = convertTemp(80, "F");
console.log(convertResult);

// 3. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho. 
console.log("Bai 3:");
function inputNumbers(arr) { // khoi tao ham input 1 mang so
    let i = 0;
    for (i; i <= arr.length; i++) {
        let number = arr[i];
        let checkNumber = verifyNumber(number);
        if (checkNumber == true) {
            console.log(number + " " + "la so nguyen to");
        }
    }

};
function verifyNumber(number) { // khoi tao ham check so nguyen to
    if (number <= 1) {
        return false;
    }
    else if (number === 2) { // 2 la so nguyen to chan duy nhat
        return true;
    }
    else {
        let Itssqrt = Math.sqrt(number) //tinh can bac 2 cua number. vi du can bac 2 cua 16 la 2.828 se lay 1 va 2
        for (j = 2; j <= Itssqrt; j++) {
            if (number % j === 0) {
                return false;
            };
        }
        return true;
    }
};
inputNumbers([-10, 0, 2, 1, 3, 6, 9, 19]);

//4. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng. 
console.log("Bai 4:");
var userList = {
    name: ["Van Anh", "Lan", "Ngoc"],
    email: ["a1@gmail.com", "a2@gmail.com", "a3@gmail.com"]
};
function updateEmail(name, newEmail) {
    for (let i = 0; i < userList["name"].length; i++) {
        for (let j = 0; j < name.length; j++) {
            if (userList["name"][i] == name[j]) {
                userList["email"][i] = newEmail[j];
            }
        }
    }
}
updateEmail(["Van Anh", "Thuy Anh", "Ngoc"], ["b1@gmail.com", "b2@gmail.com", "b3@gmail.com"]);
console.log(userList);

//5. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object. Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85} 
console.log("Bai 5:");
function avgScore(studentArr) {
    let totalScore = 0;
    let avgScore = 0;
    for (let i = 0; i < studentArr.length; i++) {
        totalScore = totalScore + studentArr[i].score;
        avgScore = totalScore / studentArr.length;
    }
    console.log(avgScore);
}
avgScore([
    { "name": "Alex", score: 80 },
    { "name": "Anna", score: 100 },
    { "name": "Alice", score: 50 }
]
);

//6.Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, và trẻ em từ 6 đến 17 tuổi là 50k.
console.log("Bai 6:");
function printPrice(year) {
    let price = 0;
    if (year >= 0 && year < 5) {
        price = 0;
        console.log("Gia ve" + " " + price);

    }
    else if (year >= 5 && year <= 17) {
        price = 50000;
        console.log("Gia ve" + " " + price);

    }
    else {
        price = 100000;
        console.log("Gia ve" + " " + price);
    }
};
printPrice(90);

//7. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
console.log("Bai 7:");
function printMonth(a) {
    let month = a;
    switch (month) {
        case 1:
            console.log("Jan");
            break;
        case 2:
            console.log("Fed");
        case 3:
            console.log("Mar");
        case 4:
            console.log("Apr");
        case 5:
            console.log("May");
        case 6:
            console.log("Jun");
        case 7:
            console.log("July");
        case 8:
            console.log("Aug");
        case 9:
            console.log("Sep");
        case 10:
            console.log("Oct");
        case 11:
            console.log("Nov");
        case 12:
            console.log("Dec");
        default:
            console.log("Invalid month");
    }
}
printMonth(-10);

//8. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), lạnh (< 20 độ C) 
console.log("Bai 8:");
function weather(a) {
    let temperature = a;
    if (temperature < 20) {
        console.log("Lanh");
    }
    else if (temperature >= 20 && temperature < 30) {
        console.log("Mat");
    }
    else {
        console.log("Nong");
    }

};
weather(-10);
