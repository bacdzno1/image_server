export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }: any) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="Tiêu đề CV">
					<div dangerouslySetInnerHTML={{ __html: `${html?.cv_title}` }} />
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src={'/cv365/images/no_avatar.jpg'} />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span
												id="cv-profile-fullname"
												cvo-placeholder="Họ tên"
												contentEditable="true"
												dangerouslySetInnerHTML={{ __html: `${html?.name}` }}
											/>
										</h1>
										<h2>
											<span
												id="cv-profile-job"
												contentEditable="true"
												cvo-placeholder="Vị trí công việc bạn muốn ứng tuyển"
												dangerouslySetInnerHTML={{ __html: `${html?.position}` }}
											/>
										</h2>
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '21.8812px' }}>
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
												</div>
												{/* <div class="ifoic"></div> */}
												<div className="tt-box1">
													<div className="cumicc1" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Tiêu đề" className="box-title">
														{html?.menu[0]?.content?.title}
													</div>
												</div>
												<div id="prof">
													<div className="ic1">
														<div className="icf" />
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="Giới tính" contentEditable="true">
																<div dangerouslySetInnerHTML={{ __html: `${html?.menu[0]?.content?.content?.content?.sex}` }} />
															</span>
														</div>
													</div>
													<div className="ic2">
														<div className="icf" />
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="Ngày sinh" contentEditable="true">
																<div dangerouslySetInnerHTML={{ __html: `${html?.menu[0]?.content?.content?.content?.birthday}` }} />
															</span>
														</div>
													</div>
													<div className="ic3">
														<div className="icf" />
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="Điện thoại" contentEditable="true" />
														</div>
													</div>
													<div className="ic4">
														<div className="icf" />
														<div className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
																<div dangerouslySetInnerHTML={{ __html: `${html?.menu[0]?.content?.content?.content?.email}` }} />
															</span>
														</div>
													</div>
													<div className="ic5">
														<div className="icf" />
														<div className="icoweb">
															<span
																id="cv-profile-address"
																cvo-placeholder="Địa chỉ"
																contentEditable="true"
																dangerouslySetInnerHTML={{ __html: `${html?.menu[0]?.content?.content?.content?.address}` }}
															/>
														</div>
													</div>
													<div className="clr" />
												</div>
												<div className="clr" />
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '21.8812px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[1]?.content?.title}` }} />
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Nội dung"
													contentEditable="true"
													style={{ marginTop: '21.8812px' }}
												>
													<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${html?.menu[1]?.content?.content}` }} />
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
										</div>
										<div className="head">
											<div className="icright1" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[0]?.content?.title}` }} />
											</div>
										</div>
										<div id="experience-table">
											{html?.experiences[0]?.content?.content?.map((item: any, index: number) => {
												return (
													<div key={index} id="exp1" className="ctbx experience" style={{ marginTop: '28.6875px' }}>
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
																<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.title}` }} />
															</div>
															<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
																<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.date}` }} />
															</div>
														</h3>
														<p className="h3">
															<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
																<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.subtitle}` }} />
															</span>
														</p>
														<div
															className="exp-content"
															contentEditable="true"
															cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
														>
															<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.content}` }} />
														</div>
													</div>
												)
											})}
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
										</div>
										<div className="head">
											<div className="icright2" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Tiêu đề mục lớn" contentEditable="true">
												<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.title}` }} />
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[0]?.title}` }} />
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[0]?.subtitle}` }} />
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[0]?.content}` }} />
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
							<div id="cv-main" style={{ paddingBottom: '219.4px' }}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '-13px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[2]?.content?.title}` }} />
													</div>
												</div>
												<div className="exp content-edit skill">
													{html?.menu[2]?.content?.content?.skills?.map((item: any, index: number) => {
														return (
															<div className="ctbx" key={index}>
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
																	<div dangerouslySetInnerHTML={{ __html: `${item?.name}` }} />
																</p>
																<div className="bar-exp">
																	<div style={{ width: `${item?.exp}%` }} />
																</div>
																<div className="bar-value-exp">
																	<input min={0} max={100} type="text" defaultValue={50} />
																</div>
																<div className="exp-fake" />
															</div>
														)
													})}
													<div className="clr" />
												</div>
											</div>
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-13px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[3]?.content?.title}` }} />
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: '-13px' }}>
													<div dangerouslySetInnerHTML={{ __html: `${html?.menu[3]?.content?.content}` }} />
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-13px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[4]?.content?.title}` }} />
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: '-13px' }}>
													<div dangerouslySetInnerHTML={{ __html: `${html?.menu[4]?.content?.content}` }} />
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-13px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[5]?.content?.title}` }} />
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: '-13px' }}>
													<div dangerouslySetInnerHTML={{ __html: `${html?.menu[5]?.content?.content}` }} />
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-13px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.menu[6]?.content?.title}` }} />
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Nội dung" contentEditable="true" style={{ marginTop: '-13px' }}>
													<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${html?.menu[6]?.content?.content}` }} />
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '-15.7px' }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: '-15.7px' }}>
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
														<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[1]?.title}` }} />
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
														<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[1]?.subtitle}` }} />
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
												>
													<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[1]?.content?.content[1]?.content}` }} />
												</div>
											</div>
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '-15.7px' }}>
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
												<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[2]?.content?.title}` }} />
											</div>
										</div>
										<div id="experience-table">
											{html?.experiences[2]?.content?.content?.map((item: any, index: number) => {
												return (
													<div key={index} id="exp1" className="ctbx experience" style={{ marginTop: '21.5667px' }}>
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
																<div dangerouslySetInnerHTML={{ __html: `${item?.title}` }} />
															</div>
															<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
																<div dangerouslySetInnerHTML={{ __html: `${item?.date}` }} />
															</div>
														</h3>
														<p className="h3">
															<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
																<div dangerouslySetInnerHTML={{ __html: `${item?.subtitle}` }} />
															</span>
														</p>
														<div
															className="exp-content err_cv_content"
															contentEditable="true"
															cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
														>
															<div dangerouslySetInnerHTML={{ __html: `${item?.content}` }} />
														</div>
													</div>
												)
											})}
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: '-15.7px' }}>
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
												<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[3]?.content?.title}` }} />
											</div>
										</div>
										<div id="experience-table">
											{html?.experiences[3]?.content?.content?.map((item: any, index: number) => {
												return (
													<div key={index} id="exp1" className="ctbx experience" style={{ marginTop: '21.5667px' }}>
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
																<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.title}` }} />
															</div>
															<div className="bg-date">
																<div className="exp-date" contentEditable="true" cvo-placeholder="Thời gian làm việc">
																	<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.date}` }} />
																</div>
															</div>
														</h3>
														<p className="h3">
															<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
																<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.subtitle}` }} />
															</span>
														</p>
														<div
															className="exp-content err_cv_content"
															contentEditable="true"
															cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
														>
															<div className="err_cv_content" dangerouslySetInnerHTML={{ __html: `${item?.content}` }} />
														</div>
													</div>
												)
											})}
										</div>
									</div>
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: '-15.7px' }}>
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
												<div dangerouslySetInnerHTML={{ __html: `${html?.experiences[4]?.content?.title}` }} />
											</div>
										</div>
										<div id="experience-table">
											{html?.experiences[4]?.content?.content?.map((item: any, index: number) => {
												return (
													<div id="exp1" className="ctbx experience" key={index}>
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
																<div dangerouslySetInnerHTML={{ __html: `${item?.title}` }} />
															</div>
														</h3>
														<p className="h3">
															<span className="exp-subtitle" cvo-placeholder="Vị trí công việc" contentEditable="true">
																<div dangerouslySetInnerHTML={{ __html: `${item?.subtitle}` }} />
															</span>
														</p>
														<div
															className="exp-content"
															contentEditable="true"
															cvo-placeholder="Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc."
														>
															<div dangerouslySetInnerHTML={{ __html: `${item?.content}` }} />
														</div>
													</div>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer"></div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="watermark">© Timviec365.vn</div>
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
