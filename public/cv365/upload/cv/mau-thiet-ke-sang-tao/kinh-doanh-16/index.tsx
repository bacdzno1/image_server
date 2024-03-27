export default function CV({ html }: { html: any }) {
	return (
		<div id="page-cv">
			<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
				Kinh doanh 16
			</div>
			<div id="form-cv">
				<div className="cv_page height_page" data-page={1}>
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box-hvt">
									<h1>
										<div id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
									</h1>
									<p></p>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển">
											NHÂN VIÊN CHĂM SÓC KHÁCH HÀNG
										</span>
									</h2>
									<p />
									<p>
										<span id="cv-profile-about" />
									</p>
								</div>
								<div id="cvo-profile-avatar-wraper">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
								</div>
								<div className="box-dm" />
								<div className="clr" />
							</div>
						</div>
					</div>
					<div className="all" style={{ paddingTop: '16.25px' }}>
						<div id="cv-main" style={{}}>
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="connectedSortable sortable ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '2.96875px' }}>
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Thông tin liên hệ
												</span>
											</h3>
											<div id="prof">
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															19/05/1992
														</span>
													</p>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<p className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
															Nam
														</span>
													</p>
												</div>
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true">
															098567567567
														</span>
													</p>
												</div>
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
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
														<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true">
															Số 1 đường Cầu Giấy
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
										</div>
										<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '2.96875px' }}>
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
													Mục tiêu nghề nghiệp
												</div>
											</h3>
											<div
												className="box-content err_cv_content"
												cvo-placeholder="Nội dung"
												contentEditable="true"
												style={{ marginTop: '2.96875px' }}
											>
												Khẳng định giá trị bản thân trong công việc là mục tiêu hàng đầu của tôi. Trong 2 năm tới, với những kinh nghiệm đã có, sự cố
												gắng trau dồi kiến thức và sự đam mê trong công việc, tôi tự tin mình sẽ trở thành 1 trưởng phòng CSKH trong tương lai.{' '}
											</div>
										</div>
										<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '2.96875px' }}>
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
														Tin học văn phòng
													</p>
													<div className="bar-exp">
														<div style={{ width: '50%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={50} />
													</div>
													<div className="exp-fake" />
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
														Tiếng anh giao tiếp
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
										<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '2.96875px' }}>
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
													Giải thưởng
												</div>
											</h3>
											<div
												className="box-content err_cv_content"
												cvo-placeholder="Nội dung"
												contentEditable="true"
												style={{ marginTop: '2.96875px' }}
											>
												- Đạt giải best seller trong tổ kinh doanh
												<br />- Thành viên tích cực trong CLB Sinh viên năng động
												<br />{' '}
											</div>
										</div>{' '}
									</div>
								</div>
							</div>
						</div>
						<div id="cv-content" style={{}}>
							<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
								<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '8.125px' }}>
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
										<div id="exp1" className="ctbx experience" style={{ marginTop: '6.09375px' }}>
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
												Xếp loại: Giỏi{' '}
											</div>
										</div>{' '}
									</div>
								</div>
								<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '8.125px' }}>
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
										<div id="exp1" className="ctbx experience" style={{ marginTop: '6.09375px' }}>
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
													Công ty&nbsp; CV 365&nbsp;
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên Chăm sóc khách hàng tại của hàng
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Trực hotline hỗ trợ khách hàng gọi điện đến
												<br />- Tư vấn khách hàng khi đến cửa hàng, hỗ trợ khách hàng test thử sản phẩm mẫu
												<br />- Theo dõi và kiểm tra số lượng hàng hóa xuất kho – bán ra trong ngày.
												<br />- Tham gia cùng đội Marketing xây dựng chiến lược để tiếp cận với khách hàng.
												<br />- Báo cáo công việc hàng ngày
												<br />{' '}
											</div>
										</div>
										<div id="exp2" className="ctbx experience" style={{ marginTop: '6.09375px' }}>
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
													CV 365 Company
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên Chăm sóc khách hàng
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Trực livechat, hotline hỗ trợ khách hàng
												<br />- Tiếp nhận danh sách khách hàng có sẵn, gọi điện tư vấn giới thiệu sản phẩm.
												<br />- Lọc ra khách hàng mục tiêu, chăm sóc khách hàng để chốt đơn.
												<br />- Hỗ trợ khách hàng trong quá trình sử dụng dịch vụ.
												<br />- Báo cáo tiến độ công việc theo ngày, báo lại Leader
												<br />{' '}
											</div>
										</div>{' '}
									</div>
								</div>
								<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '8.125px' }}>
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
										<div id="exp1" className="ctbx experience" style={{ marginTop: '6.09375px' }}>
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
													Nhóm tình nguyện CV365
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Thành viên CLB: Sinh viên năng động
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Tên hội thảo: Hội thảo Chăm sóc khách hàng để khác biệt, Nghệ thuật bán hàng và chăm sóc khách hàng …<br />{' '}
											</div>
										</div>{' '}
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
						<div id="cv-main" style={{ paddingBottom: 693 }}>
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="connectedSortable sortable ui-sortable">
										<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													Chứng chỉ
												</div>
											</h3>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
												- Chứng chỉ tin học trình độ B<br />- Chứng chỉ hoàn thành chương trình đào tạo Chăm sóc khách hàng: “ Biến khách hàng thành
												đối tác”
												<br />{' '}
											</div>
										</div>
										<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													Sở thích
												</div>
											</h3>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
												- Đọc sách
												<br />- Xem phim
												<br />- Chụp ảnh
												<br />{' '}
											</div>
										</div>
										<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													Người tham chiếu
												</div>
											</h3>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
												Nguyễn Văn B – Trưởng phòng
												<br />
												Công ty CP CV365
												<br />
												SĐT: 0123456789{' '}
											</div>
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
													Dự án: Trung thu quê em 2016
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													CLB Sinh viên năng động
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Vai trò: Thành viên trong ban tổ chức với nhiệm vụ lên kế hoạch mua đồ phục vụ cho toàn bộ dự án.{' '}
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
											<h3>
												<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
													Đại học CV365
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Thêm những thông tin khác ( nếu cần )
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Thêm những thông tin khác ( nếu cần ){' '}
											</div>
										</div>{' '}
									</div>
								</div>
							</div>
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
	)
}
