
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
					CV thương mại điện tử
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box-hvt">
									{/*php UTVT  */}
									{/* end UTVT */}
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
									</h1>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
									</h2>
								</div>
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
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
										</div>{' '}
										{/* <div class="ifo">
  						 	<div class="ifoic"></div>
											                
  						 </div> */}
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
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Mục tiêu nghề nghiệp
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Nắm vững kỹ năng cần thiết cho công việc trong thời gian thử việc <br />- Không ngừng bổ sung thêm kiến thức mức trong ngành
											Thương mại điện tử&nbsp; và trau dồi từ thực tế để có thể nâng cao hơn nữa các kỹ năng nghề nghiệp, có thể thực hiện tốt những
											công việc được giao phó.&nbsp;
											<br />- Phấn đấu trở thành trưởng phòng Marketing sau 3 năm làm việc tại Công ty
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
											<div className="skic" />
											<h3>
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
														<i className="fa fa-minus" /> Xóa
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Kỹ năng làm việc nhóm
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
													Kỹ năng giao tiếp tốt
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
													Kỹ năng tin học văn phòng, soạn thảo văn bản thuần thục
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
													Kỹ năng tiếng Anh&nbsp;
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
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Khen thưởng sinh viên tích cực trong công tác tình nguyện của trường Đại học Kinh tế - Luật <br />- Sinh viên xuất sắc trong
											lễ tốt nghiệp ra trường
											<br />- Nhân viên có nhiều đóng ý sáng tạo cho hoạt động Thương mại của Công ty TNHH Đầu tư CV365 Miền Bắc
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
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Chứng chỉ
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Chứng chỉ Seopro internet Marketing K35
											<br />- Chứng chỉ Facebook Marketing&nbsp;
											<br />- Chứng chỉ tiếng Anh trình độ B1{' '}
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
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Sở thích
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Thiết kế website
											<br />- Đọc sách&nbsp;
											<br />- Đi du lịch&nbsp;
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
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Người tham chiếu
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											Ông Nguyễn Văn Phúc
											<br />
											Giám đốc điều hành Công ty TNHH Đầu tư CV365 Miền Bắc
											<br />
											Số điện thoại: 9687 128 532
											<br />{' '}
										</div>
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
									<div className="sumic1" />
									<div className="head">
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Trình độ học vấn
										</div>
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
												Đại học Kinh tế - Luật
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Chuyên ngành: Thương mại – điện tử
											</span>
										</p>
										<div
											className="exp-content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Xếp loại: Giỏi{' '}
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
								<div className="sum">
									<div className="sumic2" />
									<div className="head">
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Kinh nghiệm làm việc
										</div>
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
												Công ty TNHH Đầu tư CV365 Miền Bắc
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Trưởng nhóm Thương mại điện tử
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Quản lý chung các hệ thống website của công ty
											<br />- Tạo các bài viết chuẩn seo đưa lên website&nbsp;
											<br />- Làm Seo tổng thể theo kế hoạch chung của phòng Thương mại điện tử
											<br />- Làm quảng cáo Adwords, quảng cáo Facebook
											<br />- Phụ trách quản lý gian hàng của công ty ở trên những website đối tác
											<br />- Xây dựng website mới cho công ty
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
												Công ty TNHH CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vị trí: Nhân viên Digital Marketing
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											- Quản lý website của Công ty
											<br />- Làm quảng cáo Youtube, Zalo, Adword cho công ty.&nbsp;&nbsp;
											<br />- Lên kế hoạch Marketing theo các nhóm đối tượng cho công ty.
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
								<div className="sum">
									<div className="sumic3" />
									<div className="head">
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Hoạt động
										</div>
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
												Tình nguyện viên trong nhóm Tiếp sức mùa thi&nbsp;
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
											- Thành viên trong Hội Tình nguyện viên giúp đỡ các em nhỏ vùng cao khó khăn.
											<br />- Giảng dạy tình nguyện cho trẻ em tại trại trẻ mồ côi
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
								<div className="sum">
									<div className="sumic4" />
									<div className="head">
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Dự án tham gia
										</div>
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
												Dự án “Webiste thương hiệu” tại Công ty TNHH Đầu tư CV365 Miền Bắc
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
												Vai trò: Lập kế hoạch phát triển hệ thống website thương hiệu cho công ty, quản lý các khâu trong quá trình thực hiện của các
												bộ phận đảm nhiệm.
											</span>
										</p>
										<div
											className="exp-content err_cv_content"
											contentEditable="true"
											cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
										>
											Mục tiêu dự án: Nâng cao hơn nữa tên tuổi của công ty, trở thành địa chỉ tin cậy, gần gũi với khách hàng. Từ đó thúc đẩy hiệu
											suất kinh doanh của công ty.&nbsp; &nbsp;
											<br />{' '}
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
								<div className="sum">
									<div className="sumic5" />
									<div className="head">
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											Thông tin thêm
										</div>
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
									</div>{' '}
								</div>
							</div>
						</div>
					</div>
					<div className="clr" />
					<div className="footer">
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
