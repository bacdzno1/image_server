export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title" />
				<div id="form-cv">
					<div className="cv-div">
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
									<div id="box-hvt">
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
										</h2>
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
										</h1>
										<p>
											<span id="cv-profile-about" />
										</p>
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
											<p className="ic">
												<i className="fa"></i>
											</p>
											<p className="icoweb cvi-phone">
												<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
											</p>
											<p className="ic">
												<i className="fa"></i>
											</p>
											<p className="icoweb cvi-date">
												<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
													19/05/1992
												</span>
											</p>
											<p className="ic">
												<i className="fa"></i>
											</p>
											<p className="icoweb cvi-envelope-square">
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													blackzero1995@gmail.com
												</span>
											</p>
											<p className="ic">
												<i className="fa"></i>
											</p>
											<p className="icoweb cvi-map-marker">
												<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
											</p>
											<p className="last_bg" />
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CAREER GOALS
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													In the next year, I will become Head of Administrative Personnel.
													<br />
													With 3 years of experience in equivalent positions in Administrative Personnel major and my passion, constantly learning for
													work, I believe that I will be successful when I am accepted.
													<br />
													HARD-WORKING – DEDICATION – PASSION ARE MY LEADING CRITERIA
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
														Human resources skill
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
														Office Informatics
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													AWARDS&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Certificate of merit of the delegation for outstanding achievements in the process of joining the team at the university.
													<br />- The best recruiting consultant employee in 10/2017 at CV365 English Center{' '}
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CERTIFICATES
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Graduation certificate upon completion of the course: "Office Administration and Personnel Management from A-Z"
													<br />- Certificate of basic information technology application
													<br />- Toeic 450{' '}
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													Hobbies&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Sports: Football, Volleyball.
													<br />- Traveling
													<br />- Swimming
													<br />- Collective activity <br />- Watching movies
													<br />{' '}
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													References&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Nguyen Thi B – Chief accountant
													<br />
													CV365 Joint Stock Company
													<br />
													Mobile phone: 0123456789{' '}
												</span>
											</p>
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
														CV365 University 10/2010 - 05/2014
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Major: Human resources management&nbsp;
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Classification: Excellent&nbsp;{' '}
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
														CP CV 365 Company (11/2015 - Present)
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Administrative personnel
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Administrative office:
													<br />- Complying with the regulations of the company and laws of the State such as: day-off leave, retirement leave, absent
													from work, payroll, social insurance, tax registration for employees and benefits related to salary, appointment, assignment
													... for the staff in the company
													<br />- Managing the company's seal, documents, directly managing of stationery, managing of machinery and equipment in the
													office; implementing the administrative documents of the company. Archiving media contracts, advertising in a scientific
													way. Signing and sealing of official letters, acceptance minutes of communication contracts, advertisements, events, ...
													<br />
													-&nbsp; Receiving and archiving outside and internal documents among&nbsp; internal units or State agencies;
													<br />
													Personnel recruitment:&nbsp;
													<br />- Recruiting personnel when directed by superior or departmental requirements
													<br />- Performing other tasks as required by the Direct Manager.
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
														CV365 Company (06/2014 - 10/2015)
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Administrative personnel manager assistant.
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Managing documents, dispatches related to administrative office, company records.
													<br />- Drafting documents;&nbsp; dispatches at the request of the head.
													<br />- Performing other tasks under the direction of the department head.
													<br />- Participating in the process of recruiting collaborators, agents, sales staff,…
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
														Joining the volunteer team: Following the direction of the delegation.
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														A number of typical activities have taken place:
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													+/ Supporting competition season 2015, 2016: Supporting Candidates and their relatives on campus when taking the University
													entrance examination
													<br />
													+/ Supplying free porridge in the hospital. <br />{' '}
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
														Project: Porridge of happiness
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Supplying free porridge every Saturday at the hospital
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Main role: Recruiting volunteers are students in the school having wished to be volunteer
													<br />
													General role: A member who directly participates in volunteering supplement free porridge at the hospital.
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
											</div>{' '}
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
