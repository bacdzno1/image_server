export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title" />
				<div id="form-cv" style={{ position: 'relative' }}>
					<div id="cv-top">
						{/* Div avatar */}
						<div id="bg-avata">
							<div className="ava">
								<div id="cvo-profile-avatar-wraper">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
								</div>
							</div>
							<div className="box-dm" />
						</div>
						<div className="box-info">
							<div id="box01" className="block cvo-block box-contact">
								<div id="infor-left">
									<div className="ic">
										<p className="icf1">{/* <i class="fa">&#xf1fd;</i> */}</p>
										<p className="icoweb">
											<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
												19/05/1992
											</span>
										</p>
									</div>
									<div className="ic">
										<p className="icf2">{/* <i class="fa">&#xf095;</i> */}</p>
										<p className="icoweb">
											<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
										</p>
									</div>
									{/* <div class="ic">

                          <p class="icf"><i class="fa">&#xf228;</i></p>
                          <p class="icoweb"><span id="cv-profile-sex" cvo-placeholder="Gender "
                                  contenteditable="true">male</span></p>
                      </div> */}
								</div>
								<div id="infor-right">
									<div className="ic">
										<p className="icf3">{/* <i class="fa">&#xf199;</i> */}</p>
										<p className="icoweb">
											<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
												test@gmail.com
											</span>
										</p>
									</div>
									{/* <div class="ic">
                          <p class="icf"><i class="fa">&#xf09a;</i></p>
                          <p class="icoweb"><span id="cv-profile-face"
                                  cvo-placeholder="Facebook"
                                  contenteditable="true"></span></p>
                      </div> */}
									<div className="ic">
										<p className="icf4">{/* <i class="fa">&#xf041;</i> */}</p>
										<p className="icoweb">
											<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
										</p>
									</div>
								</div>
							</div>{' '}
						</div>
						<div className="box-01">
							<div id="box-hvt">
								<h1>
									<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
								</h1>
								<h2>
									<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
								</h2>
								{/* <p><span id="cv-profile-about"></span></p> */}
							</div>
							<div className="clr" />
						</div>
					</div>
					{/* end div avatar */}
					<div className="all">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}></div>
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
										{/* icon title */}
										<h3>
											<div className="image" align="center">
												<div className="bgic-2" />
											</div>
											<div className="text">
												{' '}
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CAREER GOALS
												</span>
											</div>
										</h3>
										{/* end icon title */}
										<div id="bg-content">
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Graduated in mechanical engineering major, I am chasing the position of CNC Software engineer with all my passion and
													understanding and experience.
													<br />
													My long-term goal is to constantly learn to be a versatile mechanical engineer, after 5 years to become a chief engineer.
													<br />{' '}
												</span>
											</p>
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
										{/* icon titlt skill */}
										<h3>
											<div className="text">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													PERSONAL SKILLS
												</span>
											</div>
											<div className="image" align="center">
												<div className="icon-skikll" />
											</div>
										</h3>
										{/* end icon title skill */}
										<div className="exp content-edit skill">
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> Add{' '}
													</div>
													<div className="edit js-edit-content"> Edit</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Proficiently using in Autocad 2D, 3D
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
														<i className="fa fa-plus" /> Add{' '}
													</div>
													<div className="edit js-edit-content"> Edit</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Writing a hand program for Fanuc CNC milling machines and OKUMA
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
														<i className="fa fa-plus" /> Add{' '}
													</div>
													<div className="edit js-edit-content"> Edit</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Proficiently using and operating 3 Axis and 4 Axis CNC Milling machines
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
														<i className="fa fa-plus" /> Add{' '}
													</div>
													<div className="edit js-edit-content"> Edit</div>
													<div className="remove">
														<i className="fa fa-minus" /> Delete{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													Effective time management
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
										{/* icon title */}
										<h3>
											<div className="image" align="center">
												<div className="bgic-4" />
											</div>
											<div className="text">
												{' '}
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													AWARDS&nbsp;
												</span>
											</div>
										</h3>
										{/* end icon title */}
										<div id="bg-content">
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Third award of school-level scientific research project.
													<br />- Certificate of merit for the school delegation for their achievements in participating in school activities.
													<br />{' '}
												</span>
											</p>
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
										{/* icon title */}
										<h3>
											<div className="image" align="center">
												<div className="bgic-5" />
											</div>
											<div className="text">
												{' '}
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CERTIFICATES
												</span>
											</div>
										</h3>
										{/* end icon title */}
										<div id="bg-content">
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Certificate of completion of Programming course - CNC milling operation
													<br />- Certificate of "CNC technology machining"
													<br />- CSWA - Certificate Soldiworks Associate certificate
													<br />{' '}
												</span>
											</p>
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
										{/* icon title */}
										<h3>
											<div className="image" align="center">
												<div className="bgic-6" />
											</div>
											<div className="text">
												{' '}
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													Hobbies&nbsp;
												</span>
											</div>
										</h3>
										{/* end icon title */}
										<div id="bg-content">
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Learning and watching programs about robots.
													<br />
													Playing soccer
													<br />
													Listening to music
													<br />
													Climbing the mountain&nbsp; &nbsp;{' '}
												</span>
											</p>
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
										{/* icon title */}
										<h3>
											<div className="image" align="center">
												<div className="bgic-7" />
											</div>
											<div className="text">
												{' '}
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													References&nbsp;
												</span>
											</div>
										</h3>
										{/* end icon title */}
										<div id="bg-content">
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Nguyen Van B - Chief Engineer
													<br />
													CV365 company
													<br />
													Mobile phone: 0123456789{' '}
												</span>
											</p>
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
									<div className="head">
										<div className="text">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												EDUCATION
											</span>
										</div>
										<div className="image">
											<div className="bgic-right-1" />
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
													<i className="fa fa-minus" /> Delete{' '}
												</div>
											</div>
											<h3>
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													CV365 University
												</span>
												<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
													From….to…..
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Major: Mechanical engineering
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
									<div className="head">
										<div className="text">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												WORKING EXPERIENCE
											</span>
										</div>
										<div className="image">
											<div className="bgic-right-2" />
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
													<i className="fa fa-minus" /> Delete{' '}
												</div>
											</div>
											<h3>
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													CV365 technology joint stock company
												</span>
												<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
													From….to now
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: CNC programming staff
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Receiving drawings, reading and analyzing 2D drawings to make CNC programs.
												<br />- Issuing set up work guide sheet.
												<br />- Learning and improving to increase productivity and optimizing production costs.
												<br />- Making program of 4-axis 3-axis milling machine, lathe
												<br />- Making work progress reports by day / week to send to the chief engineer.
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
													<i className="fa fa-minus" /> Delete{' '}
												</div>
											</div>
											<h3>
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													CV 365 Technology Company&nbsp;
												</span>
												<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
													From….to….
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: Trainee
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Programming and using CNC milling machines
												<br />- Learning and designing machine details on the application
												<br />- Researching drawings and processing details
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
									<div className="head">
										<div className="text">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												ACTIVITIES
											</span>
										</div>
										<div className="image">
											<div className="bgic-right-3" />
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
													<i className="fa fa-minus" /> Delete{' '}
												</div>
											</div>
											<h3>
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Volunteer activities in the university
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Volunteer
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												+/ Participating in voluntary blood donation
												<br />
												+/ Green summer program in 2016.
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
										<div className="text">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												PROJECT PARTICIPATION
											</span>
										</div>
										<div className="image">
											<div className="bgic-right-4" />
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
													<i className="fa fa-minus" /> Delete{' '}
												</div>
											</div>
											<h3>
												<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
													Participating in school-level Scientific Research
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Theme: Design and manufacture of electric - electronic control parts for automatic robots to pick up products.
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Vai trò: Thành viên nhóm 4 người. Công việc chung tìm tài liệu, thiết kế và chế tạo phần điện điện tử điều khiển robot.{' '}
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
										<div className="text">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												Further information
											</span>
										</div>
										<div className="image">
											<div className="bgic-right-5" />
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
													<i className="fa fa-minus" /> Delete{' '}
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
					<div className="ft">
						<div className="watermark">∴ Timviec365.vn</div>
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
