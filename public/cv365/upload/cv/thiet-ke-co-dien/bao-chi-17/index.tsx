
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
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					cv báo chí
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
								<div className="box-dm" />
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
						<div id="box01" className="block cvo-block box-contact">
							{' '}
							<div id="prof">
								<div className="prof-left">
									<div className="ic">
										<div className="icf">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
												Nữ
											</span>
										</div>
									</div>
									<div className="ic">
										<div className="icf">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
												21/05/1993
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
								</div>
								<div className="prof-right">
									<div className="ic1">
										<div className="icf">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
												Dothuthao93@gmail.com
											</span>
										</div>
									</div>
									<div className="ic2">
										<div className="icf">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
						</div>
					</div>
					<div className="all" style={{ marginTop: '-2px' }}>
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												MỤC TIÊU NGHỀ NGHIỆP
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											-Áp dụng những kinh nghiệm, kỹ năng đã học thuộc chuyên ngành báo chí, truyền hình cũng như sự hiểu biết về xã hội để từ đó có
											thể trở thành một người nhân viên chuyên nghiệp. Tôi mong muốn sẽ có được cơ hội để có thể tiếp cận đúng chuyên ngành của mình
											và được làm các công việc yêu thích.
											<br />{' '}
										</span>
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												KỸ NĂNG
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
														<i className="fa fa-minus" /> Xóa{' '}
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
												<div className="exp-fake" />
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
													Tiếng anh giao tiếp
												</p>
												<div className="bar-exp">
													<div style={{ width: '80%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={80} />
												</div>
												<div className="exp-fake" />
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
													- Chỉnh sửa video, làm photoshop, lightroom
												</p>
												<div className="bar-exp">
													<div style={{ width: '90%' }} />
												</div>
												<div className="bar-value-exp">
													<input min={0} max={100} type="text" defaultValue={90} />
												</div>
												<div className="exp-fake" />
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												GIẢI THƯỞNG
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											-&nbsp; Thành viên ưu tú của Câu lạc bộ Báo chí và cuộc sống
											<br />
											-&nbsp;&nbsp;Giải nhất cuộc thi Báo trẻ do Nhà trường tổ chức
											<br />
											- Sinh viên tốt nghiệp xuất sắc của Cao đẳng truyền hình
											<br />{' '}
										</span>
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												CHỨNG CHỈ
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											-&nbsp;Chứng chỉ chứng nhận đã tham gia và hoàn thành&nbsp; <br />- khóa học phát thanh <br />
											-&nbsp;Chứng chỉ tiếng Anh B1
											<br />{' '}
										</span>
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												SỞ THÍCH
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Đóc sách
											<br />- Chụp ảnh, làm Video
											<br />- Đi du lịch
											<br />{' '}
										</span>
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
												NGƯỜI THAM CHIẾU
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true">
											- Ông Nguyễn Giáp Nhị - Chủ tịch Câu lạc Bộ Báo chí và cuộc sống - Số điện thoại: 0987 564 198{' '}
										</span>
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											TRÌNH ĐỘ HỌC VẤN
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
													Trường: Cao đẳng truyền hình
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Chuyên ngành: Báo chí tuyên truyền
												</span>
											</p>
											<div
												className="exp-content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												Xếp loại: Khá&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
												&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;{' '}
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											KINH NGHIỆM LÀM VIỆC
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
													Công ty Truyền Thông Mắt Việt CV365.
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Phóng viên
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Phụ trách tờ báo Richkids
												<br />- Đi thực tế tại các trường Đại Học để lấy tin về chủ đề học sinh , sinh viên.
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
													Công ty Mobi CV365.
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Nhân viên chăm sóc khách hàng
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Hỗ trợ khách hàng qua tổng đài, giải đáp mọi thắc mắc của khách hàng
												<br />- Giới&nbsp;thiệu và tư vấn về sản phẩm.
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
													Tạp chí Hành trình CV365.
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vị trí: Cộng tác viên{' '}
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												-&nbsp; Hiện công việc viết báo, và biên tập nội dung , Video.{' '}
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											HOẠT ĐỘNG
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
													Tham gia hoạt động tình nguyện tại trường
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
												- Tham gia hoạt động của Nhóm tình nguyện viên Tiếp sức mùa thi tại Học viện Báo chí và Tuyên truyền
												<br />
												<br />- Tham gia vào Hội phát động Quỹ từ thiện để giúp đỡ các trẻ em nghèo vùng cao
												<br />
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											DỰ ÁN THAM GIA
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
													Dự án phóng viên biết tuốt tại Hội thi Tài năng trẻ trong nghành báo chí do Công ty Promosion CV365 tổ chức.
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
													Vai trò: Lên ý tưởng, điều phối các thành viên trong nhóm thực hiện các kế hoạch được phân công
												</span>
											</p>
											<div
												className="exp-content err_cv_content"
												contentEditable="true"
												cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
											>
												- Kết quả: Đội giành giải nhất về khâu ý tưởng và được lựa chọn trở thành cộng tác viên lâu dài cho Công ty Promotion CV365{' '}
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
											THÔNG TIN THÊM
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
										</div>{' '}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="clr" />
					<div id="footer">
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
