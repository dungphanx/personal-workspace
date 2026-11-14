[English](CONTRIBUTING.md) · **Tiếng Việt**

# Đóng góp

## Quy trình

Issue → nhánh → verify → pull request → review → chủ sở hữu approve → merge.

- Mọi thay đổi bắt đầu từ một issue. Không push thẳng `main` (đã khóa: cần một approve, approve bị hủy khi có push mới, cấm force-push và xóa nhánh).
- Tên nhánh: `<loại>/<số issue>-<slug>`, ví dụ `docs/12-evergrove-plan`.
- Merge bằng **merge commit** (đã tắt squash và rebase); nhánh tự xóa sau khi merge.

## Issue

- Dùng template: **User story** `[US]`, **Task** `[TASK]`, **Bug** `[BUG]`, **Monitor** `[MONITOR]` (việc cần theo dõi). Đã tắt issue trống.
- Workflow `Issue key` đổi `[TASK] tiêu đề` thành `[TASK-<số>] tiêu đề`.
- User story gồm vấn đề, story, tiêu chí nghiệm thu và phần không làm. Tính năng lớn là một story cha có các sub-issue.
- Mỗi issue một label `project:`. Ưu tiên và trạng thái nằm trên bảng project, không dùng label.

## Pull request

- **Tiêu đề:** bắt đầu bằng mã issue, ví dụ `[TASK-13] Add the Evergrove plan`. CI chặn tiêu đề khác.
- **Nội dung** (template có sẵn), viết bằng tiếng Anh:
  1. **Background** – vì sao có PR và nguồn từ đâu (issue, thiết kế, yêu cầu).
  2. **Verification** – đã kiểm tra gì, kết quả, kể cả phần chưa kiểm tra.
  3. **Description of changes** – những thay đổi đã áp dụng.
  4. Khối `<details>` thu gọn chứa bản tiếng Việt.
- PR mới tự assign cho chủ repo.

## Label

| Nhóm | Label |
| --- | --- |
| Loại | `type: docs`, `type: fix`, `type: chore` |
| Khu vực | `area: progress`, `area: workspace` |
| Sản phẩm | `project: printlab`, `project: evergrove`, `project: kim-quoc`, `project: hoang-bao-kim`, `project: model-crawler` |
| Khác | `snapshot-update`, `ai-reviewed`, `security: secrets-checked` |

## Viết tài liệu

- Trang tiếng Anh `X.md` kèm bản Việt `X.vi.md`; sửa cả hai.
- Trang có mốc ngày ghi nhận.
- Repo public: không ghi bí mật, thông tin đăng nhập, dữ liệu cá nhân, hostname nội bộ, cổng, đường dẫn máy hay chi tiết hạ tầng. Mô tả sản phẩm ở mức sản phẩm.
- Chạy `node scripts/check-docs.mjs` trước khi push (link, cặp bản dịch, mẫu bí mật). CI cũng chạy.
