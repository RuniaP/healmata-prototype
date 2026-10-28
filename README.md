# HealMata — Prototype 18 flow · v1.0

Mở START_HERE.html để xem hướng dẫn, hoặc mở index.html để test ngay. Giải nén toàn bộ folder trước khi mở. Dùng Edge/Chrome trên máy tính; không cần cài Node, Python hoặc chạy server. Giữ nguyên các folder assets, css, js.

## Cách test

1. Chọn một trong 18 flow ở bên trái. “Đặt lại flow” nạp lại bộ fixture ban đầu và xóa trạng thái test trước đó của bản mẫu; “Đặt lại toàn bộ” đưa về Flow 01.
2. Bấm và nhập liệu trong điện thoại để test hành trình thật. Nội dung dài cuộn trong màn hình; thanh tab và home indicator ở dưới.
3. App nằm bên trái, sơ đồ flow nằm bên phải và hiển thị đồng thời. Bấm ô trên sơ đồ để mở màn/popup trong app; thao tác trong app làm sáng ô hiện tại, tự theo flow khi chuyển hành trình. Sơ đồ cuộn riêng và tự đưa vị trí hiện tại vào vùng nhìn. Đây là lối tắt review, không tự hoàn tất bước nghiệp vụ trước đó.
4. Vai người dùng, người thân, bác sĩ, Support, Privacy và ba vai Finance được đổi ở thanh ngoài. Các bước có đổi người trong sơ đồ bên phải cũng đổi đúng vai. Không có chọn vai quản trị trong luồng app của người dùng.
5. Dùng “Tình huống” để thử mất mạng, gửi xong mất phản hồi, dữ liệu đã thay đổi và quyền bị thu hồi. Nhánh mất quyền có ý nghĩa với dữ liệu được chia sẻ; chủ dữ liệu vẫn xem dữ liệu của mình.

## Bộ dữ liệu mẫu

- Chủ hồ sơ: Ngọc Mai. Người thân: Minh. Người nhận bàn giao mới: Lan.
- Email đăng nhập: mai@example.com hoặc minh@example.com; mật khẩu mẫu bất kỳ từ 6 ký tự. Mã xác minh/khôi phục: 123456.
- Dữ liệu test lấy mốc 27–28/10/2026, múi giờ Việt Nam UTC+7. Trạng thái lưu trong localStorage của trình duyệt; folder không mang theo tiến độ test từ máy người gửi.
- Flow 05: tạo lời mời → Minh nhận → Mai xác nhận. Flow 11: Minh nhận việc → gửi bàn giao → Lan nhận → Lan hoàn tất.
- Flow 16: chia sẻ packet → phiên gọi mô phỏng → bác sĩ xác nhận dịch vụ riêng → review/công bố tài liệu → Mai xem tài liệu.
- Flow 18: khớp nguồn → xác minh đích nhận → đề nghị → đổi vai phê duyệt → đổi vai thực hiện chi → tra kết quả. Flow này nạp sẵn khoản đủ điều kiện để test; đi từ Flow 16 cần Finance review eligibility riêng.
- Family Plus 59.000 đ, tư vấn 240.000 đ, phí mẫu 40.000 đ, net 200.000 đ, giữ chỗ 5 phút và cutoff đổi/hủy 2 giờ đều là fixture để review, chưa phải chính sách sản phẩm đã duyệt.

## Phạm vi bàn giao

Đủ 18 hành trình chính, gồm màn người dùng, người thân, bác sĩ và vận hành. Có form nhập, xem lại, xác nhận, kết quả, lịch sử, dữ liệu nguồn và các nhánh thử nghiệm. Các biến thể dùng chung mã HM-SCR được tính là màn/trạng thái, không phải từng layout độc lập.

Các màn là HTML/CSS/JavaScript tương tác, không dùng ảnh chụp nguyên màn làm nút bấm. Logo, mascot, nền mint và ảnh bác sĩ được lấy từ PSD của bạn; font Lato đóng gói cục bộ. Bố cục card trắng, gradient xanh và khoảng thoáng kế thừa Screen, nội dung ưu tiên bộ flow mới. Vì tài liệu quy định không có Welcome và không tự chẩn đoán/điểm sức khỏe, các phần AI/Stable trên art cũ không được đưa trở lại.

Khung chuẩn: iPhone 16, 393 × 852 CSS px (tương đương canvas 1179 × 2556 px ở @3x), có vùng status/Dynamic Island, tab và home indicator. Ảnh gốc 1500 × 3248 là nguồn art, không dùng làm kích thước viewport.

Đây là prototype phục vụ review UI/flow. Auth xã hội, quyền iOS, thanh toán, job, đồng bộ, gọi video, xử lý riêng tư và chi trả được mô phỏng trong trình duyệt. Không có backend, kết nối đối tác, thu âm/camera thật hoặc giao dịch tiền thật. Tệp xuất JSON, báo cáo HTML và tài liệu HTML được tải thật bằng trình duyệt. File minh chứng chỉ ghi nhận tên file trong fixture.

Các quyết định còn mở trong DOCX như provider eligibility, authorization, retention, giá/thuế, cutoff, hợp đồng thanh toán và kênh phiên vẫn cần được team chốt trước triển khai. Kết quả QA ở đây xác nhận bản HTML và mock state, không phải bằng chứng app iOS/backend đã đạt điều kiện vận hành.

## Cấu trúc

- index.html: prototype với hai phần app bên trái / flow bên phải, đồng bộ hai chiều.
- START_HERE.html: hướng dẫn và lối vào 18 flow.
- FLOW_COVERAGE.md và qa/coverage.json: đối chiếu 18 flow với route, vai, popup.
- assets/: tài nguyên gốc đã tách và font cục bộ.
- js/: catalog/fixture, runtime thao tác, các nhóm màn, kiểm quyền và điều hướng.
- qa/screen-gallery.html: ảnh kiểm tra viewport; mở prototype để cuộn và tương tác.
- qa/QA_REPORT.md, results.json, ui-results.json: phương pháp và kết quả kiểm tra.
- qa/sources/: trích nội dung chữ từ 18 DOCX để đối chiếu; bản Word gốc vẫn là tài liệu nguồn về layout và quyết định.

Nguồn kích thước: https://developer.apple.com/design/human-interface-guidelines/layout

## Hai ngôn ngữ Việt / Anh

Nút quả địa cầu VI / EN nằm bên trong app, ở góc phải phía trên màn hình iPhone, xuất hiện trên mọi màn và khi mở popup. Bấm nút để chọn Tiếng Việt / English; màn hiện tại và sơ đồ đổi theo. Lựa chọn được giữ khi chuyển màn, reset flow và mở lại; nội dung đang nhập được giữ nguyên. Workbook `localization/HealMata_Translations_VI_EN.xlsx` có 1543 key và đúng ba cột Key / Vietnamese / English, khớp với JSON và bundle đang chạy. Xem `localization/README.md` để dùng key và cập nhật nội dung từ Excel.
