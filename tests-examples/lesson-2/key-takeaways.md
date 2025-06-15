# Git
## Các câu lệnh khi dùng git
Sau khi có các thay đổi gì từ trong code muốn commit và push lên gitHub, đùng các câu lệnh sau để commit:
- git init: khởi tạo git đưa các file vào git quản lí.
- git add path_đến_file_cần_commit -> đùng để commit riêng lẻ của file này thôi.
- git add . -> dùng để commit tất cả các file thay đổi từ local lên vùng staging area.
- git commit -"init project" -> chỉ dùng một lần duy nhất khi khởi tạo project, để đảm bảo git sẽ lưu trữ project từ nay về sau.
- git commit -m "message" -> dùng để đẩy code lên gitHub. Trong đó message cần tuân thủ theo code convention.
- git status -> để check status của các file đã được commit trên staging. Màu xanh  là file đã đc commit trên staging, màu đỏ là file chưa đc commit, vẫn ở trên local. Những file đã được push lên gitHub reporistory thì không hiện khi chạy lện git status.
- git log -> để check tất cả lịch sử nhưng lần commit lên gitHub.

# Javascrip basic
## Học code với
- console log
- khai báo biến
- các phép toán tử đơn giản, phép so sánh
- Câu điều kiện if đơn giản
- Vòng lặp for
## Commit convention: dùng trong các dự án để thống nhất rule
Message convention: "type - short description"
- Các loại type:
- -  chore: là message sửa nhỏ lẻ như sai chính tả, xóa file không dùng tới
- - feat: là message khi thêm tính nắng mới
- - Fix: là message khi fix bug