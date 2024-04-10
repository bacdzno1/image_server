const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV IT – PHẦN CỨNG
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="info">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
								<div className="box-dm" />
							</div>
							<div id="box-hvt">
								<h1>
									<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
								</h1>
								<h2>
									<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
								</h2>
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div id="prof">
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
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
													11/08/1993
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
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
											</p>
										</div>
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													Hoangbach@gmail.com
												</span>
											</p>
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
					</div>
					<div className="clr" />
					<div className="mau_nen">
						<div id="cv-main">
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
												<h3 className="icon-ic-2 ">
													<div className="tr-2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Mục tiêu nghề nghiệp
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Xây dựng, bảo trì, phát triển và quản lý hệ thống công nghệ nhằm đáp ứng hiệu quả cho các công ty, nhà máy
												<br />- Được làm việc trong một môi trường chuyên nghiệp, có thể phát triển năng lực hiệu quả nhất
												<br />- Mục tiêu sau 3 năm làm việc được thăng tiến lên chức vụ quản lý{' '}
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
												<h3 className="icon-ic-3">
													<div className="tra-3" />
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
														Thành thạo cấu hình, triển khai, quản trị, bảo trì hệ thống mạng - máy tính, các máy văn phòng cũng như thiết bị công nghệ
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
														Quản trị hệ thống server
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
														Xử lý các sự cố về máy tính và mạng cũng như các phần mềm hỗ trợ công việc kỹ thuật, internet, văn phòng. Có kinh nghiệm
														sử dụng và triển khai phần mềm bán hàng, kế toán, chấm công.
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
														Có kỹ năng quản trị website, xử lý các hình ảnh về sản phẩm cho khách hàng kinh doanh
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
														Có tinh thần trách nhiệm cao với công việc, kỹ năng làm việc nhóm và làm việc độc lập, biết cách tìm kiếm và phát triển
														thông tin
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
												<h3 className="icon-ic-4 ">
													<div className="tr-4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Giải thưởng
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Nhân viên xuất sắc tại Công ty TNHH Thương mại Quảng Cáo CV365
												<br />- Sinh viên nghiên cứu khoa học&nbsp;{' '}
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
												<h3 className="icon-ic-5 ">
													<div className="tr-5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Chứng chỉ
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Chứng chỉ Kỹ sư Công nghệ thông tin
												<br />- Chứng chỉ ngoại ngữ tiếng Anh
												<br />- Chứng chỉ Tin học{' '}
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
												<h3 className="icon-ic-6 ">
													<div className="tr-6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Sở thích
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Thích sửa chữa các thiết bị điện tử
												<br />- Thích đi du lịch
												<br />- Chơi game, chơi thể thao{' '}
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
												<h3 className="icon-ic-7 ">
													<div className="tr-7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Người tham chiếu
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												Ông Đặng Văn Minh
												<br />
												Trưởng phòng Công ty TNHH Thương mại và Quảng cáo CV365
												<br />
												0985 144 357{' '}
											</div>
											<div className="clr" />
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
									</div>{' '}
									<div className="sum">
										{/*                     */}
										<div className="icon-1" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
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
													Trường Đại học Công nghiệp Hà Nội
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành Công nghệ thông tin
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Loại tốt nghiệp: Trung bình khá{' '}
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
									<div className="sum">
										{/*                     */}
										<div className="icon-2" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
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
													Công ty TNHH CV365 Việt Nam
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: IT Executive
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Lên cấu hình, triển khai và bảo trì hệ thống mạng – máy tính, máy văn phòng, hệ thống tổng đài điện thoại, hệ thống Camera
													giám sát
													<br />- Thiết lập và quản lý thống thống chấm công cho Công ty, quản lý database phần mềm chấm công
													<br />- Quản lý hệ thống thông báo ca làm việc theo giờ, hệ thống báo động cho công ty
													<br />- Quản lý, hỗ trợ sử dụng phần mềm MES cho các bộ phận trong nhà máy
													<br />- Thực hiện các yêu cầu, đề xuất giải pháp công nghệ phục vụ công tác quản lý{' '}
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
													Công ty TNHH Thương mại Quảng cáo CV365
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Nhân viên IT
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Bảo trì, đảm bảo hệ thống máy tính, hệ thống mạng, máy in cho khách hàng và công ty
													<br />- Chạy thử phần mềm, cài đặt các phần mềm như quản lý, kế toán, chấm công, kiểm kê.
													<br />- Quản trị trang web, update thông tin cho website của Công ty và khách hàng
													<br />- Hỗ trợ khách hàng từ xa, phân phối máy tính, sản phẩm IT cho khách hàng
													<br />- Quảng bá các sản phẩm là phần mềm và sản phẩm công nghệ mới phục vụ cho nhu cầu phát triển dịch vụ, sản phẩm{' '}
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
									<div className="sum">
										{/*                     */}
										<div className="icon-3" />
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
													Thường xuyên tham gia vào các hoạt động thiện nguyện giúp đỡ dân tộc vùng cao
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
													- Tình nguyện viên tham gia giảng dạy tại làng trẻ SOS
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
										{/*                     */}
										<div className="icon-4" />
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
													Dự án Hành trình kết nối mạng tổ chức tại Công ty TNHH Thương mại CV365
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														{' '}
														tham gia với vai trò Nhân viên tư vấn, chăm sóc khách hàng.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Kết quả: Thu hút được rất nhiều khách hàng đăng ký tham gia trải nghiệm các dịch vụ kết nối mạng của công ty, vượt kế hoạch
													20%.{' '}
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
										{/*                     */}
										<div className="icon-5" />
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
														Thêm những thông tin khác (nếu cần)
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
						<div className="clr" />
					</div>
					<div id="footer" />
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

export default CV
