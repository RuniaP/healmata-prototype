(()=>{const H=HM;
const paths={
1:[['Đăng nhập email',[0,1,6,7]],['Phiên còn hợp lệ',[0,7]],['Đăng ký email và xác minh',[1,2,3,6,7]],['Khôi phục rồi đăng nhập',[1,4,1]],['Trùng email · Xác thực để liên kết',[1,5,6,7]]],
2:[['Tạo lịch mới',[0,1,2,3]],['Chỉnh sửa · Lưu phiên bản mới',[3,4,2,3]],['Dừng lịch · Giữ lịch sử',[3,5,3]]],
3:[['Xác nhận một lần dùng',[0,1,2]],['Hiệu chỉnh có lý do và lịch sử',[2,3,4,2]]],
4:[['Ghi cảm nhận',[0,1,2,4,0]],['Nhập số đo',[1,3,4,0]],['Xem nguồn và hiệu chỉnh',[0,5,6,5]],['Xem biểu đồ cơ bản',[0,7,5]]],
5:[['Mời → Người nhận chấp nhận → Chủ hồ sơ kích hoạt',[0,1,2,3,4,5,0]]],
6:[['Chọn hồ sơ và ghi thuốc hộ',[0,1,2,1]],['Nhập số đo hộ trong quyền',[1,3,1]],['Xem phạm vi được cấp',[1,4]]],
7:[['Giảm một phần quyền',[0,1,2,0]],['Chủ hồ sơ ngừng chia sẻ',[0,3,5]],['Người nhận rời kết nối',[0,4,5]]],
8:[['Tùy chọn app và quyền iOS',[0,1,0]],['Chọn thiết bị rồi cập nhật request',[0,2,0,3]],['Mở từ thông báo · Ghi nhận là bước riêng',[3,4]]],
9:[['Local chờ gửi → Kết quả đồng bộ',[0,1,2]],['Xung đột · Xem lại trước ghi',[2,3,2]],['Đổi tài khoản · Xử lý queue trước',[2,4,5]]],
10:[['Xuất dữ liệu gốc',[0,1,2,3]],['Yêu cầu xóa · Theo dõi các kho',[0,4,5,6,7,6]]],
11:[['Tạo việc và nhận trách nhiệm',[0,1,2,3]],['Bàn giao có hiệu lực sau người mới chấp nhận',[3,4,5,3]],['Người hiện hành hoàn tất',[3,6,7,8]],['Nhắc phối hợp',[7,9]]],
12:[['Phạm vi → Job → Snapshot → Tải/chia sẻ',[0,1,2,3,5]],['Truy nguồn hiện hành · Snapshot giữ nguyên',[3,4,0]]],
13:[['Mua gói và xác minh quyền lợi',[0,1,2]],['Hủy gia hạn · Giữ quyền lợi đến cuối kỳ',[2,3,2]],['Khôi phục theo giao dịch',[2,4,2]],['Sai lệch giao dịch / quyền lợi · Finance đối soát',[2,5,2]]],
14:[['Bác sĩ → Giữ chỗ → Thanh toán → Kết quả tiền/lịch riêng',[0,1,2,3,4,5,6]]],
15:[['Đổi giờ · Giữ lịch cũ tới khi commit thành công',[0,1,2,3,4,1]],['Hủy lịch → Theo dõi hoàn tiền riêng',[2,5,6]]],
16:[['Người dùng · Chuẩn bị và tham gia',[0,1,2,3,4]],['Bác sĩ · Xem packet trong quyền và tham gia cùng phiên',[5,6,3]],['Bác sĩ review, công bố → Người dùng nhận tài liệu',[3,7,8,9]],['Chưa công bố · Tiếp tục theo dõi',[4,9]]],
17:[['Gửi → Tiếp nhận → Phân tuyến → Review → Kết quả',[0,1,2,3,4]],['Kháng nghị liên kết quyết định gốc',[4,5,2]],['Phản ánh phía bác sĩ',[6,2]]],
18:[['Nguồn → Payable → Đích nhận → Đề nghị → Duyệt → Chi → Sao kê',[0,2,3,4,5,6,7]],['Sai lệch · Bút toán bổ sung, đối chiếu lại',[0,1,0]]]
};
const base=H.renderMap;let renderedFlow=null,lastSelection=null,preferredLane=0,preferredNode=null,lastActive=null;
H.renderMap=()=>{const f=H.flows.find(x=>x.id===H.s.flow),panel=document.getElementById('map-stage');
 if(renderedFlow!==f.id){preferredNode=null;lastActive=null}
 if(renderedFlow!==f.id){base();renderedFlow=f.id;lastSelection=null;preferredLane=0;panel.scrollTop=0;document.querySelector('.map-heading p').textContent='Bấm ô để mở màn hoặc popup bên trái. Khi thao tác trong app, vị trí hiện tại trên sơ đồ sẽ sáng lên. Kéo ngang để xem nhánh dài.';document.getElementById('flow-map').innerHTML=paths[f.id].map(([label,nodes],lane)=>`<section class="map-lane" data-lane="${lane}"><h3>${label}</h3><div class="lane-track">${nodes.map((index,i)=>{const [route,text,role,popup]=f.nodes[index];return `${i?'<span class="lane-arrow" aria-hidden="true">→</span>':''}<button class="map-node ${popup?'popup-node':''}" data-node="${index}"><span class="node-kind">${popup?'POPUP TRÊN MÀN':H.screens[route].code}</span><strong>${text}</strong><small>${H.roles[role||f.role]}</small><span class="node-open">Mở màn hình ↗</span></button>`}).join('')}</div></section>`).join('')}
 const popup=H.popupState?.key||null,role=H.s.role;let candidates=f.nodes.map((n,i)=>({n,i})).filter(x=>x.n[0]===H.s.route);const exact=candidates.filter(x=>(x.n[3]||null)===popup);if(exact.length)candidates=exact;else candidates=candidates.filter(x=>!x.n[3]);const roleMatch=candidates.filter(x=>(x.n[2]||f.role)===role);if(roleMatch.length)candidates=roleMatch;const active=(candidates.find(x=>x.i===preferredNode)||candidates.find(x=>lastActive!==null&&x.i>=lastActive)||candidates[0])?.i;lastActive=active;
 document.querySelectorAll('#flow-map [data-node]').forEach(button=>{const current=Number(button.dataset.node)===active;button.classList.toggle('current',current);if(current)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');button.querySelector('.node-open').textContent=current?'Đang xem bên trái':'Mở màn hình ↗'});
 const oldStatus=panel.querySelector('.map-status');oldStatus?.remove();if(active===undefined||popup&&!exact.length){const status=document.createElement('p');status.className='map-status';status.textContent=popup?'Đang mở popup: '+H.popups[popup](H.popupState.extra).title:'Màn liên quan: '+H.screens[H.s.route].title;panel.querySelector('.step-guide').append(status)}
 const selection=[f.id,H.s.route,popup,role,active].join('|');if(selection!==lastSelection){lastSelection=selection;const target=panel.querySelector(`.map-lane[data-lane="${preferredLane}"] [data-node="${active}"]`)||panel.querySelector(`#flow-map [data-node="${active}"]`);if(target){const track=target.closest('.lane-track');track.scrollLeft=Math.max(0,target.offsetLeft-track.offsetLeft-(track.clientWidth-target.offsetWidth)/2);const rect=target.getBoundingClientRect(),area=panel.getBoundingClientRect();if(rect.top<area.top+15||rect.bottom>area.bottom-20)panel.scrollTop+=rect.top-area.top-panel.clientHeight/2+rect.height/2}}
};
document.addEventListener('click',event=>{const node=event.target.closest('#flow-map [data-node]');if(node){preferredLane=Number(node.closest('.map-lane').dataset.lane);preferredNode=Number(node.dataset.node)}else if(event.target.closest('.iphone'))preferredNode=null},true);
const seed=H.seed;H.seed=id=>{renderedFlow=null;lastSelection=null;preferredLane=0;preferredNode=null;lastActive=null;seed(id)};
const guide=H.updateGuide;H.updateGuide=()=>{guide();H.renderMap()};H.renderMap();
})();
