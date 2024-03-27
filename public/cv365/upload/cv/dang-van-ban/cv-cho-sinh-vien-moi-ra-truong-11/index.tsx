export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title">
					Dành Cho Người Mới Ra Trường
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
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
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
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
												</div>
												{/* <div class="ifoic"></div> */}
												<div className="tt-box1">
													<div className="cumicc1" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title" />
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
																19/05/1992
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
																female
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
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
															<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
														</div>
													</div>
													<div className="clr" />
												</div>
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
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CAREER GOALS
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													I look forward to becoming an excellent employee at the company through dedication efforts.
													<br />
													Being able to work in a stable environment, able to stay long-term and further improve at the company, strive to become a
													Sales Manager after 3 years of working.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div className="nen"></div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '22.85px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												EDUCATION
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.2333px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Vietnam University of Commerce
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Faculty: Business administration
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													GPA: 7.9&nbsp;{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '22.85px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												WORKING EXPERIENCE
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.2333px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														CV365 Tutor Center
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: tutor at the Center and tutor at home
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Tutoring secondary school students in mathematics at the student's own home
													<br />- Teaching English at the Center for classes according to the assignment.&nbsp;
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '15.2333px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														CV365Service Trading Center&nbsp;
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Part-time salesperson
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Directly selling at cosmetic stores
													<br />- Consulting customers, introducing products for customers
													<br />- Carrying out cleaning of the store at the beginning of the shift and the end of the working day.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer"></div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '18.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														PERSONAL SKILLS
													</div>
												</div>
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> Add
															</div>
															<div className="edit js-edit-content"> Edit</div>
															<div className="remove">
																<i className="fa fa-minus" /> Delete
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Skill in using fluently Word and Excel
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
																<i className="fa fa-plus" /> Add
															</div>
															<div className="edit js-edit-content"> Edit</div>
															<div className="remove">
																<i className="fa fa-minus" /> Delete
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Presentation skills in public
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
																<i className="fa fa-plus" /> Add
															</div>
															<div className="edit js-edit-content"> Edit</div>
															<div className="remove">
																<i className="fa fa-minus" /> Delete
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Hard work, high sense of responsibility
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '18.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														AWARDS&nbsp;
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true" style={{ marginTop: '18.64px' }}>
													Active member at the Future Management Club and Voluntary Blood Donation Team
													<br />
													Excellent student for 2 consecutive years at Vietnam University of Commerce
													<br />{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '18.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CERTIFICATES
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true" style={{ marginTop: '18.64px' }}>
													Communication English certificate at level B1
													<br />
													Office computing certificate at level A<br />
													Management training certificate at CV365 Skill Center
													<br />{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '18.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														Hobbies&nbsp;
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true" style={{ marginTop: '18.64px' }}>
													- Reading books about business
													<br />- Communicating with people to expand relationships
													<br />- Swimming
													<br />{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '18.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														References&nbsp;
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true" style={{ marginTop: '18.64px' }}>
													Mr. Tran Van Dung
													<br />
													Dean of Business Administration Faculty of Vietnam University of Commerce
													<br />
													Phone number: 0986 143 256
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
									<div className="nen"></div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '455.4px' }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												ACTIVITIES
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														- Head of the Future Manager Club at the Vietnam University of Commerce
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Volunteer (09/2013 - 08/2014)
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													In charge of connecting members in the University's Voluntary Blood Donation Team.
													<br /> Organizing volunteer activities to help poor children in remote areas
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												PROJECT PARTICIPATION
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Collaborative compilation of curricula for primary and secondary school students at CV365 Tutor Center
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Role: Directly writing the content of the lesson in accordance with the secondary education level
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Results: The curriculum is appropriate and close to the students. Since then, it helps them to acquire knowledge.{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												Further information
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete
													</div>
												</div>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Add other information (if needed):
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements."></div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="watermark">∴ Timviec365.vn</div>
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
