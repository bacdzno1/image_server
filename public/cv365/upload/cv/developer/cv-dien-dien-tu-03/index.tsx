export default function CV({ html }: { html: any }) {
	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title" />
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
							</div>
							<div id="box-hvt">
								<h1>
									<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
								</h1>
								<h2>
									<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
								</h2>
							</div>
						</div>
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												INFORMATION
											</span>
										</h3>
										<div id="prof">
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
														19/05/1992
													</span>
												</p>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<p className="icoweb">
													<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
														Male
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
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
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
												</p>
											</div>
											{/*  <div class="ic">
                              <p class="icf"><i class="fa">&#xf129;</i></p>
                              <p class="icoweb"><span id="cv-profile-face" cvo-placeholder="Facebook" contenteditable="true"></span></p>
                          </div> */}
											<div className="clr" />
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CAREER GOALS
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- I look forward to finding a working environment suitable to my expertise and competence with a good remuneration so I can
											devote myself to my work.
											<br />- Learning and researching more about the electrical engineering industry with new technologies as well as applying the
											knowledge gained in the work, achieving the goal of becoming an expert in electronic engineering.
											<br />{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												PERSONAL SKILLS
											</span>
										</h3>
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
													Office Informatics
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
													English for Communication
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
													Proficiently using of Auto Cad
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
													Logical and creative thinking
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												AWARDS&nbsp;
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Certificate of Merit for Top 5 Trainees with good achievements in the process of studying and working at Timviec365.vn
											Electrical Industrial Company
											<br />- Certificate of merit for the school team for outstanding achievements in the union work in 2017
											<br />- Certificate of merit for " Good people and good deeds" of the university
											<br />{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CERTIFICATES
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Auto Cad Certificate
											<br />- Certificate of electromechanical supervision
											<br />{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												Hobbies&nbsp;
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Sports: Soccer, swimming ...
											<br />- Participating in social activities
											<br />- Learning new technology, new technology products
											<br />{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												References&nbsp;
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											Nguyen Van B - Chief Engineer
											<br />
											Timviec365.vn Electromechanical Joint Stock Company
											<br />
											Telephone: 0123456789{' '}
										</div>
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											EDUCATION
										</span>
									</p>
									<div id="experience-table">
										<div id="exp1" className="ctbx experience">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Timviec365.vn University
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Major: Electrical – Electronics
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Classification: Distinction{' '}
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
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											WORKING EXPERIENCE
										</span>
									</p>
									<div id="experience-table">
										<div id="exp1" className="ctbx experience">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Timviec365.vn Electromechanical Joint Stock Company
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: Electromechanical technical staff
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Programming and designing the building management interface of Timviec365.vn: Electrical building system.
												<br />- Designing and assembling of electrical cabinets, DDC (control cabinets)
												<br />- Supervising of construction of Timviec365.vn: Electrical building system.
												<br />- Managing quality records;&nbsp; material inputs records
												<br />- Reporting work daily
												<br />{' '}
											</div>
										</div>
										<div id="exp2" className="ctbx experience">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Timviec365.vn Electrical Industry Company
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: Trainee
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Learning the working environment of mechatronics engineers, electrical and electronic equipment in the company.
												<br />- Making internship report
												<br />{' '}
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
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											ACTIVITIES
										</span>
									</p>
									<div id="experience-table">
										<div id="exp1" className="ctbx experience">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Participating in volunteer activities in the university
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Volunteer (09/2013 - 08/2014)
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Warm towel project for children, donating and organizing of giving gifts for poor children
												<br /> Giving added strength in the entrance exam
												<br />
												Participating in extracurricular activities at the company
												<br />
												Team building - Colleagues cohesion
												<br />
												Participating in seminars on electric - electronic topic technology.
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
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											PROJECT PARTICIPATION
										</span>
									</p>
									<div id="experience-table">
										<div id="exp1" className="ctbx experience">
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
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Project: Building an anti-theft warning system
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Final year project
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Work: giving ideas for warning systems, hardware designing and programming, testing runs and upgrading warning systems.
												Reporting Final year project{' '}
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
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											Further information
										</span>
									</p>
									<div id="experience-table">
										<div id="exp1" className="ctbx experience">
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
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ft">
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
