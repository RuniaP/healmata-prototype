# HealMata · Cải thiện 14 điểm vòng 2 · 28/10/2026

Đã cập nhật trực tiếp trong folder prototype hiện tại. Đây là bản HTML/state mock để test tương tác; dịch vụ iOS, backend, ngân hàng và cuộc gọi vẫn được mô phỏng.

## Cách thử các phần mới

- **Đổi hồ sơ:** bấm tên hồ sơ ở phía trên nội dung app; quay lại đúng màn và draft của hồ sơ đó.
- **Cỡ chữ:** Cá nhân → Cỡ chữ trong ứng dụng → chọn 100%, 125%, 150% hoặc 200% → Áp dụng cỡ chữ.
- **Bàn giao:** người hiện hành mở việc → Yêu cầu bàn giao → chọn người khác đủ quyền. Đổi vai ở thanh review để thử phía người nhận.
- **Phân công lại:** chủ hồ sơ mở việc đang Cần phân công lại → Phân công lại việc. Nếu chưa có người đủ quyền, đi qua lời mời/kích hoạt trước. Sơ đồ Flow 11 có nhánh tương ứng.
- **Sau mất mạng khi đăng xuất:** Kết nối lại → Tiếp tục đồng bộ và đăng xuất. Nếu chọn Để sau, tiếp tục từ Cá nhân.

## Những gì đã thay đổi

| Mã | Thay đổi | Kiểm lại |
|---|---|---|
| R2-01 | Tạo và hiệu chỉnh số đo dùng chung kiểm tra theo chỉ số/đơn vị. Chuỗi sai bị chặn tại trường; bản nguồn không bị đổi phiên bản. Câu trả lời cảm nhận vẫn được hiệu chỉnh như dữ liệu chữ. | PASS |
| R2-02 | Xuất dữ liệu và báo cáo lấy mọi lịch thuốc cùng sự kiện trong khoảng ngày, gắn medicineId/eventId/ngày/tác giả. Snapshot không phụ thuộc lịch đang mở. Sự kiện cũ không xác định được ngày được liệt kê riêng trong export, không tự đoán ngày. | PASS |
| R2-03 | Tên người được mời, người hiện hành và người nhận bàn giao được đọc từ state. Danh sách, chi tiết, popup và timeline hiển thị đúng Minh/Lan. | PASS |
| R2-04 | Có bàn giao Minh → Lan và Lan → Minh. Chỉ hiện người khác còn đủ điều kiện; tự bàn giao bị chặn tại thao tác. Người cũ giữ trách nhiệm tới khi người mới chấp nhận. | PASS |
| R2-05 | Thêm Phân công lại việc trong app và sơ đồ. Nếu chưa có người đủ quyền, dẫn tới lời mời/kích hoạt với đồng ý riêng, rồi quay về phân công lại. Người mới vẫn phải nhận việc. | PASS |
| R2-06 | Bản nháp bàn giao được giữ theo tài khoản, hồ sơ và mã việc qua đổi tab/reload; xóa sau gửi thành công. Việc khác không dùng nhầm bản nháp. | PASS |
| R2-07 | Mỗi lượt ghi sức khỏe có entry ID và receipt. Back mở trạng thái Đã lưu thay vì lưu lại; bấm lặp khi offline giữ một ý định chờ. Ghi nhận mới vẫn cho phép số đo giống lượt trước. | PASS |
| R2-08 | Luồng khôi phục có lỗi bền vững tại đúng trường mã/mật khẩu/xác nhận, focus để sửa và giữ các giá trị còn lại. | PASS |
| R2-09 | Biểu đồ dùng cả ngày và giờ; kỳ Ngày có trục 00:00 / 12:00 / 23:59, hai mốc 07:00 và 20:00 có vị trí khác nhau. Bảng vẫn truy đúng nguồn, ngày thiếu không được bù số liệu. | PASS |
| R2-10 | Lời nhắc dùng câu ngắn: đã cho phép, đã chuẩn bị, cần cập nhật. Nội dung nêu rõ bản mẫu chưa biết thông báo có hiện thật; mở lời nhắc vẫn không tự ghi thuốc. | PASS |
| R2-11 | Màn gọi có chữ Micro đang bật/tắt và Camera đang bật/tắt, cập nhật cùng nút và nhãn truy cập. Trạng thái gián đoạn vẫn có thông tin bằng chữ. | PASS |
| R2-12 | Bỏ quy tắc chữ nhỏ cố định đang ghi đè giao diện. Ghi chú quan trọng 14px ở mức thường; thêm chọn 100/125/150/200% trong Cá nhân. Mức chữ áp dụng cho các màn/popup mở sau và được lưu khi reload. | PASS |
| R2-13 | Tên hồ sơ hiện tại trở thành nút đổi hồ sơ dễ tìm, kèm tên người thao tác. Quay lại hồ sơ khôi phục đúng màn và bản nháp tương ứng, không mang bản nháp sang hồ sơ khác. | PASS |
| R2-14 | Sau kết nối lại, có bước Tiếp tục đồng bộ và đăng xuất. Nếu để sau, nút tiếp tục còn ở Cá nhân; chỉ đăng xuất khi queue đã xử lý và không còn operation chưa rõ kết quả. | PASS |

## Kiểm tra đã hoàn tất

- 14/14 tình huống của vòng review trung niên/lớn tuổi đạt kiểm tra.
- 7 nhóm kiểm tra bổ sung: chống ghi lặp offline, hiệu chỉnh cảm nhận, chặn tự bàn giao, bố cục cỡ chữ lớn, popup không bị nút ngôn ngữ che và nhánh sơ đồ mới.
- 206 lượt màn: 103 route × VI/EN ở cỡ chữ 200%, không tràn ngang trong lượt kiểm.
- 56 lượt popup: 28 popup × VI/EN ở cỡ chữ 200%, không tràn ngang.
- 18/18 hành trình qua nút/form bằng tiếng Việt và 18/18 bằng tiếng Anh.
- 22/22 tình huống sửa lỗi vòng trước tiếp tục đạt.
- Bộ dịch có 1.679 key: giữ 1.615 key cũ, thêm 64 key. Excel/JSON/bundle khớp, filter/freeze và placeholder đã kiểm.
- Không ghi nhận JavaScript pageerror trong các lượt kiểm trên.

[Ảnh và kết quả từng mục](qa/round2-fixes/index.html) · [Kết quả 14 mục](qa/round2-fixes/results.json) · [Kiểm bổ sung](qa/round2-fixes/edge-results.json) · [Bảng dịch](localization/HealMata_Translations_VI_EN.xlsx)

## Mở và gửi team

Refresh index.html để nạp code mới. Giữ nguyên assets, css, js và localization khi sao chép folder. Không tạo ZIP. Nếu muốn chạy từ fixture ban đầu, dùng Đặt lại flow theo hướng dẫn sẵn có; cỡ chữ và ngôn ngữ lưu riêng với trạng thái flow.

## Giới hạn

Kiểm bằng Edge trên Windows với khung iPhone 393×852 CSS px. Cỡ chữ là chức năng của bản HTML, chưa thay cho xác minh Dynamic Type/VoiceOver hoặc Safari trên iPhone thật. Ngữ cảnh mẫu vẫn có Ngọc Mai/Minh/Lan; chưa thêm hồ sơ bố hay backend đa hồ sơ. Báo cáo vòng 2 ban đầu được giữ làm bằng chứng trước sửa, kết quả sau sửa nằm trong nhật ký này.
