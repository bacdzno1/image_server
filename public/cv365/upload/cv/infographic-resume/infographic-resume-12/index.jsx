import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CV() {
	const [htmlData, setHtmlData] = useState(html)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV" />
				<div id="form-cv" className="bd-bg-left">
					<div id="cv-main" className="bd-bg-top">
						<div id="cv-center" className="bg-left">
							<div id="cv-top" className="bg-top">
								<div id="cvo-profile">
									<div className="box-01">
										<div id="cvo-profile-avatar-wraper">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="http://43.239.223.249:3009/imagesno_avatar.jpg" />
										</div>
										<div id="cvo-profile-info">
											<h1 className="bd-bg-right color">
												<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
											</h1>
											<h2 className="color">
												<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
											</h2>
										</div>
									</div>
								</div>
							</div>
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Thông tin liên hệ
												</span>
											</p>
											<div className="hasclass">
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-birthday-cake" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
														19/05/1992
													</span>
												</p>
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-user" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
														Nam
													</span>
												</p>
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-phone" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
												</p>
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-envelope" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
														test@gmail.com
													</span>
												</p>
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-map-marker" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
												</p>
												<p className="icoweb bg-red-opacity">
													<span className="cv-hi">
														<i className="fa fa-info" />
													</span>
													<span className="cv-ico-center">:</span>
													<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
														facebook.com/abc
													</span>
												</p>
											</div>
										</div>
										<div id="box02" className="block cvo-block ui-sortable-handle">
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</span>
											</p>
											<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Mong muốn một môi trường làm việc chuyên nghiệp, có mức lương và cơ hội thăng tiến tốt
												<br />- Mong muốn có cơ hội cống hiến bản thân, đạt mục tiêu trở thành giám đốc kinh doanh trong 5 năm tới.{' '}
											</span>
										</div>
										<div id="box03" className="block cvo-block box-skills ui-sortable-handle">
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Kỹ năng
												</span>
											</p>
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
													<p className="skill-name">
														<input type="text" defaultValue="Tin học văn phòng" />
													</p>
													<span className="bar-exp">
														<span style={{ width: '50%' }} />
													</span>
													<span className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={50} />
													</span>
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
													<p className="skill-name">
														<input type="text" defaultValue="Tiếng Anh" />
													</p>
													<span className="bar-exp">
														<span style={{ width: '80%' }} />
													</span>
													<span className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</span>
												</div>
											</div>
										</div>
										<div id="box04" className="block cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</span>
											</p>
											<span className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												Nhân viên có thành tích xuất sắc nhất năm CV35 2014{' '}
											</span>
										</div>
										<div id="box05" className="block cvo-block ui-sortable-handle">
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</span>
											</p>
											<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												Chứng chỉ&nbsp; Academy for Ads ( 2013 ) <br />- Trường: Google Academy&nbsp; <br />- Xếp loại: Giỏi
												<br />
												Tiếng Anh (TOEIC, TOEFL, IELTS)&nbsp;
												<br />{' '}
											</span>
										</div>
										<div id="box06" className="block cvo-block ui-sortable-handle">
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</span>
											</p>
											<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Thể thao: Bóng đá, bóng chuyền….
												<br />- Thích đi du lịch
												<br />- Thích bơi lội
												<br />- Thích hoạt động tập thể{' '}
											</span>
										</div>
										<div id="box07" className="block cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</span>
											</p>
											<span className="box-content" cvo-placeholder="Nội dung" contentEditable="true">
												- Anh trưởng phòng kinh doanh
												<br />- Họ và tên: ……
												<br />- Số điện thoại:.................{' '}
											</span>
										</div>{' '}
									</div>
								</div>
							</div>
						</div>
						{/* Hết CV Right */}
						<div id="cv-content" className="bg-right">
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
									<p className="head bg-left">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Trình độ học vấn
										</span>
									</p>
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
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Chuyên ngành: Quản trị kinh doanh thương mại{' '}
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														08/2009 - 08/2014
													</span>
												</div>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Tốt nghiệp loại Khá, điểm trung bình 7.5
												</div>
											</h3>
										</div>
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
									<p className="head bg-left">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Kinh nghiệm làm việc
										</span>
									</p>
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
													Công ty CV365
												</span>
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Online Marketing Specialist&nbsp;
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														01/2015 - 12/2016
													</span>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Lập kế hoạch, trực tiếp chạy và tối ưu các kênh Online Marketing (Facebook, Google, Cốc cốc, Adnetwork..) nhằm thu hút
													khách hàng tiềm năng cho các sản phẩm của công ty.
													<br />- Viết nội dung, lên ý tưởng hình ảnh chạy quảng cáo để triển khai cho các kênh Marketing.
													<br />- Hỗ trợ chạy Facebook Ads để phục vụ cho mục đích tuyển dụng, truyền thông sự kiện... của công ty.
													<br />- Nghiên cứu/giao dịch/đàm phán với các đối tác truyền thông quảng cáo để gia tăng lượng khách hàng tiềm năng.
													<br />- Đánh giá, nghiên cứu các kênh truyển thông online của đối thủ để đề ra giải pháp hiệu quả, sáng tạo hơn.
													<br />- Làm báo cáo tuần, tháng.{' '}
												</div>
											</h3>
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
													Cửa hàng CV365
												</span>
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Nhân viên marketing&nbsp;
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														01/2017 - hiện tại
													</span>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Lập kế hoạch marketing thương hiệu thu hút khách hàng qua Facebook, Email.
													<br />- Biên tập nội dung, kéo traffic, chăm sóc fanpage Facebook
													<br />- Phối hợp các thành viên trong phòng tổ chức các minigame, event online hỗ trợ bán hàng.
													<br />- Hỗ trợ các phòng ban khác về mặt truyền thông (nếu có yêu cầu)&nbsp;{' '}
												</div>
											</h3>
										</div>
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
									<p className="head bg-left">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Hoạt động
										</span>
									</p>
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
													Nhóm tình nguyện CV365
												</span>
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Tình nguyện viên
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														07/2018
													</span>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia các chương trình hiến máu nhân đạo
													<br />- Tập hợp các món quà và phân phát tới đồng bào gặp lũ, người khó khăn, vô gia cư.&nbsp;{' '}
												</div>
											</h3>
										</div>
									</div>
								</div>
								<div id="block04" className="cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
									<p className="head bg-left">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Dự án tham gia
										</span>
									</p>
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
												<span className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
													Sunny Way
												</span>
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Khách hàng : CV365
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														10/2017
													</span>
												</div>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Marketing cho ứng dụng mobile giúp mọi người tìm việc nhanh chóng, bất kỳ lúc nào, bất kỳ đâu.
													<br />
													Số lượng thành viên : 8<br />
													Vị trí công việc : Manager
													<br />
													Vai trò trong dự án
													<br />- Lập kế hoạch
													<br />- Trực tiếp vận hành
													<br />- Tối ưu kênh quảng cáo
													<br />
													Công nghệ sử dụng :&nbsp;Facebook, Google, Cốc cốc, Adnetwork
													<br />{' '}
												</div>
											</h3>
										</div>
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
									<p className="head bg-left">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Thông tin thêm
										</span>
									</p>
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
													Nội dung lớn
												</span>
												<div className="xyz">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
															Nội dung nhỏ
														</span>
													</p>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														Điền thời gian
													</span>
												</div>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													nội dung thêm (nếu cần){' '}
												</div>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Hết CV content */}
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
