
export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }: any) {
	const [htmlData, setHtmlData] = useState(html)

	console.log(htmlData)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV Startup
				</div>
				<div id="form-cv">
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
								<div className="box-dm" />
								<div className="clr" />
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Thông tin liên hệ
											</span>
										</h3>
										<p className="icoweb cvi-date">
											<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
												26/8/1996
											</span>
										</p>
										<p className="icoweb cvi-user">
											<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
												Nam
											</span>
										</p>
										<p className="icoweb cvi-phone">
											<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
										</p>
										<p className="icoweb cvi-envelope-square">
											<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
												halinhhoang@gmail.com
											</span>
										</p>
										<p className="icoweb cvi-map-marker">
											<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
										</p>
										<p className="icoweb cvi-info">
											<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true" />
										</p>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Mục tiêu nghề nghiệp
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Mong muốn được là một thành viên của công ty để tìm kiếm một cơ hội và môi trường Startup nhằm thử thách năng lực của bản
											thân.Với tinh thần khởi nghiệp, sáng tạo, không ngại khó, tôi sẽ cống hiến và nỗ lực hết mình hướng tới phát triển công ty ngày
											càng lớn mạnh, cũng như nắm bắt được các cơ hội để thăng tiến trong tương lai.&nbsp;{' '}
										</div>
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
													- Kỹ năng làm việc nhóm
												</p>
												<div className="bar-exp">
													<div style={{ width: '50%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={50} />
												</div>
												<div className="fake" />
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
													- Kỹ năng giao tiếp
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="fake" />
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
													- Kỹ năng thiết kế, photoshop
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="fake" />
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
													- Tinh thần sáng tạo và không ngại thử thách
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="fake" />
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
													- Năng động, nhiệt huyết
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="fake" />
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
													- Thành thạo tin học văn phòng
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="fake" />
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Giải thưởng
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											-&nbsp; Bằng khen “Cán bộ Đoàn xuất sắc nhất năm 2016”.
											<br />- Khen thưởng “Sao tháng Giêng”, “Sinh viên 5 tốt” liên tục các năm 2015, 2016.{' '}
										</div>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Chứng chỉ
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng nhận IELTS 6.5&nbsp;
											<br />- Chứng chỉ Digital Marketing{' '}
										</div>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Sở thích
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Sưu tầm và đọc các sách, tài liệu nước ngoài về Marketing, phát triển thương hiệu,...
											<br />- Du lịch, nghe nhạc, xem phim,...{' '}
										</div>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												Người tham chiếu
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Mr. Vũ Đức Đạt <br />- Trưởng bộ phận Marketing Công ty CP Thời trang AAC
											<br />- SĐT: 0989 599 649{' '}
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
						<div id="cv-content">
							<div id="cv-top">
								<div id="cvo-profile">
									<div className="box-01">
										<div id="box-hvt">
											<h1>
												<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
											</h1>
											<p />
											<h2>
												<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
											</h2>
											<p />
										</div>
										<div className="clr" />
									</div>
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
									<p className="head">
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
													Đại học Thương Mại 8/2013 - 5/2017
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													- Chuyên ngành: Marketing
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Bằng tốt nghiệp: Loại Giỏi&nbsp;
												<br />- Điểm tích lũy:&nbsp; 8.2&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
												&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
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
									<p className="head">
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
													CÔNG TY CP THỜI TRANG AAC (5/2017 – 2/2020)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên viên Marketing
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												AAC là công ty Startup mảng thời trang, những nhiệm vụ đã thực hiện tại đây:
												<br />- Lên ý tưởng cho các chiến dịch phát triển thương hiệu.
												<br />- Thực hiện Seo Onpage, Offpage, tối ưu content, định hướng cách viết cho content chuẩn seo. Mục đích là đưa từ khóa lọt
												top thứ hạng, website lên top GG.
												<br />- Kết quả đạt được: Thương hiệu của AAC được người dùng biết đến nhiều hơn. Traffic website chính tăng đáng kể trong
												vòng 2 tháng,...
												<br />- Nghiên cứu, lên kế hoạch và đề xuất dự trù chi phí chạy quảng cáo facebook, thực hiện quy trình chạy quảng cáo.{' '}
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
													CÔNG TY SÁNG TẠO MỚI 365 (2/2018 - 1/2019)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Cộng tác viên Content Part time
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Viết bài content theo định hướng của SEO-er
												<br />- Đăng bài lên website công ty
												<br />- Chia sẻ bài viết trên các mạng xã hội{' '}
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
									<p className="head">
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
													- Thành viên CLB “Marketing Đại học Thương mại”, thường xuyên tổ chức các sự kiện truyền thông cho nhà trường, các cuộc thi
													về sáng tạo và review thương hiệu.&nbsp;
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
												- Tham gia chương trình “ Áo ấm mùa đông” với vai trò là đội trường truyền thông, biên kịch cho các sự kiện, dẫn chương trình
												và thiết kế nội dung quảng cáo cho sự kiện thông qua website trường và Facebook,...
												<br />{' '}
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
									<p className="head">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
													&nbsp;“Chinh phục khách hàng thông qua thương hiệu”{' '}
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													- Vai trò: Chuyên viên Marketing (mảng SEO web) tại Công ty AAC
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Kết quả: Áp dụng các kiến thức và thường xuyên đưa web lên Top 1 Google.&nbsp;{' '}
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
									<p className="head">
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
