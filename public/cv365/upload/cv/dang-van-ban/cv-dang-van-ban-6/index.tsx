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
										<div id="prof">
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CAREER GOALS
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											Being a dynamic person in life, I wish to experience novelties in my job. Creating ideas, bringing it into reality to build the
											product brand as well as company brand in the market for the nearer approach to potential customers and contribute to the
											increase in revenue of the company.&nbsp;
											<br />
											The objective in the next 2 years is becoming a specialist in marketing field.{' '}
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												PERSONAL SKILLS
											</div>
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
													English for communication
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
													Event organization
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												AWARDS&nbsp;
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Excellent staff of Quarter 3, 4 in 2018
											<br />- Top 10 students in “Marketing King” competition organized by the Marketing Faculty of CV365 University
											<br />- Certificate of merit: Excellent graduation project
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CERTIFICATES
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Participating in extracurricular activities
											<br />- Travelling- Watching movies, listening to music, reading books{' '}
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												Hobbies&nbsp;
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Participating in extracurricular activities
											<br />- Travelling
											<br />- Watching movies, listening to music, reading books
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
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												References&nbsp;
											</div>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											Nguyen Thi B – Deputy Marketing Director
											<br />
											CV365 Joint Stock Company
											<br />
											Mobile phone: 0123456789{' '}
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
						<div className="clr" />
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
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
										EDUCATION
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
												CV365 University
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Major: Marketing
											</span>
										</p>
										<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											Classification: Excellent&nbsp;{' '}
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
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
										WORKING EXPERIENCE
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
												CB 365 Company
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Marketing specialist
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Taking the responsibility for developing 1 aspect of products and services of the company
											<br />- Analyzing the market demand, products and marketing programs of competitors
											<br />- Coordinating with Content, Media and Design departments to produce video and images for the marketing of products and
											services of the company.
											<br />- Connecting to Ads department to monitor, analyze and adjust FB Ads, Google Ads campaigns.
											<br />- Advising, contributing ideas and strategies in terms of communications and brand development for the company in each
											period.
											<br />- Determining the budgets, optimizing the budget for Marketing expense in quarter appropriately to the company activity in
											each period.
											<br />- Reporting the task progress weekly, monthly, quarterly, annually to the Head of department and Director Board&nbsp;
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
												CV365 Joint Stock Company
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Internal communications staff
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Making plans of organizing activities, movements or events of the company.
											<br />- Creating ideas for internal programs and activities of the company to connect staff in the company
											<br />- Directly implementing, coordinating and connecting departments to carry out programs and events together.- Updating
											information, editing contents on internal communications channel and news-letters
											<br />- Optimizing the budget for programs and events of the company.
											<br />{' '}
										</div>
									</div>
									<div id="exp3" className="ctbx experience">
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
												CV365 Company
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Collaborator in event organization
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Hosting small-scale programs
											<br />- Building the scenario content of audience interaction- Performing other tasks under the assignment of the team leader{' '}
										</div>
									</div>
									<div id="exp4" className="ctbx experience">
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
												Personal project
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Marketing – Member of a four-student group
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Receiving small-scale marketing projects
											<br />- Developing marketing plans for products: Analyzing the market, trend, making plans of product promotion, etc.
											<br />- Working with customers on the plan and marketing expense.
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
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
										ACTIVITIES
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
												Volunteer Group CV365
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Volunteer (09/2013 - 08/2014)
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Participating in workshops sharing about Marketing trend: Marketing in&nbsp; the 4.0 era, Marketing yourself to the world,
											etc.
											<br />- Participating in extracurricular activities, general events of the company:
											<br />
											Role: Member of Organization Board
											<br />
											Participated events: Event for 20/10, 8/3, NOEL, ceremony of the company establishment date and summer vacation, team building,
											etc.&nbsp;
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
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
										PROJECT PARTICIPATION
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
											<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
												Project: 2hand goods – new trend
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Customers: 2hand shop
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											Work to do: Being in charge of marketing, analyzing the market, forming potential customers, segmenting the market, then giving
											the plan on tasks and expenses.
											<br />
											Results after ending the project: the 2hand shop had the product and customer orientation (apart from created logos and
											signboards), Facebook account of 2hand shop got 10,000 “likes”
											<br />{' '}
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
								<div className="head">
									<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
										Further information
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
										<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements."></div>
									</div>
								</div>
							</div>
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

export default CV
