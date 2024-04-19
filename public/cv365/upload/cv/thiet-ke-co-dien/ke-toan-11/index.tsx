
interface Props {
	html: any
	in4CV: any
	in4user: any
	dataCvMau: any
	lang: any
	setHtml: any
	setshowmodal: any
	showmodal: any
	setshowZoomCV: any
	editImg: any
	setEditImg: any
}
export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }: Props) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV" />
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
										<div className="fake_img" />
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
										</h2>
									</div>
									<div className="box-dm" />
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '23.85px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '14.1375px' }}>
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
												</div>
												{/* <div class="ifoic"></div> */}
												<div className="tt-box1">
													<div className="cumicc1" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Thông tin liên hệ
													</div>
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf1">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
																Nữ
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf2">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
																19/05/1992
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf3">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
														</div>
													</div>
													<div className="ic">
														<div className="icf4">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
																test@gmail.com
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf5">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
														</div>
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.1375px' }}>
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
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Mục tiêu nghề nghiệp
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '14.1375px' }}
												>
													Mục tiêu ngắn hạn:Tìm được môi trường làm việc mới phù hợp, với những kiến thức và kinh nghiệm có được về công việc kế toán.
													Tôi mong muốn rằng sẽ đóng góp trong sự phát triển của công ty trong tương lai.
													<br />
													Mục tiêu dài hạn: Trở thành kiểm toán viên{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.8875px' }}>
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
										</div>
										<div className="head">
											<div className="icright1" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '17.8875px' }}>
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
														Chuyên ngành: Kế toán (10/2010 - 05/2014)&nbsp;
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
										<div className="form" />
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.8875px' }}>
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
										</div>
										<div className="head">
											<div className="icright2" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '17.8875px' }}>
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
														Công ty cổ phần CV365
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Kế toán tổng hợp
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tổng hợp doanh thu và toàn bộ các hoạt động sản xuất kinh doanh của Công ty.
													<br />- Lập báo cáo tài chính, báo cáo quản trị, báo cáo thuế theo đúng quy định pháp luật và yêu cầu của công ty.
													<br />- Chịu trách nhiệm thực hiện các công việc liên quan đến thuế: Giải trình số liệu, làm việc với cơ quan thuế…
													<br />- Kiểm soát thu – chi và chi phí
													<br />- Hỗ trợ Giám đốc thực hiện các giao dịch (các vấn đề phát sinh) với ngân hàng.{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{ paddingBottom: '93.4px' }}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '-11.8px' }}>
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
												<div className="ski">
													<div className="skic" />
													<div className="cumicc3" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Kỹ năng
													</div>
												</div>
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
															Tiếng Anh giao tiếp
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-11.8px' }}>
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Giải thưởng
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '-11.8px' }}
												>
													- Giải ba đề tài nghiên cứu khoa học sinh viên cấp trường.
													<br />- Bằng khen của Đoàn trường, Thành Đoàn Hà Nội vì có thành tích xuất sắc trong quá trình tham gia công tác đoàn đội
													tại trường đại học.{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-11.8px' }}>
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
													<div className="cumicc5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Chứng chỉ
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '-11.8px' }}
												>
													- Chứng chỉ kế toán tổng hợp
													<br />- Chứng chỉ ứng dụng công nghệ thông tin cơ bản
													<br />- Chứng chỉ tiếng anh B1{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-11.8px' }}>
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
													<div className="cumicc6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Sở thích
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '-11.8px' }}
												>
													- Đọc sách
													<br />- Xem phim
													<br />- Chụp ảnh
													<br />- Tình nguyện{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-11.8px' }}>
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
													<div className="cumicc7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Người tham chiếu
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '-11.8px' }}
												>
													Nguyễn Thị B&nbsp; <br />– Kế toán trưởng <br />
													Công ty CP CV365
													<br />
													SĐT: 0982.079.209{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '-6.95px' }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: '-6.95px' }}>
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
														Vị trí: Nhân viên kế toán&nbsp;
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Kế toán tiền lương và bảo hiểm của các nhân viên trong công ty
													<br />- Theo dõi, kiểm tra và tổng hợp chứng từ kế toán
													<br />- Quản lý Thu – Chi, tổng hợp và báo cáo quỹ tiền mặt mỗi ngày lên BGĐ
													<br />- Hỗ trợ giải quyết các vấn đề phát sinh khác trong quá trình làm việc dưới sự chỉ đạo của kế toán trưởng{' '}
												</div>
											</div>
										</div>
										<div className="form" />
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '-6.95px' }}>
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
										</div>
										<div className="head">
											<div className="icright3" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Hoạt động
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '-6.95px' }}>
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
														Tình nguyện viên
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia CLB Hiến máu tình nguyện 4 năm liên tiếp tại trường Đại học
													<br />- Bánh trưng ngày tết quê em năm 2018{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: '-6.95px' }}>
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
										</div>
										<div className="head">
											<div className="icright4" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Dự án tham gia
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '-6.95px' }}>
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
														Sunny Way (2014 - 2015)
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Khách hàng :Công ty cổ phần thanh toán Hưng Hà.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia nghiên cứu khoa học cấp trường tổ chức
													<br />
													Đề tài: Kế toán quản trị chi phí&nbsp; tại Công ty cổ phần thanh toán Hưng Hà.
													<br />- Dự án “ Ngày tết quê em năm 2018” <br />– Địa điểm: Sơn Tây, Hà Nội
													<br />
													Vai trò: Quản lý thu – chi của dự án, liên hệ và làm việc với các mạnh thường quân.{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
									</div>
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: '-6.95px' }}>
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
										</div>
										<div className="head">
											<div className="icright5" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Thông tin thêm
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '-6.95px' }}>
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
										<div className="form" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer">{/*  */}</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					{/* <div id="MAIN"> */}
					<div className="watermark">∴ Timviec365.vn</div>
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
