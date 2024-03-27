
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
				<div id="form-cv" style={{ position: 'relative' }}>
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="cvo-profile-avatar-wraper">
									<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
								</div>
								<div className="uv">
									<div id="box-hvt">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
										</h1>
										<p>
											<span id="cv-profile-about" />
										</p>
									</div>
									<div id="box01" className="block cvo-block box-contact">
										<p className="icoweb cvi-date">
											<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
												19/05/1992
											</span>
										</p>
										<p className="icoweb cvi-user">
											<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
												female
											</span>
										</p>
										<p className="icoweb cvi-phone">
											<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
										</p>
										<p className="icoweb cvi-envelope-square">
											<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
												blackzero1995@gmail.com
											</span>
										</p>
										<p className="icoweb cvi-map-marker">
											<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
										</p>
										<p className="icoweb cvi-info">
											<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true">
												facebook.com/abc
											</span>
										</p>
									</div>
								</div>
								<div className="jobname">
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CAREER GOALS
											</span>
										</h3>
										<p id="ct2">
											<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												Short-term objectives: Finding out a new working environment appropriate to the achieved accounting knowledge and experience.
												I wish to contribute to the development of the company in the future.
												<br />
												Long-term objectives: Becoming an auditor
												<br />{' '}
											</span>
										</p>
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
										<p id="ct2">
											<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												- The third prize for the research title in the university scientific research competition for students <br />- Certificate of
												merits of the University Union, Hanoi Union&nbsp; due to outstanding achievements during the participation in activities of
												the University Union.
												<br />{' '}
											</span>
										</p>
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
										<p id="ct2">
											<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												- Certificate of General Accounting
												<br />- Certificate of Basic Information Technology Application
												<br />- Certificate of English Proficiency for Level B1
												<br />{' '}
											</span>
										</p>
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
										<p id="ct2">
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
										<p id="ct2">
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
													Major: Accounting&nbsp;
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
													CV365 Joint Stock Company (11/2015 - Present)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: General Accountant
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Summarizing revenue and the entire production and business activities of the Company.
												<br />- Making the financial statement, administrative statement, tax statement in accordance with regulations of the law and
												demands of the Company.
												<br />- Taking responsibility for the implementation of tax-related tasks: explaining data, working with tax agencies, etc.
												<br />- Controlling receipts – payments and expenses
												<br />- Supporting the Director to implement transactions (arising issues) with the bank.
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
													CV365 Company Limited (06/2014 - 10/2015)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Position: Accountant
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Accounting the salary and insurance of employees in the Company
												<br />- Monitoring, checking and summarizing accounting documents
												<br />- Managing receipts – payments, daily summarizing and reporting the cash fund to the Director Board
												<br />- Supporting to settle other arising issues during the working period under the guidance of the chief accountant
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
													Volunteer Group CV365
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Volunteer (09/2013 - 08/2014)
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												- Participating in the Club for Blood Donation during the continuous 4 years in University <br />- Chung cake for Tet in my
												village 2018 (Banh trung ngay tet que em 2018)
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
													Sunny Way (2014 - 2015)
												</span>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
													Participating in the scientific research competition held by the university
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
												Title: Expense administrative accounting in Hung Ha Payment Joint Stock Company
												<br />- Project” Tet in my village 2018” (Ngay tet que em 2018) – Location: Son Tay, Hanoi
												<br />
												Role: Managing receipts – payments of the project, contacting and working with benefactors.&nbsp;{' '}
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
