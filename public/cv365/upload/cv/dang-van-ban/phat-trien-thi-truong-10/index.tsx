export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					phát triển thương mại
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
									<div className="box-dm" />
									<div id="box-hvt">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
										</h1>
										<p />
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển">
												NHÂN VIÊN PHÁT TRIỂN THỊ TRƯỜNG
											</span>
										</h2>
										<p />
										<p>
											<span id="cv-profile-about" />
										</p>
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Thông tin liên hệ
													</span>
												</h3>
												<div id="prof">
													<div className="ic ic1">
														<p className="icf">
															<i className="fa"></i>
														</p>
														<p className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
																19/05/1992
															</span>
														</p>
													</div>
													<div className="ic ic2">
														<div className="icf">
															<i className="fa"></i>
														</div>
														<p className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
																Nam
															</span>
														</p>
													</div>
													<div className="ic ic3">
														<p className="icf">
															<i className="fa"></i>
														</p>
														<p className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true">
																098567567567
															</span>
														</p>
													</div>
													<div className="ic ic4">
														<p className="icf">
															<i className="fa"></i>
														</p>
														<p className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
																test@gmail.com
															</span>
														</p>
													</div>
													<div className="ic ic5">
														<p className="icf">
															<i className="fa"></i>
														</p>
														<p className="icoweb">
															<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true">
																Số 1 đường Cầu Giấy, Hà Nội
															</span>
														</p>
													</div>
													<div className="ic ic6">
														<p className="icf">
															<i className="fa"></i>
														</p>
														<p className="icoweb">
															<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
																facebook.com/abc
															</span>
														</p>
													</div>
													<div className="clr" />
												</div>
												<div className="clr" />
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '6.83333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.125px' }}>
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
														Đại học Thương mại Hà Nội
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														( 2011 - 2012 )
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Xuất nhập khẩu và Marketing Quốc tế
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Xếp loại: Giỏi{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '6.83333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.125px' }}>
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
														Công ty Thiết bị động cơ Xe máy CV365
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Phó phòng Phát triển thị trường
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Phân tích nhu cầu của khách hàng, tìm hiểu xu hướng của thị trường đối với nguồn hàng cung cấp của công ty <br />- Nghe
													điện thoại, tiếp đón khách hàng đến công ty
													<br />- Hỗ trợ cho phòng Kinh doanh và Tiếp thị tổ chức các chương trình khuyến mại, lên kế hoạch tổ chức hội thảo, giới
													thiệu sản phẩm mới của công ty.&nbsp;
													<br />- Hỗ trợ mảng hành chính cho những phòng ban khác có liên quan đến hoạt động marketing.
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '5.125px' }}>
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
														Công ty TNHH CV365
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Thư ký Quản lý Marketing
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tổ chức sự kiện cho công ty, bao gồm: họp hành, hội thảo, đào tạo nhân viên,... <br />- Đề xuất và lên kế hoạch cho các
													chương trình vui chơi giải trí cho nhân viên nội bộ công ty
													<br />- Hỗ trợ các hoạt động Marketing – PR
													<br />- Thực hiện công tác hành chính và thư ký.
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '6.83333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Hoạt động
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.125px' }}>
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
														Tình nguyện viên tham gia công tác tổ chức chương trình thiện nguyện&nbsp;
													</div>
												</h3>
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
													- Tham gia Đội Sinh viên tình nguyện của Khoa tại trường Đại học Thương mại.{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<div className="watermark">∴ Timviec365.vn</div>
						</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '17.125px' }}>
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
														Mục tiêu nghề nghiệp
													</div>
												</h3>
												<span
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '17.125px' }}
												>
													Mong có thể học hỏi thêm nhiều kinh nghiệm, trau dồi nhiều kỹ năng trong ngành thị trường và có mức thu nhập ổn định <br />
													Phấn đấu trở thành một nhân viên phát triển thị trường chuyên nghiệp, được làm việc ở trong môi trường có nhiều thử thách và
													năng động để phát triển bản thân hơn nữa. Hy vọng công ty luôn tạo điều kiện giúp nhân viên thăng tiến trong công
													việc.&nbsp;
													<br />{' '}
												</span>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '17.125px' }}>
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
														Kỹ năng
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
															Thích nghi nhanh với môi trường xung quanh
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="exp-fake" />
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '17.125px' }}>
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
														Giải thưởng
													</div>
												</h3>
												<span
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '17.125px' }}
												>
													- Cá nhân có thành tích xuất sắc trong hoạt động tình nguyện của Đội sinh viên tình nguyện trường Đại học Thương mại <br />-
													Nhân viên tích cực tại Công ty Thiết bị động cơ Xe máy CV365
													<br />{' '}
												</span>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '17.125px' }}>
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
														Chứng chỉ
													</div>
												</h3>
												<span
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '17.125px' }}
												>
													- Chứng chỉ tiếng Anh chuyên ngành
													<br />- Chứng chỉ Tin học trình độ B&nbsp;{' '}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Dự án tham gia
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
														Dự án GaT – Give Take Book – mở rộng thị trường cho sản phẩm của Công ty Thiết bị động cơ Xe máy CV365
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vai trò: Quản lý và viết bài content cho facebook, Instagram
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Thông qua dự án, tích lũy được kỹ năng làm việc nhóm, thuyết trình, rèn luyện khả năng giao tiếp, viết content Marketing.{' '}
												</div>
											</div>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Thông tin thêm
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
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={3}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box06" className="block cvo-block ui-sortable-handle">
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
														Sở thích
													</div>
												</h3>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Đi du lịch
													<br />- Đọc sách về kinh doanh
													<br />- Xem thời sự
													<br />{' '}
												</span>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle">
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
														Người tham chiếu
													</div>
												</h3>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													Ông Nguyễn Tuấn Anh
													<br />
													Giám đốc điều hành Công ty TNHH CV365
													<br />
													Số điện thoại: 1285 358 947
													<br />{' '}
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div id="cv-content" style={{ paddingBottom: 1013 }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block" />
							</div>
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
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
