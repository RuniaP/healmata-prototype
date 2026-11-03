# Kiểm tra prototype HealMata 18 flow

## Cải thiện vòng review 2 · 28/10/2026

Kết quả hiện tại: [14 mục](round2-fixes/results.json) đạt, [7 nhóm bổ sung](round2-fixes/edge-results.json) đạt, 103 route và 28 popup; 18/18 hành trình qua UI ở mỗi ngôn ngữ. Cỡ chữ 200% đã kiểm 206 lượt màn + 56 lượt popup VI/EN. 1.679 key Excel/JSON/bundle khớp. [Nhật ký](../ROUND2_FIX_LOG_2026-10-28.md) và [ảnh kiểm lại](round2-fixes/index.html). Các phần bên dưới mô tả những lượt kiểm trước.

## Lượt sửa lỗi 28/10/2026

Kết quả mới nhất: [nhật ký sửa lỗi](../FIX_LOG_2026-10-28.md), [22 tình huống tái hiện](persona-fixes/results.json), [4 tình huống bổ sung](persona-fixes/edge-results.json) và [ảnh kiểm lại](persona-fixes/index.html). Đã kiểm 18/18 flow qua UI bằng VI/EN; 102 route, 27 popup. Bảng dịch hiện có 1615 key. Các con số 25 popup / 1543 key ở các lượt bên dưới thuộc bản kiểm ban đầu.

Ngày kiểm: 2026-10-27T16:25:37.947Z (UTC).

- 102 route màn/trạng thái và 25 popup render được.
- Đủ 18/18 flow có mapping tới màn và popup đã đăng ký.
- 22 nhóm kiểm tra logic/fixture, file tải, sơ đồ, viewport và mở file trực tiếp: PASS.
- 18/18 hành trình chính kiểm bằng click nút, nhập form, chọn vai trong Edge headless: PASS.
- Không có JavaScript pageerror được ghi nhận trong các lượt kiểm.
- Mỗi route trong lượt sweep: khung 393 × 852, không tràn ngang vùng nội dung; kiểm đích nút, action và form tồn tại.
- Kiểm tải JSON có nội dung thật; báo cáo HTML tải thật; file:// mở được toàn bộ tài nguyên đang hiển thị.
- Kiểm queue theo account, thu hồi quyền, hiệu chỉnh có lịch sử, snapshot báo cáo, trạng thái tiền/lịch riêng, quyền publish và ba vai Finance.

Lượt render sweep nạp fixture cho từng màn để kiểm bố cục/đích bấm. Lượt UI đi liên bước bằng DOM thật, dùng sơ đồ để bàn giao giữa các vai. Ảnh screenshot là viewport đầu hoặc trạng thái cuối hành trình; nội dung bên dưới vẫn có thể cuộn trong bản mẫu.

Đây là kiểm tra HTML trên Edge và kích thước iPhone mô phỏng. Chưa phải kiểm trên thiết bị iPhone thật, VoiceOver, backend thật hoặc mạng/thanh toán/video SDK thật. Chưa chứng minh mọi tổ hợp nghiệp vụ và race condition của 18 tài liệu; các kiểm tra chạy trên mock state của bản bàn giao.

## Các lượt UI

- Flow 01 · Khởi động và tài khoản: PASS.
- Flow 02 · Tạo, sửa và dừng lịch thuốc: PASS.
- Flow 03 · Ghi nhận và hiệu chỉnh thuốc: PASS.
- Flow 04 · Ghi nhận sức khỏe: PASS.
- Flow 05 · Mời và kết nối người thân: PASS.
- Flow 06 · Xem và nhập hộ trong quyền: PASS.
- Flow 07 · Thu hồi quyền và rời kết nối: PASS.
- Flow 08 · Nhắc thuốc: PASS.
- Flow 09 · Offline, đồng bộ và đổi tài khoản: PASS.
- Flow 10 · Xuất dữ liệu và xóa tài khoản: PASS.
- Flow 11 · Việc chăm sóc và bàn giao: PASS.
- Flow 12 · Phân tích và tạo báo cáo: PASS.
- Flow 13 · Family Plus và khôi phục gói: PASS.
- Flow 14 · Chọn bác sĩ và đặt lịch: PASS.
- Flow 15 · Đổi, hủy lịch và hoàn tiền: PASS.
- Flow 16 · Chuẩn bị, tham gia và tài liệu: PASS.
- Flow 17 · Phản ánh, hỗ trợ và kháng nghị: PASS.
- Flow 18 · Đối soát và chi trả: PASS.

## Cập nhật bố cục app / flow song song

Đã kiểm app bên trái, sơ đồ bên phải luôn hiển thị; ô sơ đồ mở đúng màn/popup; thao tác trong app cập nhật marker và tự theo flow. Kiểm toàn bộ ô của 18 flow, các bước dùng chung màn và viewport 393–1920 px. Màn nhỏ xếp app phía trên, flow phía dưới, vẫn đồng bộ hai chiều.

Chi tiết: split-results.json · 2026-10-27T16:41:19.377Z (UTC).

## Đa ngôn ngữ Việt / Anh · 28/10/2026

Workbook có 1543 key duy nhất, đúng 3 cột Key / Vietnamese / English; mọi ô dịch đầy đủ, tham số khớp và giá trị bằng JSON runtime. Đã kiểm filter, freeze hàng tiêu đề/cột key, XML file xuất và preview đầu bảng/các dòng dài.

Đã chạy 18/18 hành trình bằng tiếng Việt và 18/18 bằng tiếng Anh. Kiểm 102 màn/trạng thái, 25 popup, dropdown, lưu ngôn ngữ khi reload/reset, giữ bản nhập dở, file tải HTML, nhãn chọn tệp, thông báo validation và API key trực tiếp. Không phát hiện lỗi JavaScript trong các lượt kiểm ngôn ngữ. Rà chữ giao diện không tính tên riêng, nội dung người dùng nhập và chữ nằm sẵn trong ảnh screenshot QA.

Chi tiết: i18n-results.json, i18n-ui-en-results.json, i18n-workbook-checks.json, i18n-missing.json.

Nút quả địa cầu VI / EN đã chuyển vào góc phải bên trong màn hình iPhone. Kiểm 102 màn ở cả hai ngôn ngữ, 25 popup, tiêu đề dài và viewport 393 px: nút/menu nằm trong khung, không có nút đổi ngôn ngữ trên thanh điều khiển ngoài app. Xem i18n-position-results.json.
