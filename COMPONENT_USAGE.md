# Hướng dẫn Sử dụng Header và Footer Chia sẻ

## Cấu trúc file

- **header.html** - Chứa topbar và navigation header
- **footer.html** - Chứa toàn bộ footer content
- **components.js** - Script để load header và footer động

## Cách sử dụng

### Trong file HTML của bạn:

1. **Thêm placeholder cho header ở đầu body:**
   ```html
   <body>
       <!-- Header Component Placeholder -->
       <div id="header-placeholder"></div>
       
       <!-- Nội dung chính của trang -->
       <main class="main-content">
           ...
       </main>
       
       <!-- Footer Component Placeholder -->
       <div id="footer-placeholder"></div>
       
       <!-- Load Components -->
       <script src="components.js"></script>
   </body>
   ```

2. **Đảm bảo các stylesheet được load trong `<head>`:**
   ```html
   <head>
       ...
       <link rel="stylesheet" href="styles.css">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
   </head>
   ```

## Các file đã được cập nhật:

✅ index.html

## Các file cần được cập nhật:

Để tận dụng header và footer chung, hãy cập nhật các file sau:
- ChiTietBanh.html
- custom-cake.html
- DichVu.html
- GioHang.html
- DNDK.html
- lienhe.html
- products.html
- style-profile.html
- ThanhToan.html
- thongtintaikhoan.html

## Lợi ích

✅ Tránh lặp lại code
✅ Dễ bảo trì - chỉ cần sửa header/footer một chỗ
✅ Tính nhất quán giữa các trang
✅ Giảm kích thước file HTML

## Lưu ý

- Script `components.js` sử dụng `fetch()` để load HTML, nên cần chạy trên server (không hoạt động với `file://` protocol)
- Đảm bảo các đường dẫn link trong header/footer còn chính xác trên các trang khác
