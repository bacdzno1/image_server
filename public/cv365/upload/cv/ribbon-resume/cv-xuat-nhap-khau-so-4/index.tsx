export default function CV({ html }: { html: any }) {
	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title" />
				<div id="form-cv" style={{ position: 'relative' }}>
					<div id="cv-top">
						<div className="box-01">
							<div id="cvo-profile-avatar-wraper">
								<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
							</div>
							<div className="clr" />
						</div>
						<div className="box-left">
							<div id="box-hvt">
								<h1>
									<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
								</h1>
								<h2>
									<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
								</h2>
								<p className="id">
									<span id="cv-profile-about" />
								</p>
							</div>
						</div>
					</div>
					<div className="cv_tt">
						<div id="cv-main">
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="h3">
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													BACKGROUND INFORMATION
												</span>
											</p>
											<p className="icoweb cvi-date">
												<i className="fa"></i>{' '}
												<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
													19/05/1992
												</span>
											</p>
											<p className="icoweb cvi-user">
												<i className="fa"></i>{' '}
												<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
													female
												</span>
											</p>
											<p className="icoweb cvi-phone">
												<i className="fa"></i> <span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
											</p>
											<p className="icoweb cvi-envelope-square">
												<i className="fa"></i>{' '}
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													blackzero1995@gmail.com
												</span>
											</p>
											<p className="icoweb cvi-map-marker">
												<i className="fa"></i> <span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
											</p>
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
											<p className="icf">
												<i className="fa"></i>
											</p>
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CAREER GOALS
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													For me, the career objective is constantly learning experience in the actual working process, learning more about Import and
													Export knowledge about customs procedures, taxes, and quality control ... to get ahead in work.
													<br />
													Using your own experience and knowledge to become a professional export and import documentation staff and bring value to
													the Company. Helping the goods circulation process of the Company takes place quickly, accurately and effectively.
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
											<p className="icf">
												<i className="fa"></i>
											</p>
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
														Mastering knowledge and process of import and export of goods.
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
														Skill to communicate negotiates with customers, work with customs authorities.
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
											<p className="icf">
												<i className="fa"></i>
											</p>
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													AWARDS&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Staff with excellent achievements in emulation work in 2018
													<br />- Certificate of merit for excellent student in the third year of Timviec365.vn University
													<br />- Certificate of merit of the university delegation
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
											<p className="icf">
												<i className="fa"></i>
											</p>
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													CERTIFICATES
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Certificate of completion of actual import-export course of Timviec365.vn center
													<br />
													-&nbsp; Toeic 750
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
											<p className="icf">
												<i className="fa"></i>
											</p>
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													Hobbies&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Traveling
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
											<p className="icf">
												<i className="fa"></i>
											</p>
											<h3>
												<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
													References&nbsp;
												</span>
											</h3>
											<p>
												<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Nguyen Van Dat - Deputy Financial Manager
													<br />
													Timviec365.vn Import and Export Company
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
										<p className="icf">
											<i className="fa"></i>
										</p>
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
												<p className="icfs">1</p>
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Timviec365.vn University
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Major: Foreign Trade Economics
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
										<p className="icf">
											<i className="fa"></i>
										</p>
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
												<p className="icfs">1</p>
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Timviec365.vn Cosmetics Company
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Export and import documentation staff
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													-&nbsp;&nbsp;Preparing documents for importing products.
													<div>- Checking documents of contract, invoice, PK, Bill, Certificate of origin</div>
													<div>- Preparing registration documents for promulgation of new products (Cosmetics, Functional foods, ...)</div>
													<div>- Saving scanned documents and saving paper records.</div>
													<div>- Communicating and supporting customers to arrange the work suitably</div>
													<div>
														- Performing other tasks when requested
														<br />
													</div>
													<div>- Reporting the results of work, work progress by week, according to the batch of products.</div>{' '}
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
												<p className="icfs">2</p>
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Timviec365.vn Trading and Shipping Company
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Export and import documentation intern
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Receiving documents, checking documents, comparing data information.
													<br />
													<div>
														- Writing a transaction email with the staff in charge of making the application, declaring the declaration and monitoring
														the shipment information for the customer.
														<br />
													</div>
													<div>
														- Delivering and receiving documents (Bill of Lading, Delivery Order, ...)
														<br />
													</div>{' '}
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
										<p className="icf">
											<i className="fa"></i>
										</p>
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
												<p className="icfs">1</p>
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Association of import and export lovers club in Hanoi
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Member
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Participating in seminars organized by club, participating in social networking forums to share experiences, supporting
													difficulties in the process of working in the field of Import and Export
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
										<p className="icf">
											<i className="fa"></i>
										</p>
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
												<p className="icfs">1</p>
												<h3>
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="Company name">
														Cosmetics 365 organic - exclusive products in Vietnam of Timviec365.vn Cosmetics Company
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Role: Import documentation staff: Preparing import documents, working with customs authorities.
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Result: In 2018, Organic 365 Cosmetics - exclusive products have been distributed in 10 cosmetics stores of Timviec365.vn
													Cosmetic Company on Vietnam market.{' '}
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
										<p className="icf">
											<i className="fa"></i>
										</p>
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
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Add other information (if needed):{' '}
												</div>
											</div>
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
