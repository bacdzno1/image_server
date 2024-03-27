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
								<div id="box01" className="block cvo-block box-contact">
									<div id="prof">
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
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
													female
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
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
											</p>
										</div>
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
													facebook.com/abc
												</span>
											</p>
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
							<div id="cvo-profile-avatar-wraper">
								<div className="wimg">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
								</div>
							</div>
							<div className="clr" />
						</div>
					</div>
					<div className="clr" />
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle"></div>
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CAREER GOALS
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											With the experience and practical skills of Digital Marketing (Facebook ads, SEO, Youtube, Google ads ...) along with continuous
											learning of new knowledge, I believe that they will help the company build brand in the market in a strong and professional way,
											thereby help the company increase the number of customers and expand the customer as wekk as increase revenue and profit.
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													PERSONAL SKILLS
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="clr" />
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
													Content Marketing
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
										<div className="clr" />
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													AWARDS&nbsp;
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- The group with the best performance in the first marketing campaign of 2018.
											<br />- Scholarship for 4 consecutive years of study at CV365 university.
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CERTIFICATES
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Certificate of recognition of completing the SEO course of Vietmoz, GTV SEO, SEO SEVA ...
											<br />- Certificate of recognition of completing Online Marketing course
											<br />- Toeic 550{' '}
										</div>
										<div className="clr" />
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													Hobbies&nbsp;
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Writing: Blog posts sharing personal experiences …<br />- Participating in extracurricular activities.
											<br />- Traveling
											<br />{' '}
										</div>
										<div className="clr" />
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
										<div className="z-exp">
											<h3>
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													References&nbsp;
												</div>
												<div className="wfa">
													<i className="fa"></i>
												</div>
											</h3>
										</div>
										<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											Nguyen Thi B – Deputy Director of Marketing
											<br />
											CV365 Company
											<br />
											Mobile phone: 0123456789{' '}
										</div>
										<div className="clr" />
									</div>
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
								<div className="z-exp">
									<div className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											EDUCATION
										</span>
									</div>
									<div className="wfa">
										<i className="fa"></i>{' '}
									</div>
								</div>
								<div id="experience-table" className="w-exp">
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
												CV365 Company
											</div>
											<div className="exp-date" contentEditable="true" cvo-placeholder="Working time">
												4/2017 - 1/2019
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Content-Marketing Staff
											</span>
										</p>
										<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											Classification: Excellent&nbsp;{' '}
										</div>
										<div className="clr" />
									</div>
								</div>
								<div className="clr" />
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
								<div className="z-exp">
									<div className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											WORKING EXPERIENCE
										</span>
									</div>
									<div className="wfa">
										<i className="fa"></i>{' '}
									</div>
								</div>
								<div id="experience-table" className="w-exp">
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
												CV 365 Real Estate Company
											</div>
											<div className="exp-date" contentEditable="true" cvo-placeholder="Working time">
												4/2017 - 1/2019
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Digital Marketing
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Deploying specific tasks in advertising Google adwords, Facebook ads, Zalo, Email marketing, youtube according to each
											advertising campaign of the company under the assignment of the Head of Division
											<br />
											-&nbsp;Content management and SEO Onpage optimization, Offpage SEO, company's website: go to baclink, onpage optimization:
											Title, tag des, image, internal by model ... Dragging traffic, creating signal .... Standard seo according to the director's
											plan.
											<br />
											-&nbsp;Writing a seeding post, creating accounts and joining a group to share articles ...
											<br />
											Managing the company's youtube channel content: Getting ideas and writing video scripts.
											<br />
											Supporting communication plans, deploying Point Of Sales Material organized by Marketing Department
											<br />
											Tracking advertising templates for optimal budget, effective communications, and Key Performance Indicator according to
											allocated budget&nbsp;
											<br />- Coordinating with IT department to optimize user interface as well as customer behavior
											<br />- Summarizing and reporting periodic completed work monthly after each campaign.
											<br />{' '}
										</div>
										<div className="clr" />
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
												CV365 Company
											</div>
											<div className="exp-date" contentEditable="true" cvo-placeholder="Working time">
												4/2017 - 1/2019
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Content-Marketing Staff
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Editing content writing SEO standard articles about the company's services.
											<br />- Writing articles to share knowledge about the field of recruitment, application for jobs according to the plan of the
											SEO department.
											<br />- Managing Fanpage and Group content on the company's social networking sites.
											<br />{' '}
										</div>
										<div className="clr" />
									</div>
								</div>
								<div className="clr" />
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
								<div className="z-exp">
									<div className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											ACTIVITIES
										</span>
									</div>
									<div className="wfa">
										<i className="fa"></i>{' '}
									</div>
								</div>
								<div id="experience-table" className="w-exp">
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
											<div className="exp-date" contentEditable="true" cvo-placeholder="Working time">
												4/2017 - 1/2019
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Volunteer (09/2013 - 08/2014)
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Active members of forums, social network Group sharing experiences on Digital Marketing such as: iSocial community, SEOMXH
											Forum,…
											<br />- Participating in seminars to share marketing trends.
											<br />
											Volunteer: Participating in volunteer activities of the Labor Union office of the company.
											<br />{' '}
										</div>
										<div className="clr" />
									</div>
								</div>
								<div className="clr" />
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
								<div className="z-exp">
									<div className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											PROJECT PARTICIPATION
										</span>
									</div>
									<div className="wfa">
										<i className="fa"></i>{' '}
									</div>
								</div>
								<div id="experience-table" className="w-exp">
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
												Project: Your home, Green living space - 365 Building
											</div>
											<div className="exp-date" contentEditable="true" cvo-placeholder="Working time">
												4/2017 - 1/2019
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Role: Digital marketing staff
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											Results: The project is implemented on Facebook ads, SEO, Email Marketing, Youtube to reach customers. Results:
											<br />
											+/ Highest traffic reaches about 10,000 organic traffic / month, 30 keywords top 1-5 and more than 200 keywords - top 10&nbsp;
											<br />
											+/ YouTube channel reaches 5000 subscribers, on average more than 70,000 views / 1 video, the highest view video reaches nearly
											100,000 views.
											<br />{' '}
										</div>
										<div className="clr" />
									</div>
								</div>
								<div className="clr" />
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
								<div className="z-exp">
									<div className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
											Further information
										</span>
									</div>
									<div className="wfa">
										<i className="fa"></i>{' '}
									</div>
								</div>
								<div id="experience-table" className="w-exp">
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
										<div className="clr" />
									</div>
								</div>
								<div className="clr" />
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
