const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title" />
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
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
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
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
												BACKGROUND INFORMATION
											</span>
										</h3>
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
													Nam
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
													blackzero1995@gmail.com
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
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
													facebook.com/abc
												</span>
											</p>
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
											- Looking for a professional working environment with good salary and promotion opportunities
											<br />- Looking forward to having the opportunity to devote myself, achieving the goal of becoming business director in the next
											5 years.{' '}
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
													Management skills
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
													English{' '}
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
											Employees with the best performance of the year CV365&nbsp; 2014{' '}
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
											Certificate of Academy for Ads&nbsp; 2013&nbsp;
											<br />- School: Google Academy&nbsp;
											<br />- Rank: ProficientEnglish certificate (TOEIC, TOEFL, IELTS){' '}
										</div>
									</div>
									<div id="box06" className="block cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
										<div className="box-content" cvo-placeholder="Content" contentEditable="true">
											- Sports: Football, Volleyball.
											<br />- Traveling
											<br />- Swimming
											<br />- Collective activity{' '}
										</div>
									</div>
									<div id="box07" className="block cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
										<div className="box-content" cvo-placeholder="Content" contentEditable="true">
											- Sales Manager
											<br />- First and last name: ……
											<br />- Phone number:...............{' '}
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
													CV365 University&nbsp;10/2010 - 05/2014
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													- Major: Business Administration&nbsp;
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												-&nbsp;Graduation as good level, average grade 7.5&nbsp;{' '}
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
													CV365 Company Limited&nbsp; (11/2015 - Present)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Online Marketing Specialist&nbsp;
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Plan, direct and optimize online marketing channels (Facebook, Google, Glass, Adnetwork ...) to attract potential customers
												for the company’s products.
												<br />- Write content, get visual ideas, run ads to implement for marketing channels.
												<br />- Support to run Facebook Ads for the purpose of recruiting, communication events ... of the company.
												<br />- Research / trade / negotiate with advertising media partners to increase the number of potential customers.
												<br />- Evaluate and study the online media channels of the opponents to work out more effective and creative solutions.
												<br />- Make weekly, monthly reports.{' '}
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
													CV365 Joint Stock Company (06/2014 - 10/2015)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Marketing staff&nbsp;
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Make marketing plans to attract customers through Facebook and Email.
												<br />- Edit content, drag traffic, take care of Facebook fanpage
												<br />- Coordinate the members in the department to organize the minigame, online events supporting sales.
												<br />- Support other departments about the media (if required).{' '}
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
													Volunteer Group CV365
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Volunteer (09/2013 - 08/2014)
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Participate in blood donation programs
												<br />- Gather gifts and distribute them to flood victims, disadvantaged people and homeless people. <br />
												<br />{' '}
											</div>
										</div>
									</div>
								</div>
								<div id="block04" className="cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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
												<span className="exp-title" contentEditable="true" cvo-placeholder="Company name">
													Sunny Way (2014 - 2015)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Client : CV365
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Marketing for mobile applications helps people find jobs quickly, anytime and anywhere.
												<br />
												Number of members : 8<br />
												Position&nbsp; : Manager
												<br />
												Role in the project
												<br />- Planning
												<br />
												-&nbsp; Directly operate
												<br />- Optimize advertising channelsTechnologies used : Facebook, Google, Coc Coc, Adnetwork{' '}
											</div>
										</div>
									</div>
								</div>
								<div id="block05" className="cvo-block ui-sortable-handle" style={{ display: 'none' }}>
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

export default CV
