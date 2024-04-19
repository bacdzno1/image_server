export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					Nhân viên kinh doanh bất động sản
				</div>
				<div id="form-cv">
					<div id="box-hvt">
						<div id="name-job">
							<h2>
								<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
							</h2>
						</div>
						<div id="logo-name">
							<div className="logo" />
							<div className="name">
								<h1>
									<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
								</h1>
							</div>
						</div>
						<div id="clear"></div>
					</div>
					<div id="cv-main">
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<div id="prof">
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													Ngày Sinh:
													<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
														19/05/1995
													</span>
												</p>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<p className="icoweb">
													Giới Tính:
													<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
														Nữ
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													Số Điện Thoại:
													<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													Email:
													<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
														test@gmail.com
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													Địa chỉ:
													<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													Facebook:
													<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true" />
												</p>
											</div>
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
									<div id="box02" className="block cvo-block ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												MỤC TIÊU NGHỀ NGHIỆP
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Áp dụng những kinh nghiệm bán hàng, sự hiểu biết về thị trường bất động sản để trở thành một nhân viên bán hàng chuyên nghiệp,
											có thể mang đến nhiều giá trị lợi ích cho khách hàng cũng như giá trị phát triển bền vững cho công ty. Từ đây, mong muốn giúp
											cho Công ty có nhiều khách hàng thân thiết, mở rộng khả năng tiếp cận khách hàng.
											<br />- Trong vòng 3 năm tới mong muốn trở thành một nhân viên sale Bất động sản hàng đầu tại công ty. Trong 5-10 năm tới sẽ có
											thể tự kinh doanh riêng trong lĩnh vực bất động sản.
											<br />{' '}
										</span>
									</div>
									<div id="box03" className="block cvo-block box-skills ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												KỸ NĂNG
											</div>
										</h3>
										<div className="exp content-edit skill">
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Am hiểu và có kỹ năng phân tích thị trường bất động sản
												</p>
												<div className="bar-exp">
													<div style={{ width: '50%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={50} />
												</div>
											</div>
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Kỹ năng giao tiếp và đàm phán tốt
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
											</div>
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Khả năng ngoại ngữ tốt
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
											</div>
											<div className="clr" />
										</div>
									</div>
									<div id="box04" className="block cvo-block ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												GIẢI THƯỞNG
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Nhân viên ưu tú nhất của Phòng Kinh doanh Công ty Cổ phần Bất động sản CV365 trong Lễ tổng kết thi đua năm 2018.
											<br />- Đạt thành tích Sinh viên nghiên cứu khoa học giỏi vào năm thứ 3 của trường Đại học CV365.
											<br />- Nhận giấy chứng nhận từ Hội đồng Thanh niên tình nguyện Đoàn trường.
											<br />{' '}
										</span>
									</div>
									<div id="box05" className="block cvo-block ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												CHỨNG CHỈ
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng chỉ hoàn thành khóa đào tạo kinh doanh bất động sản tại Trung tâm dạy nghề CV365.
											<br />- Chứng chỉ tiếng Anh TOEIC 750
											<br />{' '}
										</span>
									</div>
									<div id="box06" className="block cvo-block ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												SỞ THÍCH
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Gặp gỡ bạn bè
											<br />- Đi du lịch
											<br />- Đọc sách, nghe nhạc
											<br />{' '}
										</span>
									</div>
									<div id="box07" className="block cvo-block ui-sortable-handle">
										{' '}
										<div className="blockControls">
											<div title="Di chuyển khối" className="show-layout-editor">
												<i className="fa fa-bars" />
											</div>
											<div title="Chuyển mục này lên trên" className="up">
												▲
											</div>
											<div title="Chuyển mục này xuống dưới" className="down">
												▼
											</div>
											<div title="Ẩn mục này" className="hide">
												<i className="fa fa-minus" /> Ẩn
											</div>
										</div>{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												NGƯỜI THAM CHIẾU
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Nguyễn Văn B – Trưởng phòng kinh doanh
											<br />
											Công ty Cổ phần Bất động sản CV365
											<br />
											Số điện thoại: 038 7584 120{' '}
										</span>
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
					</div>
					<div id="cv-content">
						<div className="ir ui-sortable" id="sort_block">
							<div id="block01" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										TRÌNH ĐỘ HỌC VẤN
									</span>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Đại học CV365
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Chuyên ngành: Quản trị kinh doanh
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Tốt nghiệp loại Khá, điểm trung bình 7.0
										</div>
									</div>{' '}
								</div>
							</div>
							<div id="block02" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										KINH NGHIỆM LÀM VIỆC
									</span>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Công ty CP Bất động sản CV365
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Nhân viên kinh doanh bất động sản
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Tham gia viết bài quảng bá các sản phẩm bất động sản trong sự án của Công ty thông qua kênh&nbsp; facebook và trên các diễn
											đàn.
											<br /> - Giới thiệu và tư vấn các sản phẩm bất động sản.
											<br />- Giải đáp các thắc mắc của khách hàng về sản phẩm Bất động sản thông qua facebook và email.
											<br />{' '}
										</div>
									</div>
									<div id="exp2" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Công ty Thương mại đồ chơi CV365
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Nhân viên bán hàng
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Trực tiếp bán hàng tại cửa hàng bán lẻ đồ chơi CV365.
											<br /> - Đóng góp ý tưởng quảng bá sản phẩm trong các ấn phẩm truyền thông tờ rơi, banner, poster,...
											<br />- Đăng quảng cáo marketing trên kênh bán hàng facebook của cửa hàng.&nbsp;
											<br />- Lập báo cáo về sản lượng hàng bán ra cuối ngày.
											<br />{' '}
										</div>
									</div>{' '}
								</div>
							</div>
							<div id="block03" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										HOẠT ĐỘNG
									</span>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												- Tham gia đội hiến máu tình nguyện tại trường Đại học
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Tình nguyện viên
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Tình nguyện viên cho các chiến dịch hỗ trợ người nghèo vùng cao do thành phố Hà Nội phát động.
											<br />{' '}
										</div>
									</div>{' '}
								</div>
							</div>
							<div id="block04" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										DỰ ÁN THAM GIA
									</span>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												- Tham gia dự án “Bất động sản CV365 – Đồng hành cùng thủ đô trong thời kỳ hội nhập”
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												- Vai trò trong dự án: Nhân viên lập chiến lược kinh doanh và lên chương trình quảng bá các sản phẩm bất động sản tại Công ty
												Cổ phần Bất động sản CV365.
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Kết quả thực hiện: Ngay từ khi bắt đầu chạy dự án vào tháng 9/2018, Công ty Cổ phần Bất động sản đã có 50 suất đăng ký nhà ở.
											Con số này tiếp tục tăng trong giai đoạn tiếp theo của Dự án.{' '}
										</div>
									</div>{' '}
								</div>
							</div>
							<div id="block05" className="cvo-block ui-sortable-handle">
								<div className="blockControls">
									<div title="Di chuyển khối" className="show-layout-editor">
										<i className="fa fa-bars" />
									</div>
									<div title="Chuyển mục này lên trên" className="up">
										▲
									</div>
									<div title="Chuyển mục này xuống dưới" className="down">
										▼
									</div>
									<div title="Ẩn mục này" className="hide">
										<i className="fa fa-minus" /> Ẩn
									</div>
								</div>{' '}
								<div className="head">
									<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										THÔNG TIN THÊM
									</span>
								</div>
								<div id="experience-table">
									<div id="exp1" className="ctbx experience">
										{' '}
										<div className="fieldgroup_controls">
											<div className="clone">
												<i className="fa fa-plus" /> Thêm
											</div>
											<div className="remove">
												<i className="fa fa-minus" /> Xóa
											</div>
										</div>
										<h3>
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Đại học CV365
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Thêm những thông tin khác (nếu cần)
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										></div>
									</div>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="watermark">© Timviec365.vn</div>
					<div
						className="resize"
						style={{
							position: 'absolute',
							width: 'auto',
							height: 'auto',
							top: 0,
							right: 0,
							bottom: 0,
							left: 0,
							margin: 0,
							padding: 0,
							overflow: 'hidden',
							visibility: 'hidden',
							zIndex: -1,
						}}
					>
						<iframe
							style={{
								width: '100%',
								height: 0,
								border: 0,
								visibility: 'visible',
								margin: 0,
							}}
						/>
						<iframe
							style={{
								width: 0,
								height: '100%',
								border: 0,
								visibility: 'visible',
								margin: 0,
							}}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
