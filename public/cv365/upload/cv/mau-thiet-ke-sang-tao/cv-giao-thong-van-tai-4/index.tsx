const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					giao thông vận tải
				</div>
				<div id="form-cv">
					<div id="cv-top">
						{/* <div id="cvo-profile-avatar-wraper">
                  <div class="wimg">
                      <img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg">
                  </div>
						  </div> */}
						<div id="box-hvt">
							<h1>
								<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
							</h1>
							{/* <div id="header">
							</div> */}
							<h2>
								<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
							</h2>
						</div>
						<div className="clr" />
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div id="box01" className="block cvo-block box-contact">
								<h3>
									<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
										Thông tin liên hệ
									</div>
								</h3>
								<div id="prof">
									<div className="ic">
										<div className="icf">
											<i className="fa"></i>
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
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
										</div>
									</div>
									<div className="clr" />
								</div>
							</div>
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
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
										{/*
                          <h3>
                              <div id="cv-boxtitle" cv-form-field="true" contenteditable="true"
                                  cvo-placeholder="Tiêu đề" class="box-title">
                                  Thông tin liên hệ</div>
                          </h3>
*/}
										<div className="clr" />
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
											<div className="cumic2" />
											<h3>
												{/* <div class="bt-2"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Mong muốn được làm việc ở trong môi trường chuyên nghiệp, có nhiều cơ hội phát huy kinh nghiệm, kiến thức vốn có. Đồng thời có
											thể bổ sung những kỹ năng và kinh nghiệm quý giá từ thực tế để hoàn thiện bản thân.&nbsp; <br />
											Đóng góp sức lực, trí tuệ để tạo nên sự phát triển vững mạnh cho Công ty. Từ đó được đón nhận nhiều cơ hội thăng tiến trong sự
											nghiệp.&nbsp;
											<br />{' '}
										</div>
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
										<div className="ski">
											<h3>
												{/* <div class="bt-3"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Kỹ năng
												</div>
											</h3>
										</div>
										<div className="exp content-edit skill">
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Thêm
													</div>
													<div className="edit js-edit-content"> Sửa</div>
													<div className="remove">
														<i className="fa fa-minus" /> Xóa{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Có sự am hiểu về thiết kế và thi công
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
														<i className="fa fa-minus" /> Xóa{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Biết cách quản lý dự án và tính toán trên các hạng mục
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
														<i className="fa fa-minus" /> Xóa{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Có kiến thức về luật pháp
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
														<i className="fa fa-minus" /> Xóa{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Giao tiếp khéo léo, kỹ năng thuyết trình tốt
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
												{/* <div class="bt-4"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Nhận khen thưởng sinh viên tích cực tham gia các hoạt động xã hội <br />- Khen thưởng nhân viên ưu tú cuối năm 2018 tại Công
											ty Cổ phần kiến trúc và nội thất CV365
											<br />{' '}
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
											<div className="cumic5" />
											<h3>
												{/* <div class="bt-5"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng chỉ hành nghề kỹ sư cầu đường
											<br />- Chứng chỉ tin học&nbsp;{' '}
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
											<div className="cumic6" />
											<h3>
												{/* <div class="bt-6"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Đi phượt
											<br />- Tham gia vào các hoạt động thiện nguyện
											<br />- Vẽ
											<br />{' '}
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
											<div className="cumic7" />
											<h3>
												{/* <div class="bt-7"></div> */}
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Thầy Nguyễn Đức Trung
											<br />
											Giảng viên trường Đại học Giao thông Vận tải
											<br />
											Số điện thoại: 0978 258 146
											<br />{' '}
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
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
								</div>
								<div className="head">
									<div className="id-1" />
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Trình độ học vấn
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
												Đại học Giao thông vận tải
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Chuyên ngành: Kỹ sư xây dựng công trình giao thông
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Tốt nghiệp loại Khá{' '}
										</div>
									</div>{' '}
								</div>
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
								</div>
								<div className="head">
									<div className="id-2" />
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Kinh nghiệm làm việc
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
												Công ty Cổ phần kiến trúc và nội thất CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Nhân viên Giám sát thi công nội thất
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Công trình đảm nhận: Chung cư Văn Phú – Hà Đông
											<br />- Đại diện cho công ty làm việc với chủ đầu tư
											<br />- Quản lý nhà thầu phụ, vật tư, kho bãi,...
											<br />- Kiểm soát tiến độ và chất lượng của hoạt động thi công công trình
											<br />- Nghiệm thu nhiều hạng mục với các chủ đầu tư, làm hồ sơ nghiệm thu, hồ sơ hoàn công.
											<br />{' '}
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Trung tâm Công nghệ Giao thông vận tải – Trường Đại học Giao thông vận tải
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Kỹ sư kiến tập
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Theo dõi tiến độ và kiểm định chất lượng trong quá trình thi công mà nhà thầu nghiệm thu trước khi chuyển sang giai đoạn khác.
											<br />- Làm thí nghiệm trong phòng các mẫu kiểm định
											<br />- Tư vấn và hỗ trợ cho các nhà thầu về mảng thiets kế, thi công, sản xuất mặt đường nhựa, bê tông.&nbsp;
											<br />- Báo cáo lại các vị trí chưa đảm bảo yêu cầu về mặt kỹ thuật, đề xuất ý kiến khắc phục.
											<br />- Làm hồ sơ, báo cáo kết quả kiểm định chất lượng với nhà đầu tư và Ban quản lý.
											<br />{' '}
										</div>
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
												Công ty Cổ phần Khoa học và Kiểm định công trình Xây dựng CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Sinh viên thực tập
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Thực hiện triển khai các thí nghiệm, tiến hành kiểm tra về chất lượng của vật liệu được dùng trong dự án.
											<br />- Làm hồ sơ và báo cáo kết quả thí nghiệm.
											<br />{' '}
										</div>
									</div>{' '}
								</div>
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
								</div>
								<div className="head">
									<div className="id-3" />
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
										Hoạt động
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
												Tham gia hoạt động tình nguyện tại Câu lạc bộ Hiến máu nhân đạo tại trường Đại học Giao thông vận tải.
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
											- Là thành viên của hội Phuotluon, tham gia các chuyến đi phượt kết hợp mang đồ quyên góp đến ủng hộ đồng bào vùng cao.{' '}
										</div>
									</div>{' '}
								</div>
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
								</div>
								<div className="head">
									<div className="id-4" />
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
												Dự án công trình xây dựng tuyến đường kết nối cao tốc Cầu Giẽ Ninh Bình với Quốc Lộ 1 nằm trong dự án mở rộng và nâng cấp Quốc
												Lộ 1
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vai trò: kiểm định hiện trường
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
								</div>
								<div className="head">
									<div className="id-5" />
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
												Đại học CV365
											</div>
										</h3>
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
									</div>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="clr" />
					{/* footer */}
					<div className="footer">
						<div className="watermark">© Timviec365.vn</div>
					</div>
					{/* footer */}
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
