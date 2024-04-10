
interface Props {
	html: any
	in4CV: any
	in4user: any
	dataCvMau: any
	lang: any
	setHtml: any
	setshowmodal: any
	showmodal: any
	setshowZoomCV: any
	editImg: any
	setEditImg: any
}

const CV: React.FC<Props> = ({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }) => {
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
				<div id="form-cv" style={{ position: 'relative' }}>
					<div id="cv-top">
						<div id="box-hvt">
							<h1>
								<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
							</h1>
							<h2>
								<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
							</h2>
							<p>
								<span id="cv-profile-about" />
							</p>
						</div>
					</div>
					<div className="cv_tt">
						<div id="cv-main">
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
														Đại học CV365
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Chuyên ngành: Tài Chính – Ngân Hàng
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
														Công ty cổ phần bánh kẹo CV365
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Nhân viên kinh doanh
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Thiết lập mạng lưới nhà phân phối, đại lý bánh kẹo khu vực quận Hoàng Mai thông qua: Quảng cáo, giới thiệu chương trình
													khuyến mãi, …<br />- Tiếp cận, chăm sóc khách hàng đại lý cũ – mới trong khu vực quận Hoàng Mai: Giải đáp khó khăn, đưa các
													chương trình mới của công ty, báo giá hàng hóa, tư vấn dịch vụ…
													<br />- Đi đến các đại lý làm việc: Sản lượng tháng, hoa hồng tháng, …<br />- Làm việc với các đơn vị vận chuyển hàng hóa.
													<br />- Tổng hợp báo cáo kết quả làm việc, kế hoạch hoạt động theo tháng của các đại lý bánh kẹo khu vực quận Hoàng Mai.
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Công ty&nbsp; CV 365 Land
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Nhân viên kinh doanh Bất Động Sản
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Triển khai khai kế hoạch bán chung cư, căn hộ và các chương trình bán hàng thuộc dự án của Công ty.
													<br />- Đăng thông tin quảng cáo bất động sản trên internet (diễn đàn, mạng xã hội, rao vặt, website về bất động sản) để tìm
													kiếm nguồn khách hàng.
													<br />- Quản lý khách hàng, chăm sóc khách hàng trước – trong – sau khi chốt hợp đồng. Cụ thể: Gọi điện tư vấn, đưa khách
													hàng đi xem nhà, chốt hợp đồng với khách hàng mục tiêu…
													<br />- Hỗ trợ pháp lý cho khách hàng về thủ tục liên quan mua bán nhà và phối hợp với bộ phận Marketing để gia tăng lượng
													khách hàng có nhu cầu.&nbsp;
													<br />- Treo banner, phát tờ rơi để tạo sóng thị trường.
													<br />- Các công việc khác theo sự phân công của trưởng phòng kinh doanh.
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
														Chương trình giao lưu Shark Tank với sinh viên.
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														CLB Nhà quản trị tương lai tại trường Đại học CV365
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													CLB dành cho những bạn trẻ yêu thích kinh doanh. Ở đó tôi được học hỏi các kỹ năng: làm việc nhóm, kỹ năng thuyết trình, ….{' '}
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
														Giải cứu dưa hấu miền trung
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Đội thanh niên xung kích trường
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													Dự án “ Giải cứu dưa hấu miền trung” được thực hiện với đội thanh niên xung kích trường bán tại cổng trường Đại học CV365{' '}
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
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Tên công ty">
														Thêm những thông tin khác (nếu cần)
													</span>
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
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="cv-right">
								<div className="ir">
									<div className="box-01">
										<div id="cvo-profile-avatar-wraper">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
										<div className="clr" />
									</div>
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
											{' '}
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Thông tin liên hệ
												</span>
											</p>
											<p className="icoweb cvi-date">
												<i className="fa"></i>{' '}
												<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
													19/05/1992
												</span>
											</p>
											<p className="icoweb cvi-user">
												<i className="fa"></i>{' '}
												<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
													Nam
												</span>
											</p>
											<p className="icoweb cvi-phone">
												<i className="fa"></i> <span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
											</p>
											<p className="icoweb cvi-envelope-square">
												<i className="fa"></i>{' '}
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													test@gmail.com
												</span>
											</p>
											<p className="icoweb cvi-map-marker">
												<i className="fa"></i> <span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
											</p>
											<div className="line" />
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
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													Trong cuộc sống hay công việc tôi luôn đặt mục tiêu cho mình để phấn đấu hoàn thành nó, là kim chỉ nam giúp tôi có động lực
													để làm việc hơn.
													<br />
													Mục tiêu ngắn hạn: Nhân viên kinh doanh xuất sắc
													<br />
													Mục tiêu trung hạn: Trưởng phòng kinh doanh
													<br />
													Mục tiêu dài hạn: Giám đốc tài chính
													<br />{' '}
												</span>
											</p>
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
														Tiếng anh giao tiếp
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
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
													Giải thưởng
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
													- Giải khuyến khích cấp trường với đề tài nghiên cứu khoa học.
													<br />- Nhân viên có thành tích xuất sắc trong công tác thi đua năm 2017
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
													- Chứng chỉ hoàn thành khóa học chương trình WE (Working Efficiency), đây là chương trình do Viện Quản lý Kinh doanh Quốc tế
													(IBM) kết hợp với Đại học Kinh doanh quốc tế Thụy Sĩ xây dựng
													<br />- Chứng chỉ hoàn thành khóa tiếng anh giao tiếp: “ Tự tin giao tiếp với người bản ngữ”&nbsp; trung tâm tiếng anh CV365
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
													- Nghe nhạc- Xem phim- Đi du lịch kết hợp chụp ảnh&nbsp;- Thể thao: Đá bóng, bơi lội…&nbsp;{' '}
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
													Nguyễn Văn B – Phó giám đốc tài chính&nbsp;
													<br />
													Công ty CV 365 Land
													<br />
													SĐT: 0123456789{' '}
												</span>
											</p>
										</div>{' '}
									</div>
								</div>
							</div>
						</div>
						<div className="ft" />
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

export default CV
