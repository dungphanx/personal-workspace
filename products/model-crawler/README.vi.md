[English](README.md) · **Tiếng Việt**

# Model Crawler

Công cụ nội bộ thu thập các mô hình in 3D phổ biến và độc đáo để nạp vào danh mục của [PrintLab](../printlab/README.vi.md). Python, không cần trình duyệt, lưu SQLite và xuất JSON/CSV. Ghi nhận ngày 2026-11-22.

## Nguồn

| Trang | Metadata | File | Ghi chú |
| --- | --- | --- | --- |
| Printables | Xong | Xong (mô hình miễn phí) | API công khai |
| MakerWorld | Xong | Cần token tài khoản | |
| MyMiniFactory | Cần API key | Cần OAuth | |
| Cults3D | Chưa | Nhiều mô hình trả phí | Chặn client HTTP thường |

Nguyên tắc: chỉ dữ liệu công khai, chỉ mô hình miễn phí, có giới hạn tốc độ, không vượt paywall, không phân phối lại.

## Việc còn mở

- Đã bắt đầu quản lý phiên bản ở máy (2026-11-18); còn thêm remote chung và quy trình review.
- Nạp dữ liệu xuất ra vào danh mục PrintLab.
- Quyền tải file MakerWorld và MyMiniFactory (phụ thuộc môi trường public của PrintLab để làm OAuth).

Kế hoạch và backlog có ưu tiên: [plan.vi.md](plan.vi.md).
