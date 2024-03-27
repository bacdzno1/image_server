export default function CV({ html }: { html: any }) {
	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					hàng không
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile"></div>
					</div>
					<div className="clr" />
					<div id="cv-main">
						<div className="avt">
							<div id="cvo-profile-avatar-wraper">
								<div className="wimg">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
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
						<div id="inside"></div>
						<div className="clr" />
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
										<div className="cum2">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Sử dụng kỹ năng chuyên môn nghiệp vụ đảm bảo an ninh, an toàn cho cảng hàng không.&nbsp;&nbsp;
											<br />- Có cơ hội thăng tiến trở thành trưởng phòng giám sát an ninh sân bay trong vòng 1 năm tới.&nbsp;{' '}
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
										<div className="cum3">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Kỹ năng
												</span>
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
													&nbsp;Kỹ năng giao tiếp
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
													Kỹ năng giải quyết vấn đề
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
													Kỹ năng sử dụng hành thạo tin học văn phòng
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
													Có khả năng làm việc dưới áp lực cao
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
										<div className="cum4">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chiến sĩ thi đua quản lý hoạt động bay tại Cảng hàng không quốc tế CV365
											<br />- Sinh viên giỏi của trường{' '}
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
										<div className="cum5">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Tin học văn phòng trình độ B<br />- Chứng chỉ tiếng Anh TOEIC đạt 750 điểm.{' '}
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
										<div className="cum6">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Thích đi du lịch
											<br />- Tham gia vào các Câu lạc bộ phát triển kỹ năng{' '}
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
										<div className="cum7">
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Bà: Hà Ngọc Ánh&nbsp;
											<br />
											Giám đốc sân bay quốc tế CV365
											<br />
											0985 237 168{' '}
										</div>
										<div className="clr" />
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
					</div>
					<div id="cv-content">
						<div id="box01" className="block cvo-block box-contact">
							{' '}
							<div id="prof">
								<div className="ic">
									<p className="icf">
										<i className="fa"></i>
									</p>
									<p className="icoweb">
										<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
											02/05/1995
										</span>
									</p>
								</div>
								<div className="ic">
									<div className="icf">
										<i className="fa"></i>
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
										<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
									</p>
								</div>
								<div className="ic">
									<p className="icf">
										<i className="fa"></i>
									</p>
									<p className="icoweb">
										<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
											Đaoduyanh1990@gmail.com
										</span>
									</p>
								</div>
								<div className="ic">
									<p className="icf">
										<i className="fa"></i>
									</p>
									<p className="icoweb">
										<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
									</p>
								</div>
								<div className="clr" />
							</div>
						</div>
						<div className="clr" />
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
								{/* <div class="sum"> */}
								{/* <div class="sumic1"></div> */}
								<div className="head">
									<div className="text1" />
									<div className="div-text">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Trình độ học vấn
										</span>
									</div>
								</div>
								{/* </div> */}
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
												Học việc Hàng không&nbsp;
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên ngành: An ninh hàng không&nbsp;
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Tốt nghiệp loại Giỏi, điểm trung bình 8.0{' '}
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
								{/* <div class="sum"> */}
								{/* <div class="sumic2"></div> */}
								<div className="head">
									<div className="text2" />
									<div className="div-text">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Kinh nghiệm làm việc
										</span>
									</div>
								</div>
								{/* </div> */}
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
												Cảng hàng không quốc tế CV365&nbsp;
												<br />
												Thời gian: 06/2017 đến nay
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên an ninh kiểm soát&nbsp;
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Sử dụng kỹ năng nghiệp vụ nhằm đảm bảo an ninh hàng không. Phòng ngừa, phát hiện và ngăn chặn kịp thời các hành vi vi phạm
												trật tự an toàn an ninh hàng không.&nbsp;
												<br />- Sử lý các trường hợp vi phạm quy định an ninh hàng không theo các chức năng thẩm quyền.&nbsp;
												<br />- Phối hợp cùng các lực lượng tự vệ sẵn sàng chiến đấu bảo vệ doanh nghiệp.&nbsp;
												<br />- Tham gia lực lượng phòng cháy chữa cháy chuyên ngành của Cảng đảm bảo công tác khẩn nguy sân bay, phòng chống lụt bão,
												tìm kiếm cứu hộ cứu nạn và các nhiệm vụ khác khi được phân công.&nbsp;{' '}
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
								{/* <div class="sum"> */}
								{/* <div class="sumic3"></div> */}
								<div className="head">
									<div className="text3" />
									<div className="div-text">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Hoạt động
										</span>
									</div>
								</div>
								{/* </div> */}
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
												Tham gia vào Nhóm tình nguyện Học viện Hàng không:&nbsp;
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Quyên góp, hỗ trợ quần áo và đồ ăn cho người vô gia cư sinh sống xung quanh địa bàn thành phố Hồ Chí Minh.&nbsp;
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Tham gia vào nhóm tình nguyện viên hiến máu nhân đạo
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
								{/* <div class="sum"> */}
								{/* <div class="sumic4"></div> */}
								<div className="head">
									<div className="text4" />
									<div className="div-text">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Dự án tham gia
										</span>
									</div>
								</div>
								{/* </div> */}
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
												Dự án Mở rộng hoạt động đảm bảo an ninh sân bay tại Cảng hàng không quốc tế CV365{' '}
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vai trò: Nhân viên anh ninh kiểm soát
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Kết quả: Phát triển và ứng dụng thành công dự án trong quản lý hoạt động bay và an ninh mặt đất của Cảng.&nbsp;{' '}
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
								{/* <div class="sum"> */}
								{/* <div class="sumic5"></div> */}
								<div className="head">
									<div className="text5" />
									<div className="div-text">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Thông tin thêm
										</span>
									</div>
								</div>
								{/* </div> */}
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
