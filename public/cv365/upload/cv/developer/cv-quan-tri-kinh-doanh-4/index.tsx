export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					NHÂN VIÊN QUẢN TRỊ KINH DOANH
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div id="prof">
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
													19/05/1992
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
													Nam
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
											</div>
										</div>
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													test@gmail.com
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
											</div>
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
							<div className="info">
								<div id="box-hvt">
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
									</h1>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
									</h2>
								</div>
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
					</div>
					<div className="clr" />
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle"></div>
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
										<div className="cum">
											<div id="mg" className="cumic2" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Trở thành một chuyên viên Marketing giỏi trong vòng 3 năm làm việc tại công ty. <br /> Sử dụng tiếng Anh thành thạo trong vòng 2
											năm để phục vụ tốt cho công việc.
											<br /> Xây dựng cho bản thân sự nghiệp kinh doanh bền vững và phấn đấu trở thành một Quản lý Kinh doanh trong vòng 5 năm
											tới.&nbsp;
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="funk">
											<div className="funic" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Kỹ năng
												</div>
											</h3>
										</div>
										<div className="clr" />
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
													Kỹ năng quản lý
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
													Kỹ năng giao tiếp, đàm phán
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
													Kỹ năng thu thập và xử lý thông tin nhanh chóng
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
													Khả năng quyết đoán
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
										<div className="cum">
											<div id="mg" className="cumic4" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Giấy chứng nhận sinh viên tích cực trong phong trào Đoàn trường tại Đại học Nguyễn Tất Thành.
											<br /> Nhân viên ưu tú của năm tại Công ty TNHH Xuất nhập khẩu CV365
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="cum">
											<div id="mg" className="cumic5" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Chứng chỉ tin học văn phòng trình độ B1
											<br /> Chứng chỉ tiếng Anh giao tiếp
											<br /> Chứng chỉ Quản lý tại Trung tâm đào tạo Kỹ năng CV365.&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
											&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
										</div>
										<div className="clr" />
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
										<div className="cum">
											<div id="mg" className="cumic6" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Đi du lịch
											<br /> Đọc sách mảng kinh doanh
											<br /> Chơi thể thao: bóng đá, bơi lội
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="cum">
											<div id="mg" className="cumic7" />
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Ông Vũ Trọng Kha
											<br />
											Giám đốc điều hành công ty TNHH Xuất nhập khẩu CV365
											<br />
											Số điện thoại: 0211 654 8745
											<br />{' '}
										</div>
										<div className="clr" />
									</div>{' '}
								</div>
							</div>
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
									<div className="sum">
										<div className="sumic1" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
											</span>
										</div>
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
													Đại học Nguyễn Tất Thành&nbsp;
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian: ...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Quản trị Marketing
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Xếp loại: Khá, điểm Trung bình 7,5{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
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
									<div className="sum">
										<div className="sumic2" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
											</span>
										</div>
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
													Tập đoàn cung ứng đồ gia dụng CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian: ...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Quản lý ngành hàng
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Làm việc với nhà cung cấp khi đàm phán hợp đồng về quảng cáo và mua bán <br />- Phụ trách nguồn hàng luôn được cung ứng
													đầy đủ
													<br />- Tìm kiếm, phát triển nguồn hàng mới
													<br />- Báo cáo giám đốc mua hàng tình hình hàng hóa cụ thể
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
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
													Công ty Trách nhiệm hữu hạn Xuất nhập khẩu CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian: ...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Phó phòng Kinh doanh
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Lập kế hoạch Marketing và phụ trách các chiến lược thúc đẩy doanh số <br />- Hoạch định các chiến lược tìm nguồn sản phẩm
													mới và phát triển sản phẩm trong hệ thống phân phối
													<br />- Thực hiện công tác tuyển dụng, đào tạo nhân sự
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>
										<div id="exp3" className="ctbx experience">
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
													Công ty Cổ phần sản xuất Hàng tiêu dùng CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian: ...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Giám sát kinh doanh
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Lên kế hoạch thực hiện các chỉ tiêu về doanh số định kỳ theo tháng, quý, năm
													<br />- Quản lý đội ngũ nhân viên kinh doanh tại công ty
													<br />- Phát triển hệ thống phân phối cho sản phẩm giầy dép thời trang
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
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
									<div className="sum">
										<div className="sumic3" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Hoạt động
											</span>
										</div>
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
													Tham gia các chương trình giao lưu gặp gỡ những nhà kinh doanh giỏi là cựu sinh viên của Đại học Nguyến Tất Thành.
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Hội viên Hội Sinh viên cùng nhan làm giàu&nbsp;
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Thường xuyên di hoạt động tình nguyện tại các vùng cao biên giới phía Bắc <br />
													Làm trợ giảng tại làng trẻ SOS.
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
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
									<div className="sum">
										<div className="sumic4" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Dự án tham gia
											</span>
										</div>
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
													Dự án “Hành động vì trẻ em nghèo vượt khó” được tổ chức thường niên tại Trung tâm giáo dục CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vai trò: Đội trưởng nhóm sinh viên tình nguyện
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Tham gia vào việc lập kế hoạch học tập, vui chơi cho trẻ. Lên kế hoạch định hướng sự nghiệp tương lai cho các em bước vào độ
													tuổi vị thành niên.&nbsp;
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
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
									<div className="sum">
										<div className="sumic5" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Thông tin thêm
											</span>
										</div>
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
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													Thời gian...
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thêm những thông tin khác ( nếu cần )
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												></div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
					</div>
					<div className="ft">
						<div className="watermark">© Timviec365.vn</div>
					</div>
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
