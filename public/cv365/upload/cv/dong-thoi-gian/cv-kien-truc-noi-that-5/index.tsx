import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					kiến trúc nội thất
				</div>
				<div id="form-cv" style={{ position: 'relative' }}>
					<div className="cv_tt">
						<div id="cv-main">
							<div id="cv-top">
								<div className="box-01">
									<div id="box-hvt">
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
										<div className="outsite">
											<div className="inside1"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Trình độ học vấn
													</span>
												</p>
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Đại học Timviec365.vn
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Thiết kế nội thất
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Xếp loại: Khá{' '}
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
										<div className="outsite">
											<div className="inside2"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Kinh nghiệm làm việc
													</span>
												</p>
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Công ty cổ phần nội thất Timviec365.vn
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Kỹ sư giám sát thi công nội thất
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tiếp nhận từ quản lý nhu cầu thiết kế của khách hàng.
													<br />{' '}
													<div>
														- Khảo sát, đo đạc hiện trạng của công trình.
														<br />
													</div>
													<div>
														- Họp thảo luận và đưa ra phương án thiết kế, xây dựng ý tưởng thiết kế.
														<br />
													</div>
													<div>
														- Thiết kế, triển khai bản vẽ gồm lên mặt bằng, mặt đứng, mặt cắt không gian 3D và mô tả các công năng sử dụng ...
														<br />
													</div>
													<div>
														- Gửi bản vẽ cho khách hàng và tham vấn ý kiến về công năng sử dụng.
														<br />
													</div>
													<div>
														- Quản lý hồ sơ, tham gia thực hiện giám sát trong quá trình thi công.&nbsp;
														<br />
													</div>
													<div>
														- Thực hiện các công việc liên quan khác theo yêu cầu của cấp trên.
														<br />
													</div>{' '}
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Công ty&nbsp; Timviec365.vn&nbsp;
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Kỹ sư giám sát thi công nội thất
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Làm việc với các bên thầu phụ, nhà cung cấp để đảm bảo đúng số lượng, mẫu mã, tiến độ công việc …<br />{' '}
													<div>
														- Giám sát quá trình thi công nội thất
														<br />
													</div>
													<div>
														- Báo cáo công việc theo tháng và kết thúc dự án
														<br />
													</div>{' '}
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
										<div className="outsite">
											<div className="inside3"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Hoạt động
													</span>
												</p>
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Hội sinh viên trường Đại học Timviec365
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thành viên
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Hoạt động: Tổ chức triển khai các hoạt động của thành đoàn thành phố, tổ chức các hoạt động từ thiệt, tổ chức các buổi chia
													sẻ - đối thoại giữa nhà trường và sinh viên …<br />{' '}
													<div>
														- Tham gia CLB đá bóng của địa phương.
														<br />
													</div>{' '}
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
										<div className="outsite">
											<div className="inside4"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Dự án tham gia
													</span>
												</p>
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Dự án thi công công trình nội thất
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Khách hàng: Công ty đầu tư du lịch Timviec365.vn, công ty cổ phần Timviec365.vn
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Công việc: Xây dựng ý tưởng thiết kế nội thất công trình theo yêu cầu khách hàng, triển khai bản vẽ và giám sát thi công nội
													thất.{' '}
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
										<div className="outsite">
											<div className="inside5"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
														Thông tin thêm
													</span>
												</p>
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Đại học CV365
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thêm những thông tin khác ( nếu cần )
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Thêm những thông tin khác ( nếu cần ){' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
											{' '}
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Thông tin liên hệ
												</span>
											</h3>
											<p className="icoweb cvi-date">
												Ngày sinh:
												<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
													19/05/1992
												</span>
											</p>
											<p className="icoweb cvi-user">
												Giới tính:
												<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
													Nam
												</span>
											</p>
											<p className="icoweb cvi-phone">
												Số điện thoại:
												<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
											</p>
											<p className="icoweb cvi-envelope-square">
												Email:
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													test@gmail.com
												</span>
											</p>
											<p className="icoweb cvi-map-marker">
												Địa chỉ:
												<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
											</p>
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</span>
											</h3>
											<p>
												<span className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
													Với những kinh nghiệm tôi tích lũy được trong quá trình làm việc ở lĩnh vực xây dựng và thiết kế nội thất. Với khả năng học
													hỏi nhanh, là một người cẩn thận và biết sắp xếp công việc. Tôi tin mình sẽ hoàn thành tốt công việc được giao. <br />
												</span>
											</p>
											<div>
												Tôi luôn mong muốn áp dụng những kiến thức và kinh nghiệm làm việc thực tế của mình để đóng góp vào sự phát triển của công ty.
											</div>{' '}
											<p />
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Kỹ năng
												</span>
											</h3>
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
														Tiếng anh giao tiếp
													</p>
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
														Đọc hiểu, bóc tách khối lượng của bản vẽ công trình.
													</p>
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
														xử lí sự cố trong quá trình thi công
													</p>
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													Giấy khen vì có thành tích xây dựng phong trào của Đoàn trường.
													<br />{' '}
												</span>
											</p>
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Chứng chỉ hoàn thành khóa học Trang trí Thiết kế Nội thất
													<br />- Chứng chỉ tin học ứng dụng Autocad 2D
													<br />- Chứng chỉ tiếng anh B1
													<br />- Chứng chỉ hoàn thành khóa học tiếng anh “ Tự tin giao tiếp với người nước ngoài”.
													<br />{' '}
												</span>
											</p>
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Đọc sách
													<br />- Xem phim
													<br />- Chụp ảnh
													<br />{' '}
												</span>
											</p>
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													Nguyễn Văn B – Trưởng phòng
													<br />
													Công ty CP CV365
													<br />
													SĐT: 0123456789{' '}
												</span>
											</p>
										</div>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ft">
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
