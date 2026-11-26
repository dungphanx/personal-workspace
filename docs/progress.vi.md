[English](progress.md) · **Tiếng Việt**

# Tổng quan tiến độ

Ghi nhận ngày **2026-11-26**. Chi tiết ở trang từng sản phẩm.

## Bảng nhanh

| Sản phẩm | Giai đoạn | Mới xong | Còn mở |
| --- | --- | --- | --- |
| [PrintLab](../products/printlab/README.vi.md) | Đã có sản phẩm; đang làm môi trường public | Danh mục nạp từ dữ liệu Model Crawler (website v0.3.1, API v0.2.0); trước đó xuất 3MF, hồ sơ in, lịch sử in và chi phí, remix, cuộn nhựa | Môi trường public và giám sát; người dùng đăng mẫu; hàng đợi in; xác nhận email; tag cho dịch vụ danh tính và mobile |
| [Evergrove](../products/evergrove/README.vi.md) | Bản thử nghiệm chạy được + khung nền tảng | Nền tảng: 7 ADR đầu tiên. Bản thử nghiệm: đi viếng 3D, đặt lại mật khẩu, đường đi tới mộ, realtime có dự phòng | Chọn codebase nào đi tiếp; đưa bản thử nghiệm lên remote quản lý mã nguồn |
| [Kim Quốc](../products/kim-quoc/README.vi.md) | Đang chạy thật | Monitor bên ngoài gửi email cho chủ shop khi site sập; trước đó kiểm tra sức khoẻ và hướng dẫn khôi phục, header bảo mật, sao lưu DB, trang dịch vụ kèm hỏi đáp | Báo về điện thoại khi có đơn mới; khách quay lại và nhắc bảo hành; khóa nhánh main; Search Console; thử khôi phục backup lần đầu |
| [Hoàng Bảo Kim](../products/hoang-bao-kim/README.vi.md) | Đang chạy thật | Sửa thanh tab, clip quảng bá mới, test tự động cho worker, header bảo mật, giới hạn gửi form báo giá | Sao lưu cơ sở dữ liệu hằng tuần; tiền cọc và số còn nợ của tiệc đã chốt, sau đó lãi từng tiệc; tách worker thành module; quyết định mã QR; mỗi tháng xem khách tìm thấy site qua đâu |
| [Model Crawler](../products/model-crawler/README.vi.md) | Công cụ nội bộ | Remote chung private, CI kiểm tra, xuất dữ liệu cho danh mục PrintLab, làm mới hằng tuần theo lịch | Báo khi lần cập nhật hằng tuần lỗi hoặc ít hẳn đi; quyền tải file MakerWorld và MyMiniFactory (sau môi trường public của PrintLab) |
| [Hollies](../products/hollies/README.vi.md) | Đã có MVP; web app đã phát hành | Thói quen sức khoẻ (so tiến bộ với 4 tuần trước, ghi cân nặng, bộ đếm vào điểm), chế độ phục hồi, thông báo trên điện thoại, sao lưu và khôi phục, sửa lỗi cho ổn định | Bản lên kho; mục tiêu thói quen (chủ sở hữu) |

## Dòng thời gian

| Ngày | Sự kiện |
| --- | --- |
| 2026-11-13 | PrintLab tách thành các thành phần với quy trình giao hàng; thiết kế và làm bản thử nghiệm Evergrove; viết spec môi trường public cho PrintLab |
| 2026-11-14 | Hoàng Bảo Kim: deploy SEO, tính tiền công, danh thiếp; domain riêng chạy; ảnh chia sẻ và hỏi đáp. Kim Quốc: domain, đăng nhập mã một lần, đổi tên, SEO. Tạo trung tâm này |
| 2026-11-15 | Hoàng Bảo Kim: trang điện thoại nhanh hơn, IndexNow, đo khách liên hệ, phông tự host. Kim Quốc: SEO nâng cao và sửa địa chỉ site ở bản chạy thật. PrintLab: website v0.1.0 (trau chuốt UX/UI). Hoàn thiện bản thử nghiệm Evergrove. Bắt đầu Hollies: từ khung app đến tự đánh giá buổi tối |
| 2026-11-16 | Hollies: buổi sáng, tổng kết tuần, nhắc nhở, hướng dẫn, web app, đổi tên thành Hollies, sửa trải nghiệm, bộ đếm và khoá PIN. Thêm Hollies vào trung tâm này |
| 2026-11-17 | Hollies: sửa bộ đếm trên web; chạy test trên trình duyệt thật trong CI. Kim Quốc: merge coverage và clip quảng bá. Hoàng Bảo Kim: clip quảng bá mới |
| 2026-11-18 | Nền tảng Evergrove: 7 ADR đầu tiên. Hoàng Bảo Kim: sửa thanh tab, test worker, header bảo mật. Model Crawler quản lý phiên bản ở máy |
| 2026-11-19 | Hoàng Bảo Kim: giới hạn gửi form báo giá |
| 2026-11-20 | Kim Quốc: header bảo mật, sao lưu, giới hạn form đặt lịch, trang dịch vụ kèm hỏi đáp, chọn sẵn dịch vụ trong form. Nghiên cứu các story mới cho PrintLab (US-29 đến US-36) |
| 2026-11-21 | PrintLab: hướng dẫn người mới, xuất 3MF (website v0.2.0). Bản thử nghiệm Evergrove: đi viếng 3D, vái lạy, thấy người viếng khác |
| 2026-11-22 | PrintLab: hồ sơ in, tham số phong phú, lịch sử in và chi phí, hướng dẫn trong sản phẩm, remix, cuộn nhựa (website v0.3.0, API v0.1.0) |
| 2026-11-24 | Hollies: sửa lỗi cho ổn định, mã định danh app thật, bộ đếm vào điểm, chế độ phục hồi, ghi cân nặng, so tiến bộ, thông báo trên điện thoại. Model Crawler lên remote chung private. Việc mới cho mọi sản phẩm (US-41 đến US-52) |
| 2026-11-25 | PrintLab: danh mục nạp từ dữ liệu Model Crawler (website v0.3.1, API v0.2.0). Model Crawler: CI kiểm tra và làm mới hằng tuần theo lịch. Kim Quốc: kiểm tra sức khoẻ và hướng dẫn khôi phục cho cảnh báo site sập |
| 2026-11-26 | Hollies: sao lưu ra file và khôi phục trên thiết bị bất kỳ. Kim Quốc: monitor bên ngoài chạy, báo qua email. Evergrove: so sánh hai codebase và đề xuất ở TASK-5. Việc mới cho Kim Quốc, Hoàng Bảo Kim và Model Crawler (US-57 đến MONITOR-63) |

## Quyết định chờ chủ sở hữu

1. Evergrove: codebase nào đi tiếp (so sánh và đề xuất ở TASK-5: bản thử nghiệm Node).
2. PrintLab: thời điểm làm môi trường public (chi phí cloud nhỏ hằng tháng).
3. Hoàng Bảo Kim: có thêm mã QR vào danh thiếp không.
4. Hollies: mục tiêu thói quen và thông tin việc học.
5. PrintLab: in thẳng tới máy in firmware đóng (sau khi lắp xong máy in thử).
