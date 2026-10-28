# Đối chiếu 18 flow

Mỗi dòng gồm route màn, tên bước, vai và popup. Biến thể dùng lại mã màn theo tài liệu.

## 01 · Khởi động và tài khoản

| Route | Bước | Vai | Popup |
|---|---|---|---|
| sta01 | Khởi động và kiểm tra phiên | owner | — |
| s02 | Đăng nhập | owner | — |
| s23 | Đăng ký email | owner | — |
| s24 | Xác minh email | owner | — |
| s25 | Khôi phục tài khoản | owner | — |
| s26 | Liên kết danh tính | owner | — |
| s03 | Thiết lập hồ sơ | owner | — |
| s04 | Hôm nay | owner | — |

## 02 · Tạo, sửa và dừng lịch thuốc

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s10 | Danh sách lịch thuốc | owner | — |
| s11 | Nhập lịch mới | owner | — |
| s11-review | Xem lại lịch | owner | — |
| s28 | Chi tiết lịch | owner | — |
| s11-edit | Chỉnh sửa lịch | owner | — |
| s28 | Xác nhận dừng | owner | stopMedicine |

## 03 · Ghi nhận và hiệu chỉnh thuốc

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s12 | Chi tiết lần dùng | owner | — |
| s12 | Xem lại ghi nhận | owner | confirmMedicine |
| s13 | Lịch sử ghi nhận | owner | — |
| s13-edit | Hiệu chỉnh | owner | — |
| s13-edit | Xem lại hiệu chỉnh | owner | amendMedicine |

## 04 · Ghi nhận sức khỏe

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s14 | Lịch sử sức khỏe | owner | — |
| s15 | Chọn loại ghi nhận | owner | — |
| s15-question | Trả lời câu hỏi | owner | — |
| s15-measure | Nhập số đo | owner | — |
| s15-review | Xem lại dữ liệu | owner | — |
| s29 | Chi tiết và nguồn | owner | — |
| s29-edit | Hiệu chỉnh số đo | owner | — |
| s30 | Biểu đồ cơ bản | owner | — |

## 05 · Mời và kết nối người thân

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s06 | Kết nối gia đình | owner | — |
| s07 | Chọn quyền chia sẻ | owner | — |
| s07-review | Xem lại lời mời | owner | — |
| s07-share | Chia sẻ lời mời | owner | — |
| s08 | Người nhận phản hồi | caregiver | — |
| s09 | Chủ hồ sơ xác nhận | owner | — |

## 06 · Xem và nhập hộ trong quyền

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s05 | Chọn hồ sơ | caregiver | — |
| s16 | Hôm nay của người thân | caregiver | — |
| s12 | Ghi nhận thuốc hộ | caregiver | — |
| s15-measure | Nhập số đo hộ | caregiver | — |
| s17 | Xem phạm vi được cấp | caregiver | — |

## 07 · Thu hồi quyền và rời kết nối

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s17 | Quyền hiện tại | owner | — |
| s17-reduce | Chọn giảm quyền | owner | — |
| s17-reduce | Xem lại giảm quyền | owner | reduceGrant |
| s17 | Ngừng chia sẻ | owner | revokeGrant |
| s17 | Người nhận rời kết nối | caregiver | leaveGrant |
| s16 | Góc nhìn sau mất quyền | caregiver | — |

## 08 · Nhắc thuốc

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s18 | Cài đặt lời nhắc | owner | — |
| s18 | Giải thích quyền | owner | notificationPermission |
| s37 | Thiết bị nhận nhắc | owner | — |
| s18-plan | Kết quả đặt nhắc | owner | — |
| s12 | Mở đúng lần dùng | owner | — |

## 09 · Offline, đồng bộ và đổi tài khoản

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s38 | Danh sách thao tác chờ | owner | — |
| s12 | Ghi nhận khi offline | owner | — |
| s38 | Đồng bộ và kiểm kết quả | owner | — |
| s38-conflict | Xem lại xung đột | owner | — |
| s19 | Đăng xuất còn dữ liệu | owner | logout |
| s02 | Đăng nhập tài khoản khác | owner | — |

## 10 · Xuất dữ liệu và xóa tài khoản

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s19-data | Dữ liệu và tài khoản | owner | — |
| s22 | Chọn phạm vi xuất | owner | — |
| s22 | Xác nhận xuất | owner | exportData |
| s22-status | Theo dõi và tải tệp | owner | — |
| s21 | Tác động xóa tài khoản | owner | — |
| s21 | Xác nhận xóa | owner | deleteAccount |
| s21-status | Theo dõi yêu cầu xóa | owner | — |
| ops04 | Xử lý riêng tư | privacy | — |

## 11 · Việc chăm sóc và bàn giao

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s40 | Việc chăm sóc | owner | — |
| s41 | Tạo việc | owner | — |
| s43 | Nhận hoặc từ chối | caregiver | — |
| s42 | Chi tiết việc | caregiver | — |
| s45 | Gửi yêu cầu bàn giao | caregiver | — |
| s46 | Người mới phản hồi | caregiver2 | — |
| s42 | Hoàn tất việc | caregiver2 | completeWork |
| s44 | Bảng gia đình | owner | — |
| s47 | Timeline | owner | — |
| s48 | Nhắc phối hợp | owner | — |

## 12 · Phân tích và tạo báo cáo

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s31 | Phân tích theo thời gian | owner | — |
| s34 | Chọn và xem lại báo cáo | owner | — |
| s32 | Danh sách job báo cáo | owner | — |
| s33 | Chi tiết snapshot | owner | — |
| s29 | Truy dữ liệu nguồn | owner | — |
| s33-share | Xem lại tải/chia sẻ | owner | — |

## 13 · Family Plus và khôi phục gói

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s35 | Quyền lợi và offer | owner | — |
| s35-checkout | Kênh mua giả lập | owner | — |
| s36 | Xác minh quyền lợi | owner | — |
| s36 | Quản lý gia hạn | owner | cancelRenewal |
| s36-restore | Khôi phục giao dịch | owner | — |
| ops06 | Đối soát Family Plus | finance | — |

## 14 · Chọn bác sĩ và đặt lịch

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s49 | Danh mục bác sĩ | owner | — |
| s50 | Hồ sơ bác sĩ | owner | — |
| s51 | Người khám và khung giờ | owner | — |
| s52 | Xem lại quote | owner | — |
| s53 | Thanh toán giả lập | owner | — |
| s54 | Kết quả tiền và lịch | owner | — |
| s56 | Lịch đã xác nhận | owner | — |

## 15 · Đổi, hủy lịch và hoàn tiền

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s55 | Danh sách lịch | owner | — |
| s56 | Chi tiết lịch hiện hành | owner | — |
| s57 | Điều kiện và ảnh hưởng tiền | owner | — |
| s51-change | Chọn lịch thay thế | owner | — |
| s52-change | Xem lại thay đổi | owner | — |
| s57 | Xác nhận hủy | owner | cancelBooking |
| s58 | Theo dõi hoàn tiền | owner | — |

## 16 · Chuẩn bị, tham gia và tài liệu

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s59 | Chọn dữ liệu chia sẻ | owner | — |
| s59 | Xem lại packet | owner | sharePacket |
| s60 | Kiểm tra thiết bị | owner | — |
| s61 | Tham gia và nối lại | owner | — |
| s62 | Kết quả sau phiên | owner | — |
| doc03 | Lịch phía bác sĩ | doctor | — |
| doc05 | Packet được chia sẻ | doctor | — |
| doc07 | Soạn và review tài liệu | doctor | — |
| doc07 | Công bố tài liệu | doctor | publishDocument |
| s63 | Nhận tài liệu | owner | — |

## 17 · Phản ánh, hỗ trợ và kháng nghị

| Route | Bước | Vai | Popup |
|---|---|---|---|
| s64 | Gửi phản ánh | owner | — |
| s65 | Theo dõi và bổ sung | owner | — |
| ops10 | Phân tuyến ca | support | — |
| ops10-review | Review và quyết định | support | — |
| s65 | Đọc kết quả | owner | — |
| s65-appeal | Gửi kháng nghị | owner | — |
| doc09 | Phản ánh phía bác sĩ | doctor | — |

## 18 · Đối soát và chi trả

| Route | Bước | Vai | Popup |
|---|---|---|---|
| ops11 | Sổ và đối soát | finance | — |
| ops11-discrepancy | Xử lý sai lệch | finance | — |
| ops12 | Khoản phải trả | finance | — |
| ops12-payee | Xác minh bên nhận | finance | — |
| ops12-proposal | Chuẩn bị đề nghị | finance | — |
| ops12-approval | Phê duyệt | reviewer | — |
| ops12-payout | Thực hiện và tra kết quả | executor | — |
| doc08 | Sao kê nhà cung cấp | doctor | — |
