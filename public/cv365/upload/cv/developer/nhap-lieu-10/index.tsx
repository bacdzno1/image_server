const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV nhập liệu
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="info">
									<div id="cam" />
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
								</div>
								<div className="box-01">
									<div id="box01" className="block cvo-block box-contact">
										{' '}
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Thông tin liên hệ
											</div>
										</h3>
										<div id="prof">
											{/* <div class="ic">
                              <div class="icf"><i class="fa">&#xf228;</i></div>
                              <p class="icoweb"><span id="cv-profile-sex" cvo-placeholder="Giới tính" contenteditable="true">Nam</span></p>
                          </div>
                          <div class="ic">
                              <p class="icf"><i class="fa">&#xf1fd;</i></p>
                              <p class="icoweb"><span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contenteditable="true">19/05/1992</span></p>
                          </div> */}
											<div className="ic1">
												<p className="icf">
													<i className="fa" />
												</p>
												<p className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
												</p>
											</div>
											<div className="ic2">
												<p className="icf">
													<i className="fa" />
												</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
												</p>
											</div>
											<div className="ic3">
												<p className="icf">
													<i className="fa" />
												</p>
												<p className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
														test@gmail.com
													</span>
												</p>
											</div>
											<div className="clr" />
										</div>
									</div>
								</div>
								<div id="box-hvt">
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
									</h1>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
									</h2>
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '25.6px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '1.1625px' }}></div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '1.1625px' }}>
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
													<h3>
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Mục tiêu nghề nghiệp
														</div>
													</h3>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '1.1625px' }}
												>
													Giúp công ty nhập vào các số liệu đúng chuẩn để đảm bảo quá trình làm việc không diễn ra sai sót. <br />
													Mong muốn gắn bó lâu dài và trở thành quản lý trong lĩnh vực quản lý dữ liệu của công ty.
													<br />{' '}
												</div>
												<div className="clr" />
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '1.1625px' }}>
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
															Sử dụng thành thạo các thao tác máy tính cơ bản
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
															Tính cách cẩn thận, phong cách làm việc chăm chỉ
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
															Tính kiên nhẫn cao, làm được công việc mang tính chất lặp đi lặp lại
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '1.1625px' }}>
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
													<h3>
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Giải thưởng
														</div>
													</h3>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '1.1625px' }}
												>
													- Nhận khen thưởng nhân viên tiêu biểu hàng tháng tại Công ty TNHH MTV CV365.
													<br />- Hội viên ưu tú, tích cực của Đội Sinh viên tình nguyện Trường Đại học Kinh tế Hồ Chí Minh.
													<br />{' '}
												</div>
												<div className="clr" />
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '19.2px' }}>
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
											{/*                  */}
											<div className="head">
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
													Trình độ học vấn
												</span>
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '9.6px' }}>
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
														Đại học Kinh tế Thành phố Hồ Chí Minh
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Chuyên ngành: Ngoại thương
														</span>
													</p>
													<div
														className="exp-content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														Tốt nghiệp loại Khá, điểm trung bình 7.16{' '}
													</div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '19.2px' }}>
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
											{/*                  */}
											<div className="head">
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
													Kinh nghiệm làm việc
												</span>
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '9.6px' }}>
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
														Công ty TNHH MTV CV365
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vị trí: Trưởng nhóm đội bán hàng
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														- Tư vấn, giới thiệu sản phẩm, trả lời các thắc mắc của khách hàng <br />- Theo dõi số lượng hàng tồn kho, phụ trách lên
														đơn đặt hàng cho ngành hàng.
														<br />- Làm việc cùng các nhà cung cấp sản phẩm
														<br />{' '}
													</div>
												</div>
												<div className="clr" />
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '9.6px' }}>
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
														Công ty TNHH AB CV365
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vị trí: Nhân viên chứng từ
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														- Làm chứng từ xuất nhập khẩu
														<br />- Báo cáo tình hình xuất nhập khẩu hàng tháng
														<br />- Làm việc với phía khách hàng và nhà cung cấp&nbsp;{' '}
													</div>
												</div>
												<div className="clr" />
											</div>
											<div id="exp3" className="ctbx experience" style={{ marginTop: '9.6px' }}>
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
														Cửa hàng CV365
													</div>
												</h3>
												<div className="w-exp">
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
														- Bán hàng tại cửa hàng
														<br />- Tư vấn, giới thiệu và quảng bá sản phẩm trên kênh facebook của cửa hàng và chăm sóc khách hàng qua điện thoại
														<br />- Làm báo cáo sản lượng hàng bán ra mỗi ngày.
														<br />{' '}
													</div>
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
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{ paddingBottom: '452.4px' }}>
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
												<div className="cum">
													<h3>
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Chứng chỉ
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
													- Chứng chỉ Tin học ứng dụng trình độ A{' '}
												</div>
												<div className="clr" />
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
												<div className="cum">
													<h3>
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Sở thích
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
													- Nghe nhạc
													<br />- Vẽ
													<br />- Nấu ăn
													<br />{' '}
												</div>
												<div className="clr" />
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
												<div className="cum">
													<h3>
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Người tham chiếu
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 0 }}>
													Ông Dương Quốc Hùng
													<br />
													Giám đốc điều hành Công ty TNHH AB CV365
													<br />
													Số điện thoại: 0983 218 145
													<br />{' '}
												</div>
												<div className="clr" />
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
											{/*                  */}
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
														- Tình nguyện viên tham gia các chương trình thiện nguyện:
													</div>
												</h3>
												<div className="w-exp">
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
														+ Phát cháo cho người vô gia cư
														<br />+ Dạy học tình nguyện tại trại trẻ mồ côi&nbsp;&nbsp;
														<br />- Tham gia hỗ trợ nhiều chương trình Ngoại khóa của đoàn trường Đại học Kinh tế Thành phố Hồ Chí Minh.
														<br />+ Hỗ trợ các công tác truyền thông của Đoàn trường
														<br />+ Xây dựng các tiết mục ngoại khóa, văn nghệ chào mừng các dịp lễ
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
											{/*                  */}
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
														Cải thiện kỹ năng nhập liệu cho nhân viên tại Công ty TNHH MTV CV365
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vai trò: hướng dẫn đội ngũ nhân viên đang làm việc tại công ty những thao tác nhập liệu đúng chuẩn, nhanh chóng và bật
															mí các mẹo để tránh sai sót.
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														Kết quả: Các dữ liệu công ty đã được đảm bảo đúng tiêu chuẩn và hạn chế sai sót, từ đó hiệu quả công việc ở các khâu tiếp
														theo đạt được theo đúng kế hoạch đề ra.{' '}
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
											{/*                  */}
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
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="clr" />
					<div id="footer">
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

export default CV
