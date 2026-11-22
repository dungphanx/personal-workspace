[English](progress.md) · **Tiếng Việt**

# Tổng quan tiến độ

Ghi nhận ngày **2026-11-22**. Chi tiết ở trang từng sản phẩm.

## Bảng nhanh

| Sản phẩm | Giai đoạn | Mới xong | Còn mở |
| --- | --- | --- | --- |
| [PrintLab](../products/printlab/README.vi.md) | Đã có sản phẩm; đang làm môi trường public | Xuất 3MF, hồ sơ in, tham số phong phú, lịch sử in và chi phí, hướng dẫn trong sản phẩm, remix, cuộn nhựa (website v0.3.0, API v0.1.0) | Môi trường public; người dùng đăng mẫu; hàng đợi in; tag cho dịch vụ danh tính và mobile |
| [Evergrove](../products/evergrove/README.vi.md) | Bản thử nghiệm chạy được + khung nền tảng | Nền tảng: 7 ADR đầu tiên. Bản thử nghiệm: đi viếng 3D, đặt lại mật khẩu, đường đi tới mộ, realtime có dự phòng | Chọn codebase nào đi tiếp; đưa bản thử nghiệm lên remote quản lý mã nguồn |
| [Kim Quốc](../products/kim-quoc/README.vi.md) | Đang chạy thật | Coverage ~95%, clip quảng bá, header bảo mật, sao lưu DB, giới hạn gửi form, trang dịch vụ kèm hỏi đáp | Khóa nhánh; Search Console |
| [Hoàng Bảo Kim](../products/hoang-bao-kim/README.vi.md) | Đang chạy thật | Sửa thanh tab, clip quảng bá mới, test tự động cho worker, header bảo mật, giới hạn gửi form báo giá | Quyết định QR |
| [Model Crawler](../products/model-crawler/README.vi.md) | Công cụ nội bộ | Đã quản lý phiên bản ở máy | Remote chung; nạp danh mục PrintLab |
| [Hollies](../products/hollies/README.vi.md) | Đã có MVP; web app đã phát hành | Đã đổi tên thành Hollies (đang chạy); sửa trải nghiệm; bộ đếm có khoá PIN; test trên trình duyệt trong CI | Thói quen sức khoẻ (so với 4 tuần trước, ghi cân nặng); chế độ phục hồi; thông báo native |

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

## Quyết định chờ chủ sở hữu

1. Evergrove: codebase nào đi tiếp.
2. PrintLab: thời điểm làm môi trường public (chi phí cloud nhỏ hằng tháng).
3. Hoàng Bảo Kim: có thêm mã QR vào danh thiếp không.
4. Hollies: mục tiêu thói quen và mã định danh app cho kho ứng dụng.
5. PrintLab: in thẳng tới máy in firmware đóng (sau khi lắp xong máy in thử).
