const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					Trợ giảng Tiếng Anh
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
									<div className="chu">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
										</h1>
										<div className="clr" />
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
										</h2>
									</div>
									<div id="box-hvt">
										<div className="infor_title">thông tin liên hệ</div>
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
															Nữ
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
												<div className="ic1">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															04/11/1999
														</span>
													</div>
												</div>
												<div className="ic4">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
															test@gmail.com
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
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '28.85px' }}>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '7.8875px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.25833px' }}>
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
														Đại học Thương Mại (9/2017-9/2021)
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														2018 - 2022
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Tiếng Anh Thương Mại
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Điểm trung bình: 8.1{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '7.8875px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.25833px' }}>
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
														Trung tâm tiếng anh Apax English
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														2018 - 2022
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thời gian: 7/2018-7/2019
														<br />
														Vị trí: Trợ giảng tiếng anh
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													-Chuẩn bị tài liệu học tập theo yêu cầu của giáo viên
													<br />
													-Giúp đỡ học viên trong việc tiếp thu bài học
													<br />
													-Hỗ trợ quản lí và tổ chức các hoạt động trong lớp học{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '5.25833px' }}>
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
														Gia sư Tiếng anh tại nhà cho học sinh THCS và THPT
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														2018 - 2022
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thời gian: 1/10/2017 – 05/05/2018
														<br />
														Vị trí: gia sư
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Gia sư tại nhà cho các em học sinh học THCS, THPT
													<br />- Giúp các em học sinh ôn luyện đề thi tiếng Anh
													<br />- Hình thành các kỹ năng nghe – nói – đọc – viết tiếng Anh cho học sinh{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '14.425px' }}>
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
                                                      <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="Tiêu đề" class="box-title"></div></div> */}
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.425px' }}>
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
													style={{ marginTop: '14.425px' }}
												>
													- Mục tiêu ngắn hạn: tìm môi trường phát triển kĩ năng Tiếng Anh của bản thân, bên cạnh đó giúp bản thân hoàn thiện thêm
													những kĩ năng mềm cần thiết cho công việc tương lai.
													<br />- Mục tiêu dài hạn: Gắn bó với công việc trợ giảng, và sau khi ra trường có thể trở thành giáo viên chính thức tại
													trung tâm.{' '}
												</div>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '14.425px' }}>
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
															Kỹ năng giao tiếp Tiếng Anh tốt
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
															Kỹ năng quản lý thời gian tốt
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
															Có trình độ tin học văn phòng
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
															Kỹ năng quản lý lớp học
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
															Có khả năng tổ chức và sắp xếp công việc
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
															Sẵn sàng làm việc ngoài giờ nếu được công ty yêu cầu
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
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-content" style={{ paddingBottom: '558.4px' }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
												<h3>
													<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
														Tham gia chiến dịch “Mùa hè xanh năm 2018” tại Trường đại học với vị trí tình nguyện viên{' '}
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														2018 - 2022
													</span>
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
													Tham gia câu lạc bộ Tiếng Anh tại trường đại học{' '}
												</div>
											</div>{' '}
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
														Dự án “Nghiên cứu phương pháp học tiếng anh hiệu quả dành cho các bạn sinh viên”
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														2018 - 2022
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vai trò: Người đóng góp ý tưởng
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Kết quả: Đã nghiên cứu được những phương pháp học tiếng anh hiệu quả áp dụng cho từng nhóm đối tượng sinh viên, và giúp được
													hàng nghìn sinh viên cải thiện được trình độ tiếng anh.{' '}
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
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Giải thưởng
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Giải ba Cuộc thi hùng biện Tiếng Anh tại trường Đại học Thương Mại năm 2018
													<br />- Chứng nhận thành viên xuất sắc của câu lạc bộ tiếng anh tại trường đại học Thương Mại năm 2019{' '}
												</div>
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
													<div className="cumicc5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Chứng chỉ
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Ielts 6.5- Toeic 800
													<br />- Chứng chỉ tin học văn phòng{' '}
												</div>
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
													<div className="cumicc6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Sở thích
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Tham gia hoạt động ngoại khóa
													<br />- Đi du lịch
													<br />- Đọc báo tiếng anh{' '}
												</div>
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
													<div className="cumicc7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Người tham chiếu
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													Bà Nguyễn Thùy Trang
													<br />
													Trưởng phòng nhân sự Trung tâm Apax English
													<br />
													Số điện thoại: 0967962811{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
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

export default CV
