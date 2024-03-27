
interface Props {
	html: any
	in4CV: any
	in4user: any
	dataCvMau: any
	lang: any
	setHtml: any
	setshowmodal: any
	showmodal: any
	setshowZoomCV: any
	editImg: any
	setEditImg: any
}

const CV: React.FC<Props> = ({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }) => {
	const [htmlData, setHtmlData] = useState(html)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		handleSetData(html)
	}, [html])

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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CAREER GOALS
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											With the skills and experiences drawn during the working process, the exposure of many different career fields and a constant
											learning attitude, I have been trying to become a professional Content - Marketing Leader
											<br />
											The goal in my work is to contribute to bringing the company's products more widely to customers, helping the company brand
											increase in the market.
											<br />{' '}
										</span>
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
													Writing a standard SEO article
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
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Staff achieved good performance during the first quarter of 2018
											<br />- Scholarship for 4 consecutive years in the process of studying at CV365 University
											<br />- Certificate of merit of the ward during the 2016 summation meeting for outstanding achievements in union activities.
											<br />- Certificate of collaborator participating in the International Book Festival in 2016, 2017.{' '}
										</span>
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
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Certificate of completion of "Basic Marketing" course at 365 Marketing CV
											<br />- Certificate of recognition of completion of the course: "English for communication for employees"
											<br />- Toeic 550{' '}
										</span>
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
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Sharing knowledge about fashion, beauty on personal Facebook
											<br />- Reading books: Books about life, marketing, living skills ...
											<br />- Traveling{' '}
										</span>
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
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											Nguyen Van B – Head of Marketing Division
											<br />
											CV365 Company
											<br />
											Telephone: 0123456789{' '}
										</span>
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
												Major: E-commerce
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
												CV365 Company
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Content-marketing staff
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- In charge of editorial content writing SEO standard articles about products and services of the company
											<br />- Writing articles to share knowledge about the field of recruitment, application for jobs according to the plan of the
											SEO department.
											<br />- Writing PR articles for company's brand
											<br />- In charge of content Fanpage, social networking group to increase interaction with customers.
											<br />- Editing content, images, videos to post on the website,
											<br />- Coordinating marketing department to plan PR products and services of the company.
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
												CV365 Cosmetics Company
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: Content-Marketing Staff
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											-&nbsp;Writing articles to share knowledge about beauty.
											<br />- Writing PR for products of the company.
											<br />- Acting as an interactive customer admin on the company's Fanpage.{' '}
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
												Communication board carries out the activities of the school
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Volunteer
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											A member of the youth vanguard team at CV365 University
											<br />
											Collaborator in the International Book Festival in 2016, 2017
											<br />
											Collaborator supports the organizing committee to work with bookstores: Stall location, organization stability during the event
											and other work required by the organizers.
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
												Project: Green lecture-hall
											</div>
										</h3>
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Marketing Team: Planning (Content of articles on social networking sites of schools, scenarios of events taking place)
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											+/ The project was implemented by CV365 University delegation with the desire of students and staff of the university lecturers
											to study and work in green space.
											<br />
											+/ Result: Students and staff of CV365 university have made positive changes in thinking and actions to have a green, clean and
											beautiful learning and working space.
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
