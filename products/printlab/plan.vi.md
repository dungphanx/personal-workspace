[English](plan.md) · **Tiếng Việt**

# PrintLab – kế hoạch

Ghi nhận ngày 2026-11-28. Yêu cầu nằm trong các issue được link; trang này chỉ sắp thứ tự. Trang sản phẩm: [README.vi.md](README.vi.md).

## Tầm nhìn

Nơi tìm, học và chia sẻ về in 3D: mẫu hay, hướng dẫn rõ ràng và cộng đồng sẵn lòng giúp đỡ.

## Định hướng (2026-11-28)

PrintLab tập trung vào nội dung: mẫu, hướng dẫn, kiến thức, bài viết cộng đồng và tìm kiếm. Không đầu tư thêm vào điều khiển máy in, vì app và slicer của các hãng máy in đã làm việc in rất tốt. Các tính năng máy in đã ra (in USB và qua mạng, thông báo, cuộn nhựa, lịch sử in) vẫn giữ và được sửa lỗi, nhưng không làm thêm.

## Mục tiêu

- Nơi đầu tiên người mới tìm đến khi cần mẫu hoặc câu trả lời về in 3D
- Phần lớn người dùng mới đến từ tìm kiếm, vào bài hướng dẫn, bộ sưu tập và trang mẫu
- Mọi lần deploy đều truy được về một phiên bản đã release

## Không làm

- Tính năng điều khiển máy in mới (hàng đợi, in thẳng tới máy firmware đóng, chỉnh cài đặt máy từ xa)
- Tính sẵn sàng cao hay nhiều vùng khi chưa có người dùng
- Lưu lại file mô hình của bên thứ ba

## Các mốc và backlog

### Bây giờ: nền tảng nội dung (chưa gắn mốc)

| Ưu tiên | Việc |
| --- | --- |
| P0 | [US-75](https://github.com/dungphanx/personal-workspace/issues/75) Kho hướng dẫn in 3D từng bước trên PrintLab |
| P0 | [TASK-77](https://github.com/dungphanx/personal-workspace/issues/77) Thương hiệu thống nhất: favicon, logo, ảnh chia sẻ mặc định |
| P1 | [US-76](https://github.com/dungphanx/personal-workspace/issues/76) Máy tìm kiếm tìm thấy và xếp hạng bài hướng dẫn, bộ sưu tập |
| P1 | [US-41](https://github.com/dungphanx/personal-workspace/issues/41) Tài khoản mới xác nhận email (cần trước bài viết cộng đồng) |

### Tiếp theo: nội dung và cộng đồng (chưa gắn mốc)

| Ưu tiên | Việc |
| --- | --- |
| P1 | [US-78](https://github.com/dungphanx/personal-workspace/issues/78) Bộ sưu tập mẫu chọn lọc |
| P1 | [US-79](https://github.com/dungphanx/personal-workspace/issues/79) Hướng dẫn vật liệu: chọn nhựa gì, in thế nào |
| P1 | [US-80](https://github.com/dungphanx/personal-workspace/issues/80) Người in đăng nhật ký in và mẹo (sau US-41) |
| P2 | [US-81](https://github.com/dungphanx/personal-workspace/issues/81) Trang mẫu cho biết độ khó và người khác đã in ra sao |

### [M1 – Môi trường public](https://github.com/dungphanx/personal-workspace/milestone/1)

| Ưu tiên | Việc |
| --- | --- |
| Đang chạy | [US-66](https://github.com/dungphanx/personal-workspace/issues/66) Public trên hạ tầng đang có, không tốn thêm chi phí hằng tháng (chạy từ 2026-11-26) |
| P1 | [TASK-3](https://github.com/dungphanx/personal-workspace/issues/3) Tag release cho các thành phần chưa có |
| P1 | [TASK-42](https://github.com/dungphanx/personal-workspace/issues/42) Theo dõi và backup môi trường public |
| Xong | [US-67](https://github.com/dungphanx/personal-workspace/issues/67) Chủ sở hữu xem bài bị báo cáo, khôi phục hoặc gỡ |
| Sau | [US-2](https://github.com/dungphanx/personal-workspace/issues/2) Môi trường cloud, khi đã có người dùng |

### [M2 – Danh mục phổ biến](https://github.com/dungphanx/personal-workspace/milestone/2)

| Ưu tiên | Việc |
| --- | --- |
| P1 | [US-4](https://github.com/dungphanx/personal-workspace/issues/4) Mô hình phổ biến từ MyMiniFactory trong danh mục (thêm mẫu để xem) |
| Xong | [US-20](https://github.com/dungphanx/personal-workspace/issues/20) Danh mục nạp từ dữ liệu Model Crawler (website v0.3.1, API v0.2.0) |

### Sau này (chưa gắn mốc)

| Ưu tiên | Việc |
| --- | --- |
| Sau | [US-82](https://github.com/dungphanx/personal-workspace/issues/82) Email tóm tắt hằng tháng về mẫu và bài mới (chi phí gửi email cần duyệt) |
| Sau | [US-83](https://github.com/dungphanx/personal-workspace/issues/83) Chủ sở hữu biết nội dung nào mang người đến |
| Hoãn | [US-33](https://github.com/dungphanx/personal-workspace/issues/33) Người dùng đăng mẫu tham số (tham số studio phong phú hơn đã xong) |
| Hoãn | [US-43](https://github.com/dungphanx/personal-workspace/issues/43) App mobile trên kho ứng dụng (app hiện chủ yếu để điều khiển máy in) |

### Đã xong hoặc đã đóng

| Trạng thái | Việc |
| --- | --- |
| Xong | [US-29](https://github.com/dungphanx/personal-workspace/issues/29) Xuất mô hình đã tùy chỉnh ra 3MF (website v0.2.0) |
| Xong | [US-31](https://github.com/dungphanx/personal-workspace/issues/31) Hồ sơ in đã thử theo máy và loại nhựa (website v0.3.0) |
| Xong | [US-32](https://github.com/dungphanx/personal-workspace/issues/32) Remix và ảnh "Tôi đã in" |
| Xong | [US-34](https://github.com/dungphanx/personal-workspace/issues/34) Theo dõi cuộn nhựa |
| Xong | [US-36](https://github.com/dungphanx/personal-workspace/issues/36) Hướng dẫn người mới và trình thêm máy in ngay trong sản phẩm |
| Xong | [US-68](https://github.com/dungphanx/personal-workspace/issues/68) Trang mô hình trên tìm kiếm và ảnh xem trước khi chia sẻ |
| Xong | [US-69](https://github.com/dungphanx/personal-workspace/issues/69) Báo về điện thoại khi bản in xong hoặc lỗi |
| Xong | [US-70](https://github.com/dungphanx/personal-workspace/issues/70) Gợi ý nguyên nhân và cách sửa khi bản in lỗi |
| Đã đóng | [US-35](https://github.com/dungphanx/personal-workspace/issues/35) Lịch sử in và chi phí đã xong; bỏ hàng đợi in (2026-11-28) |
| Đã đóng | [US-30](https://github.com/dungphanx/personal-workspace/issues/30) In thẳng tới máy firmware đóng: không làm (2026-11-28) |

## Rủi ro

- Nội dung cần thời gian viết đều đặn; không có bài và bộ sưu tập mới thì site đứng yên
- Chi phí cloud hằng tháng tăng dần theo mức sử dụng
- Nguồn bên ngoài đổi API hoặc điều khoản

## Quyết định còn mở

- Bài hướng dẫn chỉ do chủ sở hữu viết hay cho cả người đóng góp (chủ quyết, US-75)
- Thời điểm làm môi trường cloud (chủ quyết, US-2; sau khi có người dùng)
