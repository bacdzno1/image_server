export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title">
					kiến trúc nội thất
				</div>
				<div id="form-cv" style={{ position: 'relative' }}>
					<div className="cv_tt">
						<div id="cv-main">
							<div id="cv-top">
								<div className="box-01">
									<div id="box-hvt">
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
										<div className="outsite">
											<div className="inside1"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
														EDUCATION
													</span>
												</p>
											</div>
										</div>
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
														Major: Interior design
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Classification: Good{' '}
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
										<div className="outsite">
											<div className="inside2"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
														WORKING EXPERIENCE
													</span>
												</p>
											</div>
										</div>
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
														Timviec365.vn Interior Joint Stock Company
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Engineer monitoring the interior execution
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Receiving design demands of customers from the manager
													<div>
														- Surveying, measuring the current status of the work
														<br />
													</div>
													<div>
														- Attending a meeting to discuss and offer design plan, formulating design ideas
														<br />
													</div>
													<div>
														- Designing, executing the drawing including making 3D layout plan, elevation plan, cross-section and describing using
														features, etc.
														<br />
													</div>
													<div>
														- Sending drawings for customers and asking for consultations for using features.
														<br />
													</div>
													<div>
														- Managing files, participating in the monitoring implementation during the execution period.
														<br />
													</div>
													<div>- Performing other related tasks according to requirements of the superior.</div>{' '}
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
														Timviec365.vn Company
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Engineering monitoring interior design
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Working with subcontractors, providers to ensure the quantity, models, working progress, etc.
													<br />{' '}
													<div>
														- Monitoring the interior execution process
														<br />
													</div>
													<div>- Reporting monthly and when the project ends</div>{' '}
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
										<div className="outsite">
											<div className="inside3"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
														ACTIVITIES
													</span>
												</p>
											</div>
										</div>
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
														- Students’ Union of Timviec365 University
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Member
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Activities: Organizing and implementing activities of City group, organizing charity activities, organizing sharing -
													dialogue forums between the University and students, etc.
													<br />{' '}
													<div>
														- Participating in a football club in the locality.
														<br />
													</div>{' '}
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
										<div className="outsite">
											<div className="inside4"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
														PROJECT PARTICIPATION
													</span>
												</p>
											</div>
										</div>
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
														Project of interior work execution
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Customer: Timviec365.vn Tourism Investment Company, Timviec365.vn Joint Stock Company
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Work to do: Formulating design ideas for the work interior under requirements of customers, implementing the drawings and
													monitoring the interior execution
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
										<div className="outsite">
											<div className="inside5"></div>
											<div className="ctnexp">
												<p className="head">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
														Further information
													</span>
												</p>
											</div>
										</div>
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
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Add other information (if needed):{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
											{' '}
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													BACKGROUND INFORMATION
												</span>
											</h3>
											<p className="icoweb cvi-date">
												Ngày sinh:
												<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
													19/05/1992
												</span>
											</p>
											<p className="icoweb cvi-user">
												Giới tính:
												<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
													male
												</span>
											</p>
											<p className="icoweb cvi-phone">
												Số điện thoại:
												<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
											</p>
											<p className="icoweb cvi-envelope-square">
												Email:
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													blackzero1995@gmail.com
												</span>
											</p>
											<p className="icoweb cvi-map-marker">
												Địa chỉ:
												<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
											</p>
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
												<span className="box-content" cvo-placeholder="Content" contentEditable="true">
													With experiences gained during the working time in construction and interior design, together with quick acquisition, my
													carefulness as well as my ability of arranging tasks, I believe that I will well completed the assigned tasks.
													<br />
												</span>
											</p>
											<div>I always wish to apply my knowledge and actual working experience to contribute to the company development.</div> <p />
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
														Office IT
													</p>
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
														English for communication
													</p>
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
														Reading, taking off quantity of engineering drawings
													</p>
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
														incident solving skills during the execution
													</p>
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
													Certificate of merits for achievements in developing the University’s Union movements
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
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CERTIFICATES
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Certificate of completion of Interior Design and Decoration course
													<br />- Certificate of Applied Informatics for Autocad 2D
													<br />- Certificate of English Proficiency for Level B1
													<br />- Certificate of completion of an English course named “To be confident to communicate with foreigners”
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
													Timviec365.vn Interior Joint Stock Company
													<br />
													Mobile phone: 0123456789{' '}
												</span>
											</p>
										</div>{' '}
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
