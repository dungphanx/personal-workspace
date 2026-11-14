[English](README.md) · **Tiếng Việt**

# PrintLab

Nền tảng cho người dùng máy in 3D: thư viện mô hình tham số, xem trước và tùy chỉnh 3D, tải STL, sinh G-code, in qua USB hoặc mạng, tài khoản, chia sẻ, bình luận, gắn sao và danh mục mô hình phổ biến. Ghi nhận ngày 2026-11-14.

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
| **Môi trường public** (một node cloud nhỏ, Kubernetes, HTTPS tự động, deploy từ image đã release) | **Đang làm** |

## Việc còn mở

- Hoàn tất môi trường public; nó mở khóa tích hợp MyMiniFactory và việc thử in USB trên HTTPS thật.
- Tag release cho các thành phần chưa có.
- Sau này: xác minh email, đăng nhập Google trên môi trường public, phát hành app mobile, domain riêng, giám sát và sao lưu.

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
