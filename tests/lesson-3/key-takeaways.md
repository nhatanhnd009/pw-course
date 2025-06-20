# Git
## Undo actions
### Thay đổi commit message
- Cách 1: 
    -- git commit --amend: Lệnh này dùng để thay đổi message của 1 commit, dùng sau khi dùng lệnh git commit -m"message". Khi gõ lệnh này sẽ mở ra vim để sửa
    -- Sau khi gõ lệnh sẽ mở chế độ "insert" bằng gõ phím "i". Sau đó di chuột vào message để sửa.
    -- Muốn thoát khỏi chế độ "Insert" -> gõ phím esc. Back lại chế độ Vim
    -- Muốn thoát khỏi chế độ Vim -> Gõ "wq"
- Cách 2: 
    --git commit --amend -m"message": ko cần vào giao diện Vim sửa nhanh hơn. 

### Đưa 1 file từ staging về vùng WD
- git restore --staged <file ( path file)>:Đưa file từ vòng stag về vùng WD.

### Hủy 1 commit, đưa commit từ vùng repo về WD
- git reset Head~ (số lượng commit): số lượng commit gần nhất.
- Ví dụ có 3 commit: C1,C2, C3 theo thứ tự gần nhất C3.
    --  Muốn hủy 1 commit -> git reset Head~1 -> C3 bị hủy. 
    -- Muốn hủy 2 commits -> get reset Head~2 -> C3, C2 bị hủy.

### File Git Ignore
- Bỏ qua những file mà không cần theo dõi. Khi đưa file vào file git ignore sẽ không có ở 3 vùnv WD, Stag, Repo.
-  Định dạnhg tên file luôn có dấu . bắt đầu. ví dụ : .gitignore
- Trong file sẽ liệt lê folder hoặc file, những file điợc liệt kê sẽ không đc log ra và ko còn đc git quản lí nữa.

## Branching mode
- Branch là 1 vùng làm việc mới, độc lập, ko ảnh hưởng đến main.
- Các lệnh tạo branch
    --git branch <tên branch>: Tạo 1 nhánh mới
    --git checkout <tên branch>: checkout branch đó, mở nhánh đó ra để làm việc
    --git checkout -b <tên branch>: vừa tạo vừa mở nhánh đó ra làm việc
- Tips: luôn pull main về branch của mình trc khi làm việc để tránh việc out of date hoặc bị conflic khi push code lên.

## VS UI
    - Xem thay đổi ở source control .

# Javascrip basic
## Conventions:
    - snake_case_now: ít dùng, có dấu _ ở giữa các chữ.
    - kebab-case-tên-file: dùng đặt tên file. có dấu - ở giữa các chữ.
    -camelCaseVar: viết liền, chữ đầu thường các chữ sau in hoa, dùng để đặt tên biến.
    - PascalCaseClass: viết liền, in hoa các chữ, dùng đặt tên class.
## Console log: 
    - dùng ' hoặc " thay vì cộng chuỗi. Ví dụ: 
        let name = "NA";
        console.log(' Tôi la ${name}');  
        sẽ tương ứng với console.log("Tôi là" + name + "");
## Object
- Dùng để lưu trữ / tập hợp các biến/hằng số và value của biến. 1 cặp key là bao gồm biến + value
- Khai báo: 
    let class{
        "nameClass": "A",
        "siSo": 50,
        "GVCN": "Lan",
        "ketQua": {
            "kyHoc": 1,
            "tbMonToan": 8,
            "tbMonVan": 8.5,
             "isLopXuatSac": True
            } 
        }
- Truy xuất thuộc tính:
    --console.log(class.nameClass) -> Trả ra A
    --console.log(class.ketQua.kyHoc) -> trả ra 1
    --console.log(class["ketQua"]["kyHoc"]) -> trả ra 1 
- Có thể gán lại biến trong class sang giá trị khác.
    --class.siSo: 45 -> khi chay code se lay gia tri cuoi cung la 45.
- Có thể dùng [] để khai báo thuộc tính/ biến mới
    --let bike = { 
        make: 'Yamaha', 
        model: 'YZF-R3' 
    }; 
    bike.color = “Blue”; 
    bike[“price new”] = 100; 
    console.log(bike); 
    {make: 'Yamaha', model: 'YZF-R3', color: 'Blue', ‘price new’ : 100} 
- Xóa thuộc tính của object
    let employee = { 
        name: 'Le Van C', 
        age: 30, 
        department: 'HR' 
    }; 
    delete employee.age; 
    console.log(employee); 
    Kết quả: {name: 'Le Van C', department: 'HR'} 

## Logic operator
- &&: Điều kiện 2 vế đều đúng ( và). ví dụ A && B: a và b đều phải thỏa mãn mới chạy case đó
- ||: Điều kiện chỉ cần đúng 1 trong 2 vế (hoặc). Ví dụ A||B: A hoặc B thỏa mãn thì sẽ chạy, chỉ cần 1 đk thỏa mãn
- !: Điều kiện đảo ngược giá trị:
    let a = true;
    let b = false;
    const newA = !a -> a la false
    const newB = !!b -> b vẫn là false

## Array
- Dùng để tạo mảng gồm nhiều giá trị cho 1 biến
- Khai báo
    const number = [1 , 2 , 3 , 4];
    const name = ["Lac", "Dau", "Bo", "Go"];
- Truy xuat mang:
    -- Truy xuất độ dài của mảng: console.log(number.length); -> 4
    -- Truy xuất value của giá phần tử trong mảng theo index  console.log(number.[3]); -> tra ra value 4. Index bắt dầu từ 0
    -- truy xuất với for: 
        for (let i = 0, i<number.length; i++){
            console.log(i) -> in ra 0,1,2,3 là index của mảng
        }


## Function
- là hàm, dùng để đặt tên cho 1 func để tái sử dụng nhiều lần
- Khai báo: 
    function sayHello(){
        console.log("Hello");
    }
    sayHello(); -> gọi hàm để chạy code bên trong hàm
    sayHello();
- Paramater: func có tham số. khi gọi hàm sẽ truyền giá trị vào để thực thi code hàm đó
    - function printNumber(n){
        for(let i =1, i<=n, i++){
            console.log(i);
        }
    }
        printNumber(5); -> in ra 1,2,3,4,5

- Reture value:
    funtion getMax(a,b){
        if(a >b) {
            return a;
        }
        return b;
        console.log("run"); -> ko chạy vì có return rồi
    }
    const max = getMax(5,6);
    console.log(max); -> ra 6. (uc la neu 5 >6 - > tra ra a, neu ko tra ra b)
    -- Neu co return sẽ không chạy code bên trong hàm nữa

## Pham vi biến
 - Global: var khác vớt let là dùng cho local
 ví dụ: for(var i=0; i<5; i++){
    console.log(i); // chạy ra 0,1,2,3,4
 }
    console.log("I" , i); -> in ra 5 vì chạy đến 5 k thỏa mãn for sẽ dưng và chạy lệnh dưới vì var là biến global sẽ dùng đc chung, nếu thay var bằng let thì lỗi vi i ở dưới chưa khai báo
- Hoisting: luôn khai báo biến trước khi chạy hàm/code. 
    console.log(a)
    var a  = 1; -> Underfined 
- Nên dùng let để tránh các lỗi khó tìm đc khi viết code. nếu biến global mới dùng var

## Advance condition
### If....else
- Nếu if thỏa mãn thì chạt code if, nếu ko sẽ chạy else
    --if (condition) {
    // run code khi condition = true
    } else {
    // run code khi condition = false
    }
    --if (condition1) {
    // run code khi condition1 = true
    } else if (condition2) {
    // run code khi condition2 = true
    } else {
    // run code khi tat ca condition = false
    }
### Switch....case
- Dùng kiểm tra giá trị của 1 biểu thức, thỏa mãn sẽ chạy case đó.
- Hạn chế được việc code chạy nhiều ko cần thiết, ko tốn resource, khi thỏa mãn điều kiện ở case nào sẽ break và out khỏi vòng chạy.
    -- let day = 17;
    -- switch (day){
        case 17:
            console.log("Tue");
        break;
        case 18:
            console.log("Wed");
        default: 
            console.log("Invalid day");
    }
### So sánh lỏng lẻo và chặt chẽ
 - lỏng lẻo: == và 1!= -> so sánh giá trị và kiểu dữ liệu, có nghĩa là cóthể so sánh khác type, ví dụ so sánh string và number
 - Chặt chẽ: === và !=== -> so sánh giá trị, tức ko phải cùng type mới so sánh được

## Advance loop
### For ... in
- dùng để lặp các thuộc tính của object
- Truy xuất được index trong array, dùng dấu ngoặc vuông [] thay vì dấu . vì khi dùng for với array , nó sẽ hiểu là thêm 1 property mới
- Khai báo:
    for(let <khoi tao bien> in <object>){
        //code
    } -> trong do <khởi tạo biến> là các thuộc tính (biến) trong object
 --- let product = {
    sp1: 200,
    sp2: 300,
    sp3: 115
    
    }
    for(let property in product){
        console.log(property + ":" +""+ product[property]);
    } 
    -> in ra sp1: 200,   
            sp2: 300; 
            sp3:115

### ForEach
- Dùng cho array để truy xuất được value và index trong mảng
- Khai báo:
    -- array.forEach(value , index) => {
        // code
    }
-- vi du:
    const products = ["sp1", "sp2", "sp3"];
    products.forEach(value, index) => {
        console.log(value +":" + index);
    } 
        -> in ra sp1:0
                 sp2:1
                 sp3:2
### For....of
- Dùng với mảng
- Cú pháp:  
    - for(let value of arr) {
        //code
    }
    --vi du
   const products = ["sp1", "sp2", "sp3"];
   for(let product of prodcuts){
    console.log(product);
   }  -> in ra sp1 
               sp2
               sp3
- string.length: Dùng để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index 
    --ví dụ: const str = "K9 2024"; 
            for (let i = 0; i < str.length; i++){ 
        console.log(str[i]); 
            } 
             Kết quả in ra 
                K 
                6 
                2 
                0 
                2 
                4 


### Note: 
- For... in thường dùng cho object , dùng được cho mảng nữa
- For...of và forEach: dùng cho mảng.

## Phân biệt break và continue
### continue
- bo qua vong lap, chay den vong lap tiep theo
- neu gap continue thi bo qua doan code phia duoi va chay tiep vong lap tiep theo
-vi dụ: 

 for (let i = 1; i <= 5; i++) {
    if (i % 2 === 0) {
         continue;
     }

     console.log(i);
 } -> sẽ in ra 1,3,5 vì khi ko thỏa mãn đk chia hết cho 2 sẽ bỏ qua và chạy tiếp đến đk tiếp theo cho đến hết 5

## Break
- khi gap break se thoat ra vong lap luon
- Ví dụ:

    for (let i = 1; i <= 5; i++) {
        if (i % 2 === 0) {
         break;
        }
              console.log(i);
        } -> in ra 1 thôi vì đến 2 chia hết cho 2 nên thoát khỏi đoạn code và k chạy nữa.

### Push
 - Dùng để thêm phần tử vào mảng
 - const arr = [1,2]; 
    arr.push(3); 
    console.log(arr); -> in ra 1,2,3
