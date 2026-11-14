[English](README.md) · **Tiếng Việt**

# Kim Quốc

Website và trang quản lý cho Kim Quốc, cửa hàng lắp đặt và sửa chữa cửa cuốn. Ghi nhận ngày 2026-11-14.

- **Công nghệ:** một server Node không dùng thư viện ngoài, SQLite có sẵn; chạy bằng Docker.
- **Trạng thái:** đang chạy thật.

## Tính năng

| Phần | Tính năng |
| --- | --- |
| Trang khách | Dịch vụ, bảng giá, hỏi đáp, hotline, link Zalo và Facebook, form đặt lịch / nhận báo giá, metadata cho công cụ tìm kiếm và xem trước trên mạng xã hội |
| Quản lý | Đơn hàng (trạng thái, thợ, lịch hẹn, báo giá), lịch theo ngày, thợ, bảo hành, kho motor và phụ kiện, bảng giá, cài đặt cửa hàng; dùng tốt trên điện thoại |
| Đăng nhập | Một mã truy cập, hoặc mã dùng một lần sinh khi khởi động; phiên ký số 30 ngày; khóa tạm khi sai nhiều lần |

## Đã giao

Quy trình làm việc, hai hotline + Facebook, đổi tên thành Kim Quốc, đăng nhập bằng mã một lần, dọn code, đăng nhập bằng mã, sửa hướng dẫn, README, SEO (sitemap, robots, thẻ chia sẻ, dữ liệu có cấu trúc, cache).

## Việc còn mở

- Merge phần nâng coverage test (branch coverage từ 73% lên 95%).
- Khóa nhánh main của repo code.
- Commit clip quảng bá dọc và cập nhật ghi chú.
- Gửi sitemap lên Google Search Console; làm mới preview đã cache trên mạng xã hội.
- Build lại bản chạy thật sau khi merge.
