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
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="http://43.239.223.249:3009/imagesno_avatar.jpg" />
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
								<div className="clr" />
							</div>
						</div>
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										<div id="prof">
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
											<ul>
												<li>
													<p className="icoweb cvi-date">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															19/05/1992
														</span>
													</p>
												</li>
												<li>
													<p className="icoweb cvi-user">
														<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
															Nam
														</span>
													</p>
												</li>
												<li>
													<p className="icoweb cvi-phone">
														<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
													</p>
												</li>
												<li>
													<p className="icoweb cvi-envelope-square">
														<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
															test@gmail.com
														</span>
													</p>
												</li>
												<li>
													<p className="icoweb cvi-map-marker">
														<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
													</p>
												</li>
												<li>
													<p className="icoweb cvi-info">
														<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
															facebook.com/abc
														</span>
													</p>
												</li>
											</ul>
										</div>
										<div className="clr" />
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Mục tiêu nghề nghiệp
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Là một người năng động trong cuộc sống, công việc cũng vậy tôi luôn mong muốn sự mới mẻ. Xây dựng ý tưởng, hiện thực hóa nó để
											xây dựng thương hiệu sản phẩm, thương hiệu công ty trên thị trường một cách chuyên nghiệp đến gần hơn với khách hàng tiềm năng
											giúp công ty tăng doanh thu. <br />
											Mục tiêu trong 2 năm tới trở thành chuyên gia trong mảng marketing.
											<br />{' '}
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Kỹ năng
											</div>
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
													Biên tập nội dung
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Giải thưởng
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Nhân viên có thành tích xuất sắc quý 3, 4 năm 2018
											<br />- Top 10 sinh viên trong cuộc thi “ Vua Marketing” cho khoa Marketing đại học CV365 tổ chức.- Giấy khen: Khóa luận tốt
											nghiệp đạt loại giỏi
											<br />{' '}
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Chứng chỉ
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng chỉ công nhận hoàn thành khóa học Marketing online.
											<br />- Chứng chỉ lớp học MC cơ bản
											<br />- Chứng chỉ tiếng anh B1.
											<br />- Chứng chỉ tin học: Chứng chỉ ứng dụng công nghệ thông tin cơ bản.
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Sở thích
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Tham gia hoạt động ngoại khóa.
											<br />- Đi du lịch- Xem phim, nghe nhạc, đọc sách{' '}
										</span>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Người tham chiếu
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Nguyễn Thị B&nbsp; – Phó giám đốc Marketing
											<br />
											Công ty CP CV365
											<br />
											SĐT: 0123456789{' '}
										</span>
									</div>{' '}
								</div>
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
												Đại học CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Chuyên ngành: Marketing
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Xếp loại: Giỏi{' '}
										</div>
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
								<div className="head">
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
												Công ty CV 365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Chuyên viên Marketing
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Chịu trách nhiệm phát triển 1 mảng sản phẩm, dịch vụ của công ty.
											<br />- Phân tích nhu cầu thị trường, sản phẩm đối thủ, chương trình marketing của đối thủ.
											<br />- Phối hợp cùng bộ phận Content, Media, Design sản xuất các video hình ảnh tiếp thị sản phẩm, dịch vụ của công ty.
											<br />- Liên kết với bộ phận Ads theo dõi, phân tích, điều chỉnh các chiến dịch FB Ads, Google Ads.
											<br />- Tham mưu, đóng góp ý tưởng chiến lược phát triển về truyền thông và thương hiệu cho công ty ở từng giai đoạn.- Xác định
											ngân sách, tối ưu ngân sách cho chi phí Marketing theo quý phù hợp tình hình hoạt động công ty theo từng giai đoạn.
											<br />- Báo cáo tiến độ công việc theo tuần, tháng, quý, năm đến trường phòng và Ban giám đốc.
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
												Công ty cổ phần CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Nhân viên truyền thông nội bộ
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Lập kế hoạch tổ chức các hoạt động phong trào hay sự kiện của công ty.
											<br />- Lên ý tưởng cho các chương trình, hoạt động nội bộ của công ty để gắn kết nhân viên trong công ty.
											<br />- Trực tiếp triển khai, điều phối và kết nối các bộ phận cùng thực hiện các chương trình, sự kiện.
											<br />- Cập nhập thông tin, biên tập nội dung trên các kênh truyền thông nội bộ, bản tin nội bộ.&nbsp;
											<br />- Tối ưu ngân sách các chương trình sự kiện của công ty.
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
												Công ty CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: CTV tổ chức sự kiện
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Dẫn chương trình với quy mô nhỏ
											<br />- Xây dựng nội dung kịch bản phần tương tác với khán giả- Các công việc khác dưới sự phân công của tổ trưởng{' '}
										</div>
									</div>
									<div id="exp4" className="ctbx experience">
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
												Dự án cá nhân&nbsp;
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Marketing – Thành viên trong nhóm 4 sinh viên.
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Nhận dự án marketing với quy mô nhỏ
											<br />- Xây dựng kế hoạch marketing sản phẩm: Phân tích thị trường, xu hướng, lập kế hoạch quảng bá sản phẩm…
											<br />- Làm việc với khách hàng về kế hoạch, chi phí marketing{' '}
										</div>
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
								<div className="head">
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
												Nhóm tình nguyện CV365
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
											- Tham gia các buổi hội thảo chia sẻ về xu hướng Marketing: Marketing trong thời đại 4.0 , Marketing yourself to the world, …
											<br />- Tham gia các hoạt động ngoại khóa, sự kiện chung của công ty:
											<br />
											Vai trò: Thành viên ban tổ chức
											<br />
											Sự kiện đã tham gia: Ngày 20/10, ngày 8/3, NOEL, ngày thành lập công ty và du lịch hè, team building …<br />{' '}
										</div>
									</div>
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
												Dự án: Đồ 2hand – xu hướng mới.
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Khách hàng: Cửa hàng 2hand
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Công việc: Phụ trách marketing phân tích thị trường, định hình khách hàng tiềm năng, phân khúc thị trường từ đó đưa ra kế hoạch
											công việc và chi phí.
											<br />
											Kết quả kết thúc dự án: Cửa hàng 2hand có định hướng sản phẩm, khách hàng (Ngoài: logo, biển hiệu được xây dựng), Facebook của
											cửa hàng 2hand đạt 100.000 lượt thích.
											<br />{' '}
										</div>
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
								<div className="head">
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
												Thêm những thông tin khác (nếu cần)
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										></div>
									</div>
								</div>
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
			</div>
		</>
	)
}
