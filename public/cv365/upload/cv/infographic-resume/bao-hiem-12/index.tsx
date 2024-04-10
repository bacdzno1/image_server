const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV Bảo hiểm
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src=" images/no_avatar.jpg " />
									</div>
									<div className="box-dm" />
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
								<div className="clr" />
							</div>
						</div>
					</div>
					<div className="all">
						<div id="cv-main">
							<div id="cv-right">
								<div className="ir">
									<div id="sortable">
										<div id="box01" className="block cvo-block box-contact">
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
													THÔNG TIN LIÊN HỆ
												</div>
											</div>
											<div id="prof">
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															13/05/1992
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
															Nữ
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
															Thutrang@gmail.com
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
													</div>
												</div>
												<div className="clr" />
											</div>
											<div className="clr" />
										</div>
										<div id="box02" className="block cvo-block">
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
													MỤC TIÊU NGHỀ NGHIỆP
												</div>
											</div>
											<div className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												- Tìm kiếm được tập khách hàng tiềm năng&nbsp;
												<br />- Có thể tiếp cận xây dựng mối quan hệ với khách hàng tốt đẹp, thu hút được nhiều khách hàng sử dụng sản phẩm bảo hiểm
												mà công ty cung cấp
												<br />- Được thăng tiến xứng đáng với những cống hiến trong công việc{' '}
											</div>
										</div>
										<div id="box03" className="block cvo-block box-skills">
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
													KỸ NĂNG
												</div>
											</div>
											<div className="exp content-edit skill">
												<div className="ctbx">
													<div className="fieldgroup_controls">
														<div className="clone">
															<i className="fa fa-plus" /> Thêm
														</div>
														{/* <div class="edit js-edit-content"> Sửa</div> */}
														<div className="remove">
															<i className="fa fa-minus" /> Xóa
														</div>
													</div>
													<p className="skill-name" cv-form-field="true" contentEditable="true">
														Kỹ năng giao tiếp
													</p>
													{/* <div class="bar-exp">
                                                  <div style="width: 50%"></div>
                                              </div> */}
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={50} />
													</div>
												</div>
												<div className="ctbx">
													<div className="fieldgroup_controls">
														<div className="clone">
															<i className="fa fa-plus" /> Thêm
														</div>
														{/* <div class="edit js-edit-content"> Sửa</div> */}
														<div className="remove">
															<i className="fa fa-minus" /> Xóa
														</div>
													</div>
													<p className="skill-name" cv-form-field="true" contentEditable="true">
														Khả năng thuyết trình{' '}
													</p>
													{/* <div class="bar-exp">
                                                  <div style="width: 80%"></div>
                                              </div> */}
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</div>
												</div>
												<div className="ctbx">
													<div className="fieldgroup_controls">
														<div className="clone">
															<i className="fa fa-plus" /> Thêm
														</div>
														{/* <div class="edit js-edit-content"> Sửa</div> */}
														<div className="remove">
															<i className="fa fa-minus" /> Xóa
														</div>
													</div>
													<p className="skill-name" cv-form-field="true" contentEditable="true">
														Kỹ năng giải quyết vấn đề
													</p>
													{/* <div class="bar-exp">
                                                  <div style="width: 60%"></div>
                                              </div> */}
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={60} />
													</div>
												</div>
												<div className="ctbx">
													<div className="fieldgroup_controls">
														<div className="clone">
															<i className="fa fa-plus" /> Thêm
														</div>
														{/* <div class="edit js-edit-content"> Sửa</div> */}
														<div className="remove">
															<i className="fa fa-minus" /> Xóa
														</div>
													</div>
													<p className="skill-name" cv-form-field="true" contentEditable="true">
														Có khả năng làm việc dưới áp lực cao
													</p>
													{/* <div class="bar-exp">
                                                  <div style="width: 80%"></div>
                                              </div> */}
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</div>
												</div>
												<div className="clr" />
											</div>
										</div>
										<div id="box04" className="block cvo-block">
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
													GIẢI THƯỞNG
												</div>
											</div>
											<div className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												- Giải nhất tin học văn phòng với điểm số 8.2
												<br />- Sinh viên giỏi của trường{' '}
											</div>
										</div>
										<div id="box05" className="block cvo-block">
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
													CHỨNG CHỈ
												</div>
											</div>
											<div className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												- Tin học văn phòng trình độ B<br />- Chứng chỉ tiếng Anh{' '}
											</div>
										</div>
										<div id="box06" className="block cvo-block">
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
													SỞ THÍCH
												</div>
											</div>
											<div className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												- Thích đi du lịch
												<br />- Tham gia vào các Câu lạc bộ phát triển kỹ năng{' '}
											</div>
										</div>
										<div id="box07" className="block cvo-block">
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
													NGƯỜI THAM CHIẾU
												</div>
											</div>
											<div className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												Bà Trần Minh Thư
												<br />
												Giám đốc Công ty Bảo hiểm CV365
												<br />
												0985 237 168{' '}
											</div>
										</div>{' '}
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div id="cv-content">
							<div className="ir" id="sort_block">
								<div id="block01" className="cvo-block">
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
											TRÌNH ĐỘ HỌC VẤN
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
													Cao đẳng kinh tế Thành phố Hồ Chí Minh
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên ngành: Ngoại thương xuất nhập khẩu
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
								<div id="block02" className="cvo-block">
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
											KINH NGHIỆM LÀM VIỆC
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
													Chi nhánh Ngân hàng VietinBank
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													2011 - 2012
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên kinh doanh
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Giới thiệu sản phẩm về bảo hiểm của Vietinbank đến khách hàng
												<br />- Tìm kiếm và chăm sóc khách hàng
												<br />- Làm hồ sơ theo yêu cầu, theo dõi, hỗ trợ khách hàng, hoàn thiện hồ sơ theo yêu cầu từ bộ phận thẩm định
												<br />- Hỗ trợ khách hàng trong việc giải quyết quyền lợi bảo hiểm phát sinh
												<br />- Đảm bảo doanh số kinh doanh theo từng quý, từng năm
												<br />- Báo cáo kết quả mỗi ngày cho quản lý{' '}
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
												<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
													Ngân hàng Eximbank
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													2011 - 2012
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên kinh doanh
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Giới thiệu sản phẩm bảo hiểm tới tập khách hàng của Eximbank
												<br />- Chăm sóc và tư vấn khách hàng
												<br />- Tìm kiếm khách hàng tiềm năng
												<br />- Thực hiện hồ sơ theo yêu cầu, hỗ trợ khách hàng giải quyết các vấn đề phát sinh{' '}
											</div>
										</div>{' '}
									</div>
								</div>
								<div id="block03" className="cvo-block">
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
											HOẠT ĐỘNG
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
													- Tham gia vào nhóm tình nguyện viên hiến máu nhân đạo
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Tham gia vào Nhóm tình nguyện Sao Khuê
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Làm nhiệm vụ phân phát thức ăn, quần áo quyên góp đến những người vô gia cư
												<br />{' '}
											</div>
										</div>{' '}
									</div>
								</div>
								<div id="block04" className="cvo-block">
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
											DỰ ÁN THAM GIA
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
													Dự án Mở rộng khách hàng tại Công ty bảo hiểm CV365
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vai trò: Nhân viên kinh doanh và quản lý tệp khách hàng cũ tại Công ty
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Kết quả: Phát triển thành công tệp khách hàng tiềm năng, vượt data 20%{' '}
											</div>
										</div>{' '}
									</div>
								</div>
								<div id="block05" className="cvo-block">
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
											THÔNG TIN THÊM
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
						<div className="clr" />
					</div>
					<div className="footer">
						<div className="watermark">∴ Timviec365.vn</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CV
