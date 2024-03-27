export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					CV Khu chế xuất - Khu công nghiệp
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div className="anh">
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
											<div className="fake_img" />
										</div>
									</div>
									<div className="ifo">
										<div className="chu">
											<h1>
												<span id="cv-profile-fullname" cvo-placeholder="Họ tên" contentEditable="true" />
											</h1>
											<div className="clr" />
											<h2>
												<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển" />
											</h2>
											<div className="clr" />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											{' '}
											<div id="prof">
												<div className="ic2">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
															Nam
														</span>
													</div>
												</div>
												<div className="ic1">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
															18/01/1993
														</span>
													</div>
												</div>
												<div className="ic3">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
													</div>
												</div>
												<div className="ic4">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
															Nguyendohuynam93@gmail.com
														</span>
													</div>
												</div>
												<div className="ic5">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="Địa chỉ" contentEditable="true" />
													</div>
												</div>
												<div className="clr" />
											</div>
											{/* add div */}
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: 30 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '22.5px' }}>
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
												</div>
												{/* <div class="ifoic"></div> */}
												{/* <div class="tt-box1">
                                                          <div class="cumicc1"></div>
                                                          <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="Tiêu đề" class="box-title">Thông tin liên hệ</div></div> */}
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '22.5px' }}>
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
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Mục tiêu nghề nghiệp
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '22.5px' }}
														>
															- Có thể tìm hiểu và đưa tay nghề kỹ thuật của mình lên một tầm cao mới để giúp tối giản sức lao động cho người lao động
															là niềm đam mê mà tôi luôn phấn đấu hết mình trong quá trình làm việc. Chính vì thế, dù ở môi trường nào tôi cũng muốn
															cố gắng thật nhiều để cống hiến nhiều nhất sức lực và khả năng của mình.
															<br />- Mong muốn của tôi là được làm việc trong môi trường chuyên nghiệp. Với sự phát triển mạnh mẽ của công ty nói
															riêng và toàn khu công nghiệp ABC nói riêng, tôi hy vọng có thể học hỏi, tích lũy được nhiều kinh nghiệm việc làm hơn
															nữa để vừa có thể củng cố tay nghề kỹ thuật của mình, vừa có thể tham gia hiệu quả vào quá trình phát triển doanh
															nghiệp.
															<br />- Trong tương lai, tôi sẽ cố gắng để trở thành một nhà quản lý mẫu mực, có khả năng truyền nhiệt huyết và cảm hứng
															lớn với công việc cho nhân viên để từ đó có thể xây dựng nên một đội ngũ đoàn kết, vững mạnh và có chất lượng làm việc
															tốt nhất.&nbsp;{' '}
														</div>
													</div>
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '-4.25px' }}>
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
										</div>
										<div className="head">
											<div className="icright1" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Trình độ học vấn
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '-2.83333px' }}>
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
														Đại học Sư phạm kỹ thuật Hà Nội
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														(9/2011- 7/2015)
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														- Chuyên ngành: Vận hành máy
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Bằng Tốt nghiệp: Loại Khá{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '-2.83333px' }}>
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
														Trung tâm đào tạo nghề AZ{' '}
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														(7/2014-7/2015)
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														- Học viên
													</span>
												</p>
												<div
													className="exp-content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tham gia các khóa đào tạo chuyên ngành vận hành – sản xuất{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '-4.25px' }}>
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
										</div>
										<div className="head">
											<div className="icright2" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Kinh nghiệm làm việc
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '-2.83333px' }}>
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
														Công ty Cổ phần Sản xuất hàng may mặc Ánh Sao – Khu công nghiệp Hoa Nam
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														Thời gian: 12/2016 – hiện tại
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Quản lý hệ thống máy may công nghiệp
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Quản lý tất cả các hoạt động vận hành, phát triển các bộ phận sản xuất hàng may mặc, giày dép cung cấp đến các cửa hàng
													trực thuộc công ty Ánh Sao.
													<br />- Kiểm soát các quy trình sản xuất sản phẩm.
													<br />- Nghiệm thu chất lượng sản phẩm theo tiêu chuẩn của công ty quy định.
													<br />- Lên kế hoạch sản xuất và lập các đơn hàng giao cho các bộ phận may.
													<br />- Tiếp nhận nhân công và chỉ đạo hoạt động hướng dẫn, đào tạo{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '5.375px' }}>
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
													<div className="cumicc3" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Kỹ năng
													</div>
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
															- Sắp xếp và quản lý công việc hiệu quả.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Lập kế hoạch nhiệm vụ, phân công công việc.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Nắm vững quy trình vận hành của hệ thống máy sản xuất công nghiệp.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Tính tình trung thực, khả năng tự học hỏi cao.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Có hoài bão lớn, nhanh nhẹn.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Khả năng làm việc độc lập tốt, làm việc nhóm hiệu quả.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Biết sử dụng các công cụ vẽ kỹ thuật Auto Card.
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
																<i className="fa fa-minus" /> Xóa
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															- Nắm vững kỹ năng tin học văn phòng.
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="exp-fake" />
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '5.375px' }}>
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Giải thưởng
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '5.375px' }}
														>
															- Nhân viên xuất sắc tại Nhà máy Sản xuất BACS.
															<br />- Sinh viên viên ưu tú, tích cực của trường Đại học Sư phạm Kỹ thuật Hà Nội.{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '5.375px' }}>
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
													<div className="cumicc5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Chứng chỉ
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '5.375px' }}
														>
															- Bằng tốt nghiệp loại khá khoa Vận hành máy
															<br />- Chứng chỉ tin học văn phòng
															<br />- Chứng chỉ tiếng Anh trình độ B{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '5.375px' }}>
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
													<div className="cumicc6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Sở thích
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="Nội dung"
															contentEditable="true"
															style={{ marginTop: '5.375px' }}
														>
															- Đi du lịch
															<br />- Xem phim
															<br />- Đá bóng
															<br />- Nghiên cứu các dòng máy phục vụ sản xuất công nghiệp{' '}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '43.75px' }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: '21.875px' }}>
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
														Nhà máy Sản xuất BACS – Khu chế xuất Quảng An
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
														Thời gian: 04/2015 – 11/2016
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Vị trí: Kỹ sư cơ khí
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Sử dụng thành thạo các phần mềm Solid works và Auto Card nhằm phục vụ hiệu quả cho các bản vẽ kỹ thuật, bản vẽ chi tiết
													sản phẩm.
													<br />- Phụ trách việc liên hệ với các nhà cung ứng nguyên liệu để lên đơn đặt hàng, giám sát việc đặt hàng cho đội ngũ sản
													xuất của nhà máy, kiểm tra lại sản phẩm sau khi đã nhận hàng.
													<br />- Chuẩn bị đầy đủ mọi vật tư, thiết bị cần thiết đối với quá trình lắp ráp và quá trình sản phẩm được hoàn thiện.
													<br />- Tham gia nhiệm vụ thi công trực tiếp tại những trạm tạo tín hiệu cho mạng lưới giao thông, trạm thu phí hay tại
													những car bin ở tỉnh lẻ.&nbsp;&nbsp;{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '43.75px' }}>
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
										</div>
										<div className="head">
											<div className="icright3" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												Hoạt động
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '21.875px' }}>
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
														Đại học Sư phạm Kỹ thuật Hà Nội.
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
													- Tham gia vào các hoạt động ngoại khóa dành cho sinh viên.
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '21.875px' }}>
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
														Câu lạc bộ Thanh niên Thành phố 4.0:&nbsp;
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														- Vị trí: Nhóm trưởng
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Hoạt động: Thường xuyên tổ chức các hoạt động ngoại khóa cho thành viên để kích thích tinh thần học tập, tổ chức các
													chuyến đi thiện nguyện trên vùng cao, kêu gọi sự ủng hộ quyên góp để giúp đỡ các hoàn cảnh khó khăn ở miền núi.
													<br />{' '}
												</div>
											</div>
											<div id="exp3" className="ctbx experience" style={{ marginTop: '21.875px' }}>
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="Tên công ty">
														Ban quản lý Khu công nghiệp Hoa Nam
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														- Vị trí: Nhóm trưởng
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													- Tổ chức hoạt động sinh hoạt ngoại khoa.
													<br />- Lên kế hoạch tổ chức chương trình giao lưu, liên hoan giữa các Công ty, tổ đội sản xuất ở trong khu công nghiệp nhằm
													thúc đẩy tinh thần làm việc của người lao động.{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={3}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{ paddingBottom: 792 }}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: 10 }}>
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
													<div className="cumicc7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														Người tham chiếu
													</div>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: 10 }}>
															Bà Trần Hoàng Thu Minh
															<br />
															Giám đốc Công ty Cổ phần Sản xuất hàng may mặc Ánh Sao
															<br />
															0327 187 635{' '}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
										</div>
										<div className="head">
											<div className="icright4" />
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
														Công ty Cổ phần Sản xuất hàng may mặc Ánh Sao&nbsp; 8/2018&nbsp;Một học viên Ánh Sao – Một nhân tài bước vào hội nhập
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														- Vai trò : Người tổ chức thực hiện phong trào thi đua nhân viên làm việc tích cực, hăng say.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													-Kết quả: Toàn bộ nhân viên của tổ sản xuất may mặc thuộc công ty Ánh Sao được tham gia vào các chương trình đào tạo nâng
													cao tay nghề do công ty tổ chức với sự hướng dẫn đào tạo của các chuyên gia hàng đầu về công nghệ may mặc. Qua đó, có 95%
													lao động tại công ty nắm bắt được những kỹ thuật mới tân tiến trong hoạt động may mặc.&nbsp;{' '}
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
										</div>
										<div className="head">
											<div className="icright5" />
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
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														Thêm những thông tin khác ( nếu cần )
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
						</div>
						<div className="footer">
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
