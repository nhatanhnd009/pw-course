# Dom
- Định nghĩa: : Dùng để truy xuất và thao tác trên mô hinh HTML bằng 1 số ngôn ngữ như JS, PHP. Để mở thì F12
- Cấu trúc của Dom
    -- thẻ cao nhất: html
    -- Phân nhánh xuống 
        --Head: Dưới head có 1 số thẻ như link, style, meta,..
        -- Body: có các thẻ như form, div... sẽ tương tác nhiều hơn.
- Cấu trúc của 1 element:
    --  1 cấu trúc thẻ đầy đủ: <label for="username" id="preceding">Username:</label>
    -- thẻ mở (<label for="username" id="preceding">) text/nội dung (Username) thẻ đóng </label>. Trong thẻ mở sẽ chứa thuộc tính (id) và giá trị của thuộc tính(preceding)
    -- Thẻ tự đóng: sẽ khác cấu trúc bt, thường cho những phần tử ko có nội dung hoặc ko có phần tử khác. Ví dụ như thẻ image, thẻ br. <img src="image.jgp alt="Image des"/>
- Các thẻ HTML thường gặp:
    -- Thẻ <div>: dùng để chia các khối
    -- Thẻ <h1>-> <h6> là thẻ heading dfung để tạo các header phân cấp
    -- Thẻ <form> dùng để chứa các trang thông tin
    -- Thẻ <input>: text, email, radio, checkbox, color, range: dùng để input theo type của nó
    -- Thẻ textare: hiển thị ô input dạng to
    -- Thẻ radio button: Tạo nút để chọn 1
    -- Thẻ checkbox: tạo nút thả xuống để chọn
    -- Thẻ table: hiển thị bảng dữ liệu
        -- Thẻ thead = table heading
        -- thbody = table body
            - tr: table row
                - td: table data
    -- Thẻ date picker: type là date      
    -- Thẻ slider: Range
    -- Thẻ iframe: nhúng 1 trang web khác vào trang web hiện tại
- Relation trong DOM
    -- self: node hiện tại
    -- Parent: nằm trên node hiện tại
    -- Child: node nằm dưới node hiện tại
    -- Ancsetor: các node tổ tiên node hiện tại
    -- Descendant: Hâu duệ node hiện tại
    -- Sibling: anh em cùng cấp với note hiện tại. có 2 loại trước và sau( cùng cha)
    -- Following: tất các node bên tay phải của node hiện tại. Sẽ ko lấy các node con của node hiện tại
    -- Preceding: ngược lại vs following , gồm tấtc cả các node phía bên trên trái. Trừ các node tổ tiên của node hiện tại.
    -- Following-sibling: anh em phía sau (bên phải), cùng cấp với node hiện tại.
    -- Preceding-sibling: anh em phía sau (bên trái), cùng cấp vs node hiện tại.
    
# Selector
- Là chọn phần tử (element) trên trang 
## Xpath selector: 
- Định nghĩa: là đường dẫn trong XML. Có 2 loại:
    -- Xpath tuyệt đối: Đi dọc cây DOM, và dựa trên cấu trúc cây DOM để dẫn đến element. bắt đầu bởi 1 dấu /. 
        --- Ví dụ: /html/body/div[6]/div[3]/div/div[2]/div[1]/div[1]/div/div
    -- Xpath tương đối: Ko cần bắt đầu bới thê html, mà lấy dựa trên thuộc tính của phần tử. Bắt dầu bằng 2 dấu //ten thẻ[@thuoc tinh = gia tri]
        --- Ví dụ: //div[@id = "ancestor"]
- Xpath advance methods:
    -- wildcard: * là tượng trưng cho tất cả. 
        Ví du: //*[@id = ancestor]
    -- chứa thuộc tính: chứa thuộc tính
        Ví dụ: //*[@checked] 
    -- and  và or: điều kiện thỏa mãn
        Ví dụ: //*[@id = 'parent' or @class = 'form 'group]       
    -- inerText: text() là text nằm giữa thẻ đóng và thẻ mở
        - Ví dụ: //h1[text() = 'Text here']
    -- normalize-space(): dùng để loại bỏ khoảng trắng.
        Ví dụ: //h1[normalize-space() = "Trim space here"]
    -- contain: chứa text hoặc id...
       Ví dụ: //h1[contain(text, 'user')] hoặc có thể là //h1[contain(@id , class)]
    -- starts-with(): giống contain nhưng là bắt đầu
        vd: //h1[starts-with(@id, cl)], //h1[starts-with(text(), 'user')]
    -- not: ko lấy phần đó\
        vd //h1[not (@id = 'self')]    
- Xpath Axes: dùng dựa trên các môi quan hệ của element.
    -- cú pháp: //tag/relationship::tagname[@alt = 'value'] . note: tag name là tên thẻ
    -- parent
    -- child
    -- ancestor
    -- descentdant
    -- following
    -- precending
    -- following -  sbiling
    -- preceding - sibiling
    -- ví dụ: //div[@id = "child"]/child::input -> input là con của node hiện tại.

# Playwright basic syntax
## test
- Tạo file có đuôi .ts 
- Là đơn vị cơ bản để khai báo 1 test (cũng như testcase)
- Cú pháp:  
    `import {test} from 'playwright/test';` //import test 
    `test('ten testcase', async ({page}) => {//code here });` => khai bao 1 test case. page là fixture
    -- Với test UI sẽ call back fixture page
- Testcase name ko đc trùng nhau    
## step
- Là để khai bá0 những hành động/ step trong test case
- Nên map 1-1 với test case để dễ maintance hơn
- Cú pháp: luôn cần có await để chạy
    `await test.step("Step 1", async ()) => {},`
    `await test.step("Step 2", async ()) => {},`
- Note: Fixture page chỉ đc truyền vào test thôi ko đc truyền vào test step.

## Basic action
### Navigate
- Mở ra/ đi đến trang nào đó
- cú pháp: 
    await page.goto('https://material.playwrightvn.com/02-xpath-product-page.html');
### click
- Là thao tác click vào 1 phần tử. Cần phải lấy xpath trc 
- cú pháp: 
    -- Single click
    `await page.locator("//button").click();`
    --Double click
    `await page.locator("//button").dblclick();`
    -- click nhiều lần:
    `await page.locator("//button").click({clickcount: 4});`    
    --Click chuột phải
    `page.locator("//button").click({button: 'right'})`
    -- Click chuột kèm bấm phím khác
    `page.locator("").click({modifiers: ['Shift'],})` -> mô phỏng click chuột kèm bấm phím khác
- Cách khai báo locator
    -- page.locator(xpath)
    -- page.click(xpath)
### Input
- Hành động nhập content vào ô chữ
    -- Fill: Paste content vào 1 ô
        `page.locator("//input").fill('Playwirght VN');`
    -- pressSequentially: Gõ từng chữ vào ô input
        `page.locator("input").pressSequentially('Playwright);`   
### Radio / checkbox
- Hành động check/ chon giá trị
- Lấy giá trị hiện tai là có chek hay ko:
    `const isCheck = page.locator("//input").isChecked();`
- Check/uncheck: uncheck chỉ dùng cho checkbox, check sẽ dùng cho cả 2
        `page.locator("//input").check();`
        `page.locator("//input").setCtheck(false);` -> Ko set false cho radio
### Select option
- Dùng để select option như trong combo box...
- Lấy xpath của option
    `await page.locator("//select").selectOption("blue");`
### Set input file
- Dùng cho hành động upload file
- Khi dùng cho máy local truyền path từ máy local, nhưng khi dùng cho thì phải đẩy file vào git r dùng path ở git
- cú pháp: `await page.locator("//input").setInputFiles("path_file");`
### Bouding box & position
- Lấy tọa độ dựa vào phần tử trên trang.
- B1: Lấy tọa độ, kích thước của element
    - Width là chiều ngang : x
    - Height là chiều dọc: y
      `const box = await page.locator("#starRating").boundingBox();` // Tra ra x, y là tọa độ và kích thước h&w của element.
- B2: Tính toán tọa độ chính xác cho position
    x = starRatingBounding.width / 2;
    y = starRatingBounding.height / 2;       
    await page.locator("#starRating").click({
        position: {
        x: x,
        y: y
        }
        })
- Note: lưu ý cho điều kiện để phép chia ko lỗi.        

### Hover:
- Dùng để hover vào 1 phần tử   
    `await page.locator("<xpath here>").hover(); `
### text()
- Dùng để tìm phần tử có giá trị tương ứng
- VdL Với DOM sau: <div @class=”playwright”>This is a text</div> 
    -> Thì để chọn phần tử này, ta dùng cú pháp như sau: 
    `//div[text()=’This is a text’] `

