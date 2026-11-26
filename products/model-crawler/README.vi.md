[English](README.md) · **Tiếng Việt**

# Model Crawler

Công cụ nội bộ thu thập các mô hình in 3D phổ biến và độc đáo để nạp vào danh mục của [PrintLab](../printlab/README.vi.md). Python, không cần trình duyệt, lưu SQLite và xuất JSON/CSV. Ghi nhận ngày 2026-11-26.

## Nguồn

| Trang | Metadata | File | Ghi chú |
| --- | --- | --- | --- |
| Printables | Xong | Xong (mô hình miễn phí) | API công khai |
| MakerWorld | Xong | Cần token tài khoản | |
| MyMiniFactory | Cần API key | Cần OAuth | |
| Cults3D | Chưa | Nhiều mô hình trả phí | Chặn client HTTP thường |

Đã giao: remote chung private có review qua pull request (2026-11-24); CI kiểm tra mỗi pull request, xuất dữ liệu cho danh mục PrintLab kèm giấy phép, và làm mới hằng tuần theo lịch, đếm mô hình mới, thay đổi, không đổi và gỡ mô hình không còn trên trang nguồn (2026-11-25).

Nguyên tắc: chỉ dữ liệu công khai, chỉ mô hình miễn phí, có giới hạn tốc độ, không vượt paywall, không phân phối lại.

## Việc còn mở

- Quyền tải file MakerWorld và MyMiniFactory (phụ thuộc môi trường public của PrintLab để làm OAuth).

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
