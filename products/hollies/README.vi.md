[English](README.md) · **Tiếng Việt**

# Hollies

App tự cải thiện bản thân: biết thời gian đi đâu, giữ top 3 mỗi ngày, duy trì thói quen đọc sách, tập thể dục và học, và quay lại nhịp khi một ngày bị trượt. Ghi nhận ngày 2026-11-26.

- **Công nghệ:** một codebase Flutter cho Android, iOS và web; dữ liệu nằm trên máy (chưa có tài khoản, chưa đồng bộ).
- **Trạng thái:** đã có MVP; web app đã phát hành và cài được ra màn hình chính điện thoại. App native đã có mã định danh và thông báo thật; chưa làm bản lên kho ứng dụng.

## Tính năng

| Phần | Tính năng |
| --- | --- |
| Ghi thời gian | Bấm một lần để bấm giờ Công việc, Đọc sách, Tập luyện hoặc Đại học; nhật ký và tổng trong ngày |
| Top 3 | Tối đa ba việc cho hôm nay, có mức tác động và hạn; việc khác để ở Để sau; bấm giờ riêng cho từng việc và xem việc tiếp theo |
| Thói quen | Mục tiêu đọc, tập, học mỗi ngày, có dải tuần và chuỗi ngày; ghi thói quen cho ngày trước đó |
| Bộ đếm | Đếm thói quen tốt và xấu chỉ bằng một chạm; bộ đếm riêng tư khoá bằng mã PIN; bộ đếm có thể tính vào điểm đúng nhịp |
| Thống kê | Xem theo ngày và tuần: thời gian theo nhóm, theo ngày, thói quen, chuỗi ngày, điểm đúng nhịp, xuất nhật ký CSV; so tiến bộ với 4 tuần trước; ghi cân nặng kèm đường tập luyện theo tuần |
| Giữ nhịp | Điểm đúng nhịp mỗi ngày, tự đánh giá buổi tối, câu bản sắc và lên kế hoạch buổi sáng, tổng kết tuần với một thử nghiệm, nhắc trong app và bằng thông báo trên điện thoại Android và iOS (tối đa 3 lần/ngày, không nhắc giờ yên tĩnh), chế độ phục hồi nhẹ hơn sau hai ngày trượt nhịp |
| Dữ liệu | Sao lưu ra file và khôi phục trên thiết bị bất kỳ |
| Chung | Tiếng Anh và tiếng Việt, giao diện sáng và tối, bố cục điện thoại và màn hình rộng |

## Đã giao

Khung app và lưu trữ trên máy, ghi thời gian, ưu tiên, thói quen, thống kê, tự đánh giá buổi tối và điểm đúng nhịp, phần buổi sáng, tổng kết tuần, nhắc nhở, README có ảnh chụp và hướng dẫn EN/VI, web app tên Hollies có icon riêng, một đợt sửa trải nghiệm (bấm giờ lên đầu trang Hôm nay, sửa hoặc xoá mục thời gian, sửa đồng hồ đang chạy, tự đánh giá rõ hơn, thanh trạng thái iPhone, làm nổi cả tab đang chọn), bộ đếm có khoá PIN, chạy test trên trình duyệt thật trong CI (2026-11-15 đến 2026-11-17). Sửa lỗi cho ổn định (hoàn tác nhiều lần, kiểm tra lại ngày khi mở lại app, làm nhẹ việc làm mới nhật ký thời gian), mã định danh app thật, đưa bộ đếm vào điểm, chế độ phục hồi, ghi cân nặng, so tiến bộ, thông báo trên điện thoại (2026-11-24). Sao lưu và khôi phục (2026-11-26).

## Việc còn mở

- Bản lên kho cho Android và iOS.
- Chủ xác nhận mục tiêu thói quen và thông tin việc học.

Kế hoạch: [plan.vi.md](plan.vi.md).
