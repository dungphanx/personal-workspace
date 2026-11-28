[English](README.md) · **Tiếng Việt**

# PrintLab

Nền tảng cho người dùng máy in 3D: thư viện mô hình tham số, xem trước và tùy chỉnh 3D, tải STL, sinh G-code, in qua USB hoặc mạng, tài khoản, chia sẻ, bình luận, gắn sao và danh mục mô hình phổ biến. Ghi nhận ngày 2026-11-28.

## Kiến trúc

```
web / app ─► website (Next.js) ─┬─ /backend ─► API (Go, GraphQL + REST) ─┐
                                 └─ /auth    ─► dịch vụ danh tính (Go) ───┴─► MongoDB
```

| Thành phần | Vai trò | Công nghệ |
| --- | --- | --- |
| API | GraphQL cho tính năng app, REST cho file STL/G-code, crawler mô hình | Go |
| Dịch vụ danh tính | Đăng nhập dùng lại được: email/mật khẩu, Google, ví Ethereum; JWT ngắn hạn, refresh token xoay vòng, JWKS công khai | Go |
| Website | Thư viện, studio 3D, trang mô hình, máy in, chia sẻ, yêu thích; tiếng Việt + Anh, sáng/tối | Next.js, React, three.js |
| App mobile | Thư viện, yêu thích, máy in mạng, tài khoản | Flutter |
| Deploy | Docker Compose, manifest Kubernetes, Terraform | |

Dịch vụ danh tính không gắn với sản phẩm nào và được [Evergrove](../evergrove/README.vi.md) dùng lại.

## Tính năng và trạng thái

| Tính năng | Trạng thái |
| --- | --- |
| Mẫu tham số cắt ra G-code ở server (bình xoắn, chậu có gân, chao đèn gợn sóng); năm mẫu khác sinh ở trình duyệt | Xong |
| Lưu thiết kế; tải lên/tải về STL và G-code | Xong |
| Máy in mạng (OctoPrint, Klipper/Moonraker): trạng thái, gửi file, in | Xong |
| In USB từ trình duyệt (Web Serial), có máy in giả lập | Xong (chỉ web) |
| Chia sẻ mô hình kèm giấy phép, bình luận, gắn sao, yêu thích | Xong |
| Danh mục mô hình phổ biến từ Thingiverse và MyMiniFactory | Đã làm; MyMiniFactory cần OAuth app với địa chỉ HTTPS công khai |
| Đăng nhập email, Google, ví Ethereum | Xong (mobile chưa có ví) |
| CI: kiểm tra, cổng coverage, build image khi có tag release | Xong |
| Quy trình giao hàng (spec → PR → AI review → merge → tag release) | Released 2026-11-13 |
| Trau chuốt UX/UI website | Released 2026-11-15 (website v0.1.0) |
| Hướng dẫn cho người mới có máy in 3D | Released 2026-11-21 |
| Xuất mô hình đã tùy chỉnh ra 3MF để mở trong slicer riêng | Released 2026-11-21 (website v0.2.0) |
| Hồ sơ in đã thử theo máy và loại nhựa; tham số studio phong phú hơn | Released 2026-11-22 (website v0.3.0, API v0.1.0) |
| Lịch sử in và chi phí mỗi bản in | Released 2026-11-22 (bỏ hàng đợi in ngày 2026-11-28) |
| Hướng dẫn ngay trong sản phẩm và trình thêm máy in | Released 2026-11-22 |
| Remix và bài "Tôi đã in"; theo dõi cuộn nhựa | Released 2026-11-22 |
| Danh mục nạp từ dữ liệu Model Crawler, kèm giấy phép | Released 2026-11-25 (website v0.3.1, API v0.2.0) |
| Public trên hạ tầng đang có, kèm kiểm duyệt bài bị báo cáo | Chạy từ 2026-11-26 (còn mở giám sát và sao lưu) |
| Trang mô hình trên tìm kiếm và ảnh xem trước khi chia sẻ; báo về điện thoại khi bản in xong hoặc lỗi; hỗ trợ khi bản in lỗi | Released 2026-11-27 và 2026-11-28 |
| **Môi trường public** (một node cloud nhỏ, Kubernetes, HTTPS tự động, deploy từ image đã release) | Sau này, khi đã có người dùng |

## Việc còn mở

Từ 2026-11-28 PrintLab tập trung vào nội dung (mẫu, hướng dẫn, kiến thức, bài viết cộng đồng, tìm kiếm) thay vì điều khiển máy in, vì app của các hãng máy in đã làm việc in rất tốt. Tính năng máy in đã ra vẫn giữ và được sửa lỗi, nhưng không làm thêm.

- Bây giờ: kho hướng dẫn từng bước (US-75), thương hiệu thống nhất bắt đầu từ favicon (TASK-77), tìm kiếm cho bài hướng dẫn và bộ sưu tập (US-76), xác nhận email trước khi viết bài cộng đồng (US-41).
- Tiếp theo: bộ sưu tập mẫu (US-78), hướng dẫn vật liệu (US-79), nhật ký in của cộng đồng (US-80), trang mẫu nhiều thông tin hơn (US-81), mẫu từ MyMiniFactory (US-4); giám sát và sao lưu (TASK-42).
- Sau này: email tóm tắt hằng tháng (US-82), thống kê nội dung (US-83), môi trường cloud. Hoãn: người dùng đăng mẫu tham số (US-33), app mobile trên kho ứng dụng (US-43).
- Đã đóng: hàng đợi in (US-35) và in thẳng tới máy firmware đóng (US-30).

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
