[English](README.md) · **Tiếng Việt**

# PrintLab

Nền tảng cho người dùng máy in 3D: thư viện mô hình tham số, xem trước và tùy chỉnh 3D, tải STL, sinh G-code, in qua USB hoặc mạng, tài khoản, chia sẻ, bình luận, gắn sao và danh mục mô hình phổ biến. Ghi nhận ngày 2026-11-26.

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
| Lịch sử in và chi phí mỗi bản in | Released 2026-11-22 (hàng đợi in làm sau) |
| Hướng dẫn ngay trong sản phẩm và trình thêm máy in | Released 2026-11-22 |
| Remix và bài "Tôi đã in"; theo dõi cuộn nhựa | Released 2026-11-22 |
| Danh mục nạp từ dữ liệu Model Crawler, kèm giấy phép | Released 2026-11-25 (website v0.3.1, API v0.2.0) |
| **Môi trường public** (một node cloud nhỏ, Kubernetes, HTTPS tự động, deploy từ image đã release) | **Đang làm** |

## Việc còn mở

- Hoàn tất môi trường public; nó mở khóa tích hợp MyMiniFactory và việc thử in USB trên HTTPS thật.
- Tag release cho dịch vụ danh tính và ứng dụng mobile (website v0.3.1, API v0.2.0, deploy v0.1.1).
- Còn mở từ các story mới: người dùng đăng mẫu tham số riêng, hàng đợi in, và quyết định về máy in firmware đóng (chờ máy in thử).
- Sau này: xác minh email, đăng nhập Google trên môi trường public, phát hành app mobile, domain riêng, giám sát và sao lưu.

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
