export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					nhân viên chăm sóc khách hàng
				</div>
				<div id="form-cv" style={{ position: 'relative' }}>
					<div className="cv_tt">
						<div id="cv-main">
							<div id="cv-top">
								{/* Div avatar */}
								<div id="bg-avata">
									<div className="ava">
										<div id="cvo-profile-avatar-wraper">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
									<div className="box-dm" />
								</div>
								<div className="box-info">
									<div id="box01" className="block cvo-block box-contact">
										<div id="infor-left">
											<div className="ic">
												<p className="icf1">{/* <i class="fa">&#xf1fd;</i> */}</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
														19/05/1992
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf2">{/* <i class="fa">&#xf095;</i> */}</p>
												<p className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
												</p>
											</div>
											{/* <div class="ic">

                          <p class="icf"><i class="fa">&#xf228;</i></p>
                          <p class="icoweb"><span id="cv-profile-sex" cvo-placeholder="Giới tính"
                                  contenteditable="true">Nữ</span></p>
                      </div> */}
										</div>
										<div id="infor-right">
											<div className="ic">
												<p className="icf3">{/* <i class="fa">&#xf199;</i> */}</p>
												<p className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
														test@gmail.com
													</span>
												</p>
											</div>
											{/* <div class="ic">
                          <p class="icf"><i class="fa">&#xf09a;</i></p>
                          <p class="icoweb"><span id="cv-profile-face"
                                  cvo-placeholder="Facebook"
                                  contenteditable="true">facebook.com/abc</span></p>
                      </div> */}
											<div className="ic">
												<p className="icf4">{/* <i class="fa">&#xf041;</i> */}</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
												</p>
											</div>
										</div>
									</div>{' '}
								</div>
								<div className="box-01">
									<div id="box-hvt">
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
										</h2>
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
										</h1>
										{/* <p><span id="cv-profile-about"></span></p> */}
									</div>
									<div className="clr" />
								</div>
							</div>
							{/* end div avatar */}
							<div className="all">
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}></div>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-2" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Mục tiêu nghề nghiệp
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Áp dụng những hiểu biết về thị trường và kinh nghiệm, kỹ năng trong hoạt động bán hàng để phấn đấu trở thành nhân viên
															chăm sóc khách hàng chuyên nghiệp, không chỉ đảm bảo được những lợi ích thiết thực cho khách hàng mà còn giúp công ty mở
															rộng hơn nữa tập khách hàng. <br />
															Được làm việc trong môi trường giàu tính công bằng, có nhiều cơ hội thăng tiến để gắn bó lâu dài với công ty.&nbsp;
															<br />{' '}
														</span>
													</p>
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
												{/* icon titlt skill */}
												<h3>
													<div className="text">
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Kỹ năng
														</span>
													</div>
													<div className="image" align="center">
														<div className="icon-skikll" />
													</div>
												</h3>
												{/* end icon title skill */}
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> Thêm{' '}
															</div>
															<div className="edit js-edit-content"> Sửa</div>
															<div className="remove">
																<i className="fa fa-minus" /> Xóa{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Kỹ năng giao tiếp và lắng nghe khách hàng
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
																<i className="fa fa-plus" /> Thêm{' '}
															</div>
															<div className="edit js-edit-content"> Sửa</div>
															<div className="remove">
																<i className="fa fa-minus" /> Xóa{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Xử lý tình huống linh hoạt
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
																<i className="fa fa-plus" /> Thêm{' '}
															</div>
															<div className="edit js-edit-content"> Sửa</div>
															<div className="remove">
																<i className="fa fa-minus" /> Xóa{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Quản lý thời gian hiệu quả
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
																<i className="fa fa-plus" /> Thêm{' '}
															</div>
															<div className="edit js-edit-content"> Sửa</div>
															<div className="remove">
																<i className="fa fa-minus" /> Xóa{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Thành thạo tin học văn phòng
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
																<i className="fa fa-plus" /> Thêm{' '}
															</div>
															<div className="edit js-edit-content"> Sửa</div>
															<div className="remove">
																<i className="fa fa-minus" /> Xóa{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Tính kiên nhẫn cao
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-4" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Giải thưởng
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Thành viên tích cực trong đội tình nguyện sinh viên của trường Đại học
															<br />
															Khen thưởng cá nhân ưu tú tại Công ty Hóa – Mỹ phẩm CV365
															<br />{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-5" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Chứng chỉ
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Chứng chỉ tin học loại A<br />
															Chứng chỉ tiếng Anh loại B{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-6" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Sở thích
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Đi du lịch
															<br />
															Gặp gỡ bạn bè khi rảnh rỗi
															<br />
															Hoạt động tình nguyện
															<br />{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-7" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
															Người tham chiếu
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
															Thầy Phùng Văn Lộc
															<br />
															Phó Trưởng Khoa Việt Nam Học trường Đại học Sài Gòn
															<br />
															Số điện thoại: 0987 547 251
															<br />{' '}
														</span>
													</p>
												</div>
											</div>{' '}
										</div>
									</div>
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
											<div className="head">
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Trình độ học vấn
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-1" />
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
															Đại học Sài Gòn
														</span>
														<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
															thời gian: ...
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Chuyên ngành: Việt Nam học
														</span>
													</p>
													<div
														className="exp-content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														Xếp loại: Xuất sắc{' '}
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
											</div>{' '}
											<div className="head">
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Kinh nghiệm làm việc
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-2" />
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
															Công ty TNHH Thương mại CV365
														</span>
														<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
															thời gian: ...
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vị trí: Trưởng nhóm Marketing
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														- Quản lý các cửa hàng trưởng.
														<br />- Lập kế hoạch Marketing và phân công nhiệm vụ việc làm cho cấp dưới.
														<br />- Hỗ trợ quảng báo sản phẩm trên kênh truyền thông.
														<br />- Giới thiệu và tư vấn sản phẩm, giải đáp thắc mắc của khách hàng thông qua điện thoại, email.
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
															Công ty Hóa – Mỹ phẩm CV365
														</span>
														<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
															thời gian: ...
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vị trí: Nhân viên tư vấn khách hàng
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														- Gọi điện thoại theo danh sách Data có sẵn được Bộ phận kinh doanh cung cấp
														<br />- Tư vấn các sản phẩm Hóa – Mỹ phẩm của Công ty và chốt đơn cho khách hàng&nbsp;
														<br />- Làm báo cáo hàng ngày về sản lượng hàng hóa bán ra.&nbsp;
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
											</div>{' '}
											<div className="head">
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Hoạt động
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-3" />
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
															Thường xuyên tham gia các hoạt động tình nguyện&nbsp; được tổ chức tại Công ty
														</span>
														<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
															thời gian: ...
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
														- Tham gia vào nhiều hội thảo về chăm sóc khách hàng, kỹ năng tư vấn sản phẩm.
														<br />{' '}
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
											</div>{' '}
											<div className="head">
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Dự án tham gia
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-4" />
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
															Hội thảo Hóa – Mỹ phẩm CV 365, chất lượng trao tay người tiêu dùng&nbsp;
														</span>
														<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
															thời gian: ...
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Vai trò: Người lập kế hoạch tổ chức Hội thảo, gửi thiệp mời tới khách mời.
														</span>
													</p>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														Thông qua hoạt động tổ chức Hội thảo hoàn thiện kỹ năng giao tiếp, mở rộng mối quan hệ xã hội.&nbsp;{' '}
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Thông tin thêm
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-5" />
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
															<i className="fa fa-minus" /> Xóa{' '}
														</div>
													</div>
													<div
														className="exp-content err_cv_content"
														contentEditable="true"
														cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
													>
														Thông Tin Thêm{' '}
													</div>
												</div>{' '}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ft">
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
