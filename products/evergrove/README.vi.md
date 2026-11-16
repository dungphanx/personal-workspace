[English](README.md) · **Tiếng Việt**

# Evergrove

Quản lý nghĩa trang cho người dân, ban quản lý nghĩa trang và chủ nền tảng: tìm mộ trên bản đồ hoặc 3D, xem huyệt trống và giá tham khảo, gửi yêu cầu giữ chỗ, quản lý sơ đồ nghĩa trang. Ghi nhận ngày 2026-11-16.

## Một sản phẩm, hai codebase

| Codebase | Là gì | Trạng thái |
| --- | --- | --- |
| **Bản thử nghiệm** (Node + PostgreSQL, Kubernetes) | Nền tảng nhiều nghĩa trang chạy được, đăng nhập bằng dịch vụ danh tính của [PrintLab](../printlab/README.vi.md) | Đủ tính năng ở mức thử nghiệm, đã hoàn thiện sau rà soát ngày 2026-11-15 (kiểm tra quyền, kiểm tra dữ liệu nhập, an toàn dữ liệu, sửa khoá); chạy trên máy cá nhân |
| **Nền tảng** (Go + PostgreSQL + Redis + S3) | Nền tảng dự kiến cho bản chính, có hợp đồng OpenAPI và cổng coverage 100% | Mới có khung backend; web và mobile chưa bắt đầu |

## Người dùng và tính năng (bản thử nghiệm)

- **Người dân:** tìm mộ trên bản đồ, xem 3D nghĩa trang, huyệt trống và giá tham khảo, giữ chỗ huyệt đơn hoặc đôi, trang tưởng niệm (thắp nến, lời tri ân).
- **Ban quản lý:** dựng sơ đồ (khu, hàng, số), đặt trạng thái và giá huyệt, duyệt yêu cầu giữ chỗ, nhập mộ từ CSV.
- **Chủ nền tảng:** thêm nghĩa trang, gán ban quản lý theo email đã xác minh.

Giữ chỗ là yêu cầu để ban quản lý duyệt; không có thanh toán online.

## Trạng thái nền tảng

- Endpoint kiểm tra sức khỏe, state machine trạng thái huyệt, migration, coverage 100% bắt buộc trong CI.
- Stack local đầy đủ: API, PostgreSQL, Redis, lưu trữ tương thích S3, health check.
- Chưa bắt đầu: web, mobile, hồ sơ mộ và luồng giữ chỗ, các ADR.

## Quyết định và việc còn mở

1. **Codebase nào đi tiếp** (bản thử nghiệm hay nền tảng), và chuyển những gì sang.
2. Bản thử nghiệm: remote quản lý mã nguồn, domain cố định, đăng nhập Google, xác minh email.
3. Nền tảng: khởi tạo web và mobile, làm hồ sơ mộ và giữ chỗ, viết các ADR đầu tiên.

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
