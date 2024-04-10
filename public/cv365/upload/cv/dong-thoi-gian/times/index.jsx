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
			<div className="page_cv ">
				<input type="hidden" id="cvid" name="cvid" defaultValue={28} />
				<input type="hidden" id="issave" name="issave" defaultValue={0} />
				<p style={{ display: 'none' }} id="checktext"></p>
				<link rel="stylesheet" href="upload/cv/dong-thoi-gian/times/css/cv.css" type="text/css" />
				<link id="cv-color-css" rel="stylesheet" href="upload/cv/dong-thoi-gian/times/css/colors/446600.css" type="text/css" />
				<link id="cv-font" rel="stylesheet" href="upload/cv/dong-thoi-gian/times/css/fonts/Roboto.css" type="text/css" />
				<link id="cv-font-size" rel="stylesheet" href="upload/cv/dong-thoi-gian/times/css/font-size/normal.css" type="text/css" />
				<link id="cv-cpacing-css" rel="stylesheet" href="upload/cv/dong-thoi-gian/times/css/font-spacing/normal.css" type="text/css" />
				<div id="page-cv">
					<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV" />
					<div id="form-cv">
						<div id="cv-top">
							<div id="cvo-profile">
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
									<div id="box01" className="block cvo-block box-contact">
										<div id="prof">
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
														19/05/1992
													</span>
												</p>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
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
														test@gmail.com
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
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
														facebook.com/abc
													</span>
												</p>
											</div>
											<div className="clr" />
										</div>
									</div>
								</div>
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="http://43.239.223.249:3009/imagesno_avatar.jpg" />
									</div>
								</div>
								<div className="clr" />
							</div>
						</div>
						<div className="clr" />
						<div id="cv-main">
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle"></div>
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Mục tiêu nghề nghiệp
													</div>
													<div className="wfa">
														<i className="fa"></i>
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												Bằng những kinh nghiệm, kỹ năng thực tế về Digital Marketing (Facebook ads, SEO, Youtube, Google ads …) cùng với sự học hỏi
												không ngừng những kiến thức mới, Tôi tin rằng sẽ giúp công ty xây dựng thương hiệu trên thị trường một cách vững mạnh và
												chuyên nghiệp. Từ đó giúp công ty tăng số lượng khách hàng và mở rộng tập khách hàng đồng thời gia tăng doanh thu và lợi
												nhuận.{' '}
											</div>
											<div className="clr" />
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Kỹ năng
													</div>
													<div className="wfa">
														<i className="fa"></i>
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
														Content Marketing
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
														Tiếng Anh giao tiếp
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
														Tin học văn phòng
													</p>
													<div className="bar-exp">
														<div style={{ width: '50%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={50} />
													</div>
												</div>
												<div className="clr" />
											</div>
											<div className="clr" />
										</div>
										<div id="box04" className="block cvo-block ui-sortable-handle">
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Giải thưởng
													</div>
													<div className="wfa">
														<i className="fa"></i>
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												Nhóm có thành tích tốt nhất trong chiến dịch Marketing đợt 1 năm 2018.
												<br />
												Học bổng 4 năm học liên tiếp trong quá trình học đại học CV365.
												<br />{' '}
											</div>
											<div className="clr" />
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Chứng chỉ
													</div>
													<div className="wfa">
														<i className="fa"></i>
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Chứng chỉ công nhận hoàn thành khóa học SEO của Vietmoz , GTV SEO, SEO SEVA...
												<br />- Chứng chỉ công nhận hoàn thành khóa học Marketing online
												<br />{' '}
											</div>
											<div className="clr" />
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Sở thích
													</div>
													<div className="wfa">
														<i className="fa"></i>
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												- Viết lách: Bài viết trên blog chia sẻ kinh nghiệm cá nhân..
												<br />- Tham gia hoạt động ngoại khóa.
												<br />- Đi du lịch
												<br />{' '}
											</div>
											<div className="clr" />
										</div>
										<div id="box07" className="block cvo-block ui-sortable-handle">
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
											<div className="z-exp">
												<h3>
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Người tham chiếu
													</div>
													<div className="wfa">
														<i className="fa"></i>
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
												Nguyễn Thị B&nbsp; – Phó giám đốc Marketing <br />
												Công ty CP CV365
												<br />
												SĐT: 0123456789{' '}
											</div>
											<div className="clr" />
										</div>
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
									<div className="z-exp">
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
											</span>
										</div>
										<div className="wfa">
											<i className="fa"></i>{' '}
										</div>
									</div>
									<div id="experience-table" className="w-exp">
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
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên ngành: Thương mại điện tử
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Xếp loại: Giỏi{' '}
											</div>
											<div className="clr" />
										</div>
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
									<div className="z-exp">
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
											</span>
										</div>
										<div className="wfa">
											<i className="fa"></i>{' '}
										</div>
									</div>
									<div id="experience-table" className="w-exp">
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
													Công ty Bất động sản CV 365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Digital Marketing
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Triển khai các công việc cụ thể trong quảng cáo Google adwords, Facebook ads, Zalo, Email marketing, youtube theo từng chiến
												dịch quảng bá của công ty dưới sự phân công của Trưởng phòng.
												<br />- Quản trị nội dung và tối ưu SEO Onpage, SEO Offpage website công ty: đi baclink, tối ưu onpage: Title, thẻ des, hình
												ảnh, internal theo mô hình... Kéo traffic, tạo signal.... chuẩn seo theo kế hoạch của trưởng phòng.
												<br />- Viết bài seeding, lập các tài khoản và tham gia vào nhóm để chia sẻ bài viết...
												<br />- Quản lý nội dung kênh youtube của công ty: Lên ý tưởng và viết kịch bản video.
												<br />
												-Hỗ trợ các kế hoạch truyền thông, triển khai POSM do phòng Marketing tổ chức
												<br />- Phối hợp với bộ phận IT tối ưu giao diện người dùng cũng như hành vi khách hàng
												<br />- Tổng kết và báo cáo định kỳ tháng công việc hoàn thành sau mỗi chiến dịch.
												<br />{' '}
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
													Công ty CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên Content – Marketing
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Biên tập nội dung viết bài chuẩn SEO về dịch vụ của công ty.
												<br />- Viết bài chia sẻ kinh nghiệm kiến thức về lĩnh vực tuyển dụng, xin việc theo kế hoạch của bộ phận SEO.
												<br />- Quản trị nội dung Fanpage, Group trên các trang mạng xã hội của công ty.
												<br />{' '}
											</div>
											<div className="clr" />
										</div>
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
									<div className="z-exp">
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Hoạt động
											</span>
										</div>
										<div className="wfa">
											<i className="fa"></i>{' '}
										</div>
									</div>
									<div id="experience-table" className="w-exp">
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
													Nhóm tình nguyện CV365
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
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
												- Thành viên tích cực của các diễn đàn, Group mạng xã hội chia sẻ kinh nghiệm về Digital Marketing như: Cộng đồng iSocial,
												Diễn đàn SEOMXH …<br />- Tham gia các buổi hội thảo chia sẻ về xu hướng Marketing.
												<br />- Tình nguyện: Tham gia hoạt động tình nguyện của phòng Công đoàn công ty.
												<br />{' '}
											</div>
											<div className="clr" />
										</div>
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
									<div className="z-exp">
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Dự án tham gia
											</span>
										</div>
										<div className="wfa">
											<i className="fa"></i>{' '}
										</div>
									</div>
									<div id="experience-table" className="w-exp">
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
													Nhà của bạn, Không gian sống xanh – 365 Building
												</div>
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vai trò: Nhân viên Digital marketing
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Kết quả: Dự án triển khai trên Facebook ads, SEO, Email Marketing, Youtube để tiếp cận với khách hàng.
												<br />
												Kết quả đạt được:&nbsp;
												<br />
												+/ Traffic cao nhất đạt khoảng 10.000 organic traffic/tháng, 30 keywords top 1-5 và hơn 200 keywords top 10.
												<br />
												+/ Kênh youtube đạt gần 5000 subscribers, trung bình hơn 70.000 views/1 video, video có view cao nhất đạt gần 100.000 lượt
												xem.
												<br />{' '}
											</div>
											<div className="clr" />
										</div>
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
									<div className="z-exp">
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Thông tin thêm
											</span>
										</div>
										<div className="wfa">
											<i className="fa"></i>{' '}
										</div>
									</div>
									<div id="experience-table" className="w-exp">
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
												<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
													4/2017 - 1/2019
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
											<div className="clr" />
										</div>
									</div>
									<div className="clr" />
								</div>
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
				</div>{' '}
			</div>
		</>
	)
}
