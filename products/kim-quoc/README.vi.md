[English](README.md) · **Tiếng Việt**

# Kim Quốc

Website và trang quản lý cho Kim Quốc, cửa hàng lắp đặt và sửa chữa cửa cuốn. Ghi nhận ngày 2026-11-26.

- **Công nghệ:** một server Node không dùng thư viện ngoài, SQLite có sẵn; chạy bằng Docker.
- **Trạng thái:** đang chạy thật.

## Tính năng

| Phần | Tính năng |
| --- | --- |
| Trang khách | Dịch vụ, bảng giá, hỏi đáp, hotline, link Zalo và Facebook, form đặt lịch / nhận báo giá, metadata cho công cụ tìm kiếm và xem trước trên mạng xã hội |
| Quản lý | Đơn hàng (trạng thái, thợ, lịch hẹn, báo giá), lịch theo ngày, thợ, bảo hành, kho motor và phụ kiện, bảng giá, cài đặt cửa hàng; dùng tốt trên điện thoại |
| Đăng nhập | Một mã truy cập, hoặc mã dùng một lần sinh khi khởi động; phiên ký số 30 ngày; khóa tạm khi sai nhiều lần |

## Đã giao

Quy trình làm việc, hai hotline + Facebook, đổi tên thành Kim Quốc, đăng nhập bằng mã một lần, dọn code, đăng nhập bằng mã, sửa hướng dẫn, README, SEO (sitemap, robots, thẻ chia sẻ, dữ liệu có cấu trúc, cache), SEO nâng cao (địa chỉ site chuẩn, chặn index trang riêng, trang 404 đúng chuẩn, chuyển hướng, danh mục dịch vụ trong dữ liệu có cấu trúc, nén gzip), truyền địa chỉ site vào bản chạy thật, branch coverage khoảng 95%, script dựng clip quảng bá, header bảo mật (chặn nhúng vào site khác, HSTS), sao lưu DB tự động, giới hạn số lần gửi form đặt lịch, trang riêng cho từng dịch vụ kèm dữ liệu hỏi đáp, chọn sẵn dịch vụ trong form khi đi từ trang dịch vụ, kiểm tra sức khoẻ cho giám sát bên ngoài và hướng dẫn khôi phục khi site sập.

## Việc còn mở

- Khóa nhánh main của repo code.
- Gửi sitemap lên Google Search Console; làm mới preview đã cache trên mạng xã hội.
- Tạo monitor bên ngoài báo cho chủ shop khi site sập (sau lần deploy tới).
- Thử khôi phục bản sao lưu DB lần đầu (2026-12-15).

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
