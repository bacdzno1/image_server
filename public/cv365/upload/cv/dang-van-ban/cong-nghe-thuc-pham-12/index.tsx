export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					công nghệ thực phẩm
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div className="anh">
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
											<div className="fake_img" />
										</div>
									</div>
									<div className="ifo">
										<div className="chu">
											<h1>
												<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
											</h1>
											<div className="clr" />
											<h2>
												<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
											</h2>
											<div className="clr" />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											{' '}
											<div id="prof">
												<div className="ic2">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
															Nam
														</span>
													</div>
												</div>
												<div className="ic1">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															25/7/1993
														</span>
													</div>
												</div>
												<div className="ic3">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
													</div>
												</div>
												<div className="ic4">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
															duongnhan123@gmal.com
														</span>
													</div>
												</div>
												<div className="ic5">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
													</div>
												</div>
												<div className="clr" />
											</div>
											{/* add div */}
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}>
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
												{/* <div class="tt-box1">
                                                          <div class="cumicc1"></div>
                                                          <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="Tiêu đề" class="box-title">Thông tin liên hệ</div></div> */}
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
												<div className="cum">
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Mục tiêu nghề nghiệp
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Mục tiêu ngắn hạn: <br />- Nỗ lực hoàn thành tốt mọi nhiệm vu đã được phân công.
															<br />- Trau dồi và rèn luyện các kỹ năng mềm thông qua môi trường làm việc.
															<br />- Liên tục được bổ sung các kiến thức chuyên môn trong lĩnh vực công nghệ thực phẩm.
															<br /> Mục tiêu dài hạn: <br />- Trở thành chuyên gia kỹ thuật chế biến với nền tảng tay nghề đẳng cấp.
															<br />- Phát triển thêm các ngành liên quan như: dược phẩm, thực phẩm,...
															<br />- Không ngừng đóng góp cho sự phát triển chung của doanh nghiệp.{' '}
														</div>
													</div>
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '31.5px' }}>
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
												Kinh nghiệm làm việc
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.75px' }}>
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
														Công ty Cổ phần dinh dưỡng CV365
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														7/2017 - nay
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Nhân viên dinh dưỡng về thực phẩm
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Phát triển sản phẩm mới và nghiên cứu ứng dụng công nghệ từ lập kế hoạch cho đến hoàn thiện.
													<br />- Phân tích, lựa chọn và quyết định nguyên liệu cung cấp đầu vào chất lượng, hợp lý.
													<br />- Trực tiếp tham gia kiếm soát và đánh giá chất lượng thành phẩm.
													<br />- Xây dựng quy chuẩn đánh giá chất lượng đầu vào cho nguyên liệu và đầu ra cho sản phẩm. <br />- Hỗ trợ kỹ thuật sản
													phẩm.
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '15.75px' }}>
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
														Công ty CP thực phẩm sạch CV365
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														7/2016 - 6/2017
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Nhân viên QC
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Kiện toàn quy trình sản xuất và quản lý quy trình sản xuất.
													<br />- Kiểm tra, giám sát chất lượng sản phẩm trong các công đoạn phân công theo tiêu chuẩn kểm tra.
													<br />- Giám sát việc xuất hàng: Để hàng hóa lên xe, kệ, vệ sinh xe và thùng lạnh sạch sẽ, thùng lạnh của xe đảm bảo nhiệt
													độ.
													<br />- Kết hợp với xướng sản xuất xử lý dứt điểm các lỗi không phù hợp.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '9.1px' }}>
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
															- Tin học văn phòng
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
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
															- Kỹ năng giao tiếp
														</p>
														<div className="bar-exp">
															<div style={{ width: '40%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={40} />
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
															- Kỹ năng thuyết trình
														</p>
														<div className="bar-exp">
															<div style={{ width: '40%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={40} />
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
															- Kỹ năng tiếng Anh
														</p>
														<div className="bar-exp">
															<div style={{ width: '40%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={40} />
														</div>
														<div className="exp-fake" />
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '9.1px' }}>
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
														Chứng chỉ
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '9.1px' }}
														>
															- TOEIC 500
															<br />- Tin học ứng dụng A{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '9.1px' }}>
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
														Giải thưởng
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '9.1px' }}
														>
															- Đạt giải Nhì trong cuộc thi “Sáng tạo cùng SV công nghệ sinh học năm 2015”. <br />- Đạt bằng khen “Sinh viên 5 tốt cấp
															trường” 2 năm liền 2011, 2012. <br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '9.1px' }}>
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
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '9.1px' }}
														>
															- Sưu tầm các sách về công nghệ thực phẩm.
															<br />- Du lịch, làm tình nguyện.
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '9.1px' }}>
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
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '9.1px' }}
														>
															- Ông Ngô Thành Đạt
															<br />- Trưởng phòng kiểm định chất lượng tại Công ty CP dinh dưỡng CV365
															<br />
															Số điện thoại: 0912 777 888
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: 300 }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
												Trình độ học vấn
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
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
														Đại học Công nghiệp thực phẩm TP.HCM
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														8/2011 - 6/2015
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Công nghệ thực phẩm
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Xếp loại: Giỏi
													<br />
													Điểm trung bình: 8.1{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia dự án “Mùa hè xanh”: làm công tác vệ sinh, xây dựng đường, nhà, dọn dẹp vệ sinh và hỗ trợ công cụ học tập, dạy
													học,... cho các dân cư tại các xã nghèo.{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia các câu lạc bộ: CLB công nghệ sinh học, CLB tiếng Anh giao tiếp, CLB hiến máu tình nguyện.{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
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
														- Dự án nghiên cứu công nghệ kiểm định thực phẩm tại Công ty Cổ phần dinh dưỡng CV365.
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vai trò: chuyên viên dinh dưỡng tại Công ty.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Kết quả: ứng dụng các công nghệ kiểm định tối tân, thúc đẩy năng suất làm việc và cải thiện rủi ro cho sản phẩm.{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
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
														Thêm những thông tin khác ( nếu có )
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
							<div className="clr" />
						</div>
						<div className="footer">
							<div className="watermark">© Timviec365.vn</div>
						</div>
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
