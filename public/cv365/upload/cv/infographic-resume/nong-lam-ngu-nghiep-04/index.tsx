export default function CV({ html }: { html: any }) {
	useEffect(() => {
		handleSetData(html)
	}, [html])
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV nông-lâm-ngư-nghiệp
				</div>
				<div id="form-cv">
					{/* <div id="cv-top">
      <div id="cvo-profile">


      </div>
  </div>
  <div class="clr"></div> */}
					<div id="cv-main">
						<div className="info">
							<div id="cvo-profile-avatar-wraper">
								<div className="wimg">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
								</div>
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
										<div className="cum">
											<div className="cumic2" />
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Học hỏi kinh nghiệm và kỹ năng sống ngoài thực tế để cố gắng hoàn thiện bản thân
											<br />
											Mong muốn có được một công việc phù hợp và có thể gắn bó lâu dài tại môi trường làm việc mang tính chuyên nghiệp. Phấn đấu lên
											các vị trí cấp cao hơn trong lĩnh vực nông nghiệp{' '}
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
													Kỹ năng làm việc độc lập và làm việc theo nhóm hiệu quả
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
													<div style={{ width: '60%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={60} />
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
													Khả năng giao tiếp tốt
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
													Có tư duy sáng tạo
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
											<div className="cumic4" />
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Sinh viên ứu tú của khoa&nbsp;
											<br />
											Giải nhất cuộc thi sinh viên giàu sáng kiến trong nông nghiệp{' '}
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
											<div className="cumic5" />
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Bằng tốt nghiệp Khoa học cây trồng
											<br />
											Chứng chỉ khoa học Nông học
											<br />
											Chứng chỉ tin học văn phòng
											<br />
											Chứng chỉ ngoại ngữ trình độ B{' '}
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
											<div className="cumic6" />
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Đi du lịch
											<br />- Tham gia vào các hoạt động cộng đồng{' '}
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
											<div className="cumic7" />
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</span>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Bà Hoàng Kim Cúc
											<br />
											Trưởng phòng Khuyến Nông&nbsp;
											<br />
											0654 862 789{' '}
										</div>
										<div className="clr" />
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
					</div>
					<div id="cv-content">
						<div id="box-hvt">
							<h1>
								<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
							</h1>
							<h2>
								<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
							</h2>
						</div>
						<div id="box01" className="block cvo-block box-contact">
							{' '}
							<div id="prof">
								<div className="ic">
									<p className="icf">
										<i className="fa"></i>
									</p>
									<p className="icoweb">
										<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
											05/03/1992
										</span>
									</p>
								</div>
								<div className="ic">
									<div className="icf">
										<i className="fa"></i>
									</div>
									<p className="icoweb">
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
										<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
									</p>
								</div>
								<div className="ic">
									<p className="icf">
										<i className="fa"></i>
									</p>
									<p className="icoweb">
										<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
											Minhanh@gmail.com
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
									<div className="ico-1" />
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
												Trường Đại học Nông Lâm Huế
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên ngành : Khoa học cây trồng
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Tốt nghiệp loại Khá{' '}
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
									<div className="ico-2" />
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
												Công ty Khuyến nông Việt Thành phố Hồ Chí Minh
												<br />
												Thời gian: 06/2017 – 06/2019
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên phụ trách giống cây trồng
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Cắt tỉa cành, trồng ghép cây giống mới
												<br />- Thu mua các loại rau củ quả từ tay người dân và chuyển tới các khu chợ&nbsp;Công ty Nông – Lâm nghiệp CV365{' '}
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
												Thời gian: 02/2016 – 05/2016
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên thực tập tốt nghiệp
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- So sánh khả năng sinh trưởng, phát triển và năng suất của một vài giống lúa&nbsp;
												<br />- Học hỏi các kỹ thuật trồng cây và tạo giống cây trồng mới{' '}
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
									<div className="ico-3" />
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
												Tham gia vào Đội thanh niên xung kích của trường
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
												Là hội viên của Hội thiện nguyện thành phố Hồ Chí Minh
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
									<div className="ico-4" />
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
												Dự án Tạo giống cây trồng mới
											</div>
										</h3>
										<div className="w-exp">
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vai trò : Nhân viên kỹ thuật giống cây trồng
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Kết quả: giúp công ty tìm ra phương pháp ghép giống mới, tạo ra được nhiều cây trồng mới có giá trị kinh tế cao{' '}
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
									<div className="ico-5" />
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
						<div className="watermark">∴ Timviec365.vn</div>
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
