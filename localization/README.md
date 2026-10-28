# Ngôn ngữ HealMata

Workbook `HealMata_Translations_VI_EN.xlsx` gồm đúng ba cột **Key / Vietnamese / English**. Một hàng là một thông điệp hoặc nhãn có key cố định; nội dung dùng chung được tái sử dụng. Tham số như `{name}`, `{count}`, `{screenCount}`, `{popupCount}`, `{operationId}` phải giữ giống nhau ở hai ngôn ngữ.

Trong prototype, nút ngôn ngữ nằm bên trong app, ở góc phải phía trên màn hình iPhone. Nút có biểu tượng quả địa cầu và mã VI / EN; bấm để mở danh sách Tiếng Việt / English. Nút hiện trên mọi màn, kể cả đăng nhập và khi mở popup. Lựa chọn áp dụng ngay cho màn hiện tại, popup, flow, thông báo và những màn mở tiếp theo. Ngôn ngữ lưu riêng với trạng thái test nên reset flow không đổi ngôn ngữ. Dữ liệu và nội dung bạn tự nhập không được dịch tự động.

## Dùng key khi code

```js
HM.t('auth.sign_in');
HM.t('common.continue');
HM.t('queue.synchronized_count', { count: 3 });
HM.setLanguage('en'); // hoặc 'vi'
```

`vi.json` và `en.json` có cùng bộ key với Excel, dùng được cho hệ thống i18n của app. `js/translations.js` đóng gói cùng dữ liệu dưới dạng JavaScript để bản HTML mở trực tiếp qua file:// không cần server hoặc fetch JSON.

Các màn prototype hiện có được nối với key qua bộ ánh xạ `source.json`. Bộ này giữ nguyên nhãn nguồn và trạng thái nghiệp vụ, nên đổi ngôn ngữ không đổi enum, option value, tài khoản, quyền hay dữ liệu đang test. Các phần tử có nhãn khớp hoàn toàn mang `data-i18n-key` để kiểm tra trong trình duyệt. Khi phát triển app, gọi key trực tiếp qua API i18n của nền tảng thay vì dùng bản dịch làm giá trị trạng thái.

## Sửa nội dung bằng Excel

1. Giữ nguyên cột Key; sửa cột Vietnamese và English, giữ đủ tham số `{...}`.
2. Lưu workbook rồi chạy bằng Python từ thư mục `localization`:

```powershell
python import_excel.py HealMata_Translations_VI_EN.xlsx
```

3. Mở lại hoặc refresh `index.html`. Script kiểm key trùng/thiếu, ô dịch trống và tham số trước khi cập nhật JSON cùng bundle. Script chỉ dùng thư viện chuẩn của Python, không cần cài package.

Key có thể giống nhau về nội dung hiển thị nhưng khác ngữ cảnh, ví dụ enum và tiêu đề. Tên người, mã lịch, email, đơn vị đo và dữ liệu y tế/người dùng không được biến thành trạng thái nghiệp vụ bằng bản dịch. Giá trị demo chưa sửa có thể được hiển thị theo ngôn ngữ; khi người dùng nhập, nội dung được giữ nguyên.
