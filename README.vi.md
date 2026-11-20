[English](README.md) · **Tiếng Việt**

# personal-workspace

Trung tâm quản lý sản phẩm của tôi: mỗi sản phẩm là gì, đang ở đâu, làm gì tiếp, và các yêu cầu phía sau. Phần kỹ thuật làm ở repo riêng của từng sản phẩm; repo này là nơi chứa quyết định, ưu tiên và yêu cầu.

## Sản phẩm

| Sản phẩm | Là gì | Giai đoạn |
| --- | --- | --- |
| [PrintLab](products/printlab/README.vi.md) | Nền tảng cho người dùng máy in 3D: mô hình tham số, studio 3D, G-code, in | Đã có sản phẩm, đang chuẩn bị môi trường public |
| [Evergrove](products/evergrove/README.vi.md) | Quản lý nghĩa trang: hồ sơ mộ, bản đồ và 3D, giữ chỗ huyệt | Bản thử nghiệm chạy được + khung nền tảng |
| [Kim Quốc](products/kim-quoc/README.vi.md) | Website và trang quản lý cho cửa hàng cửa cuốn | Đang chạy thật |
| [Hoàng Bảo Kim](products/hoang-bao-kim/README.vi.md) | Website và trang quản lý cho dịch vụ tiệc cưới lưu động | Đang chạy thật |
| [Model Crawler](products/model-crawler/README.vi.md) | Công cụ thu thập mô hình in 3D phổ biến cho PrintLab | Công cụ nội bộ |
| [Hollies](products/hollies/README.vi.md) | App tự cải thiện bản thân: ghi thời gian, top 3 mỗi ngày, thói quen, giữ nhịp | Đã có MVP; web app đã phát hành |

Mỗi thư mục sản phẩm còn có **kế hoạch** (`plan.vi.md`). Roadmap chung: [docs/roadmap.vi.md](docs/roadmap.vi.md). Ưu tiên và trạng thái mọi việc được theo dõi trên một bảng nội bộ (private, người ngoài không xem được). Trạng thái chung và dòng thời gian: [docs/progress.vi.md](docs/progress.vi.md).

## Repo này vận hành thế nào

- **Yêu cầu là GitHub Issues**, có mã kiểu Jira: `[US-12]`, `[TASK-13]`, `[BUG-14]`, `[MONITOR-15]` (số là số issue). Chọn template issue; workflow tự thêm số.
- **Mỗi thư mục sản phẩm** chứa trang sản phẩm, và khi lớn dần thì có thêm kế hoạch, roadmap.
- **Pull request** theo [CONTRIBUTING.vi.md](CONTRIBUTING.vi.md): mã issue trên tiêu đề, Background → Verification → Description of changes, tóm tắt tiếng Việt trong khối thu gọn.
- **Song ngữ:** tiếng Anh là bản chính; mỗi trang có bản Việt `*.vi.md`.
- **Thiết kế của trung tâm:** [docs/prd/0001-pm-hub.vi.md](docs/prd/0001-pm-hub.vi.md).

## Cấu trúc repo

```
products/<product>/README.md   trang sản phẩm (tính năng, trạng thái, việc còn mở)
products/<product>/plan.md     tầm nhìn, mục tiêu, các mốc, backlog có ưu tiên (link issue)
docs/roadmap.md                Bây giờ / Tiếp theo / Sau này cho mọi sản phẩm
docs/progress.md               trạng thái chung và dòng thời gian
docs/prd/                      thiết kế cho chính repo này
.github/                       template issue/PR, workflow
scripts/check-docs.mjs         CI: link, cặp bản dịch, quét bí mật
```
