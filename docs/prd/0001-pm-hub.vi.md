[English](0001-pm-hub.md) · **Tiếng Việt**

# PRD 0001 – Trung tâm quản lý sản phẩm

Trạng thái: đã duyệt, đang triển khai (theo dõi bằng issue)

## Vì sao
Chủ sở hữu làm **product manager** cho mọi sản phẩm. Yêu cầu, ưu tiên và tiến độ nằm ở repo này, dùng **GitHub Issues làm nơi chứa yêu cầu (thay cho Jira)**. Phần kỹ thuật vẫn làm ở repo riêng của từng sản phẩm.

## Mục tiêu
- Mỗi yêu cầu là một issue GitHub: `[US]` chứa vấn đề, story và tiêu chí nghiệm thu; `[TASK]`, `[BUG]`, `[MONITOR]` cho phần còn lại.
- Tính năng lớn là một `[US]` cha có sub-issue, thay cho file spec riêng.
- Mỗi sản phẩm có một thư mục chứa trang sản phẩm, kế hoạch và roadmap.
- Một roadmap chung trả lời "làm gì bây giờ, tiếp theo, sau này, vì sao".
- Một bảng cho thấy mọi việc của mọi sản phẩm theo trạng thái và ưu tiên.

## Không làm
- Jira hay tracker khác; chuyển code sản phẩm vào đây; đồng bộ tự động với repo sản phẩm.

## Điều cần tránh
- Backlog đầy tính năng tự nghĩ ra: việc không lấy từ danh sách còn mở của sản phẩm thì ghi **đề xuất** cho tới khi chủ đồng ý.
- Quá nhiều label: ưu tiên và trạng thái là field trên bảng.
- Yêu cầu viết hai nơi: issue là nguồn chính; các trang chỉ link tới.
- Thông tin riêng tư hoặc chi tiết hạ tầng trong repo public này.

## Các cách đã cân nhắc
| | Cách | Đánh đổi |
| --- | --- | --- |
| **A (chọn)** | Yêu cầu là issue + thư mục sản phẩm + một bảng GitHub Project | Một nguồn duy nhất, lọc được, link được từ PR của sản phẩm |
| B | Yêu cầu chỉ là file spec | Dễ xem diff, nhưng không có trạng thái, bảng hay thảo luận theo từng việc |
| C | Jira | Thêm một công cụ ngoài GitHub; chủ đã chọn GitHub Issues |

## Thiết kế
- **Issue:** template có trường Product; mã kiểu Jira `[LOẠI-<số>]`; một label `project:`; mỗi giai đoạn sản phẩm một milestone (`<product> M1 – <tên>`). Khi bắt đầu làm ở repo sản phẩm, issue ghi nhánh và PR bên đó.
- **File:** `products/<product>/README.md` (trang), `products/<product>/plan.md` (tầm nhìn, mục tiêu, các mốc, link backlog, rủi ro, quyết định còn mở), `docs/roadmap.md` (Bây giờ / Tiếp theo / Sau này). Tất cả song ngữ.
- **Bảng:** GitHub Project "Product hub" với field Product, Priority (P0–P2), Status (Backlog, Ready, In progress, In review, Done), Target codebase.
- **Sản phẩm:** PrintLab, Evergrove (bản thử nghiệm + nền tảng), Kim Quốc, Hoàng Bảo Kim, Model Crawler.

## Tiêu chí nghiệm thu
- Roadmap và năm trang kế hoạch có đủ hai ngôn ngữ và qua CI.
- Mỗi việc trong backlog ban đầu là một issue có mã, label `project:`, milestone và nằm trên bảng.
- Chủ lọc được bảng theo Product và Priority.
