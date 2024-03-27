const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title">
					{' '}
					CV Bảo hiểm{' '}
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="info">
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
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div id="prof">
										<div className="ic">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<p className="icoweb">
												<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
													Gender: Female
												</span>
											</p>
										</div>
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
													Date of birth: 13/05/1992
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
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
											</p>
										</div>
										<div className="ic">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
													Email: Thutrang@gmail.com
												</span>
											</p>
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
					</div>
					<div className="clr" />
					<div className="mau_nen">
						<div id="cv-main">
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
										<div id="box01" className="block cvo-block box-contact ui-sortable-handle"></div>
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
											<div className="cum">
												<h3 className="icon-ic-2 ">
													<div className="tr-2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CAREER GOALS
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												-Finding potential customers-Building healthy relationship with customers, and attracting many customers using insurance
												products the company provides.-Being promoted according to my dedication&nbsp;{' '}
											</div>
											<div className="clr" />
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
											<div className="funk">
												<h3 className="icon-ic-3">
													<div className="tra-3" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														PERSONAL SKILLS
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
														Communication skill
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
														Presentation skill
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
														Handling problems skill
													</p>
													<div className="bar-exp">
														<div style={{ width: '60%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={60} />
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
														Working under pressure skill
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
											<div className="cum">
												<h3 className="icon-ic-4 ">
													<div className="tr-4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														AWARDS{' '}
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												-First prize in office IT with score 8.2-Good student of the school{' '}
											</div>
											<div className="clr" />
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
											<div className="cum">
												<h3 className="icon-ic-5 ">
													<div className="tr-5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CERTIFICATES
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												-Office IT with B qualification-English certificate{' '}
											</div>
											<div className="clr" />
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
											<div className="cum">
												<h3 className="icon-ic-6 ">
													<div className="tr-6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														HOBBIES
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												- Likes to travel
												<br />- Join the Skills Development Clubs{' '}
											</div>
											<div className="clr" />
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
											<div className="cum">
												<h3 className="icon-ic-7 ">
													<div className="tr-7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														References{' '}
													</div>
												</h3>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
												- Tran Minh Thu- Director of CV365 Insurance company- Phone number: 0985 237 168{' '}
											</div>
											<div className="clr" />
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
									<div className="sum">
										{/*                     */}
										<div className="icon-1" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												EDUCATION
											</span>
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
													HCM College of Economics
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Major: Export-import
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Classification: Good, Average score: 7.0{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
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
									<div className="sum">
										{/*                     */}
										<div className="icon-2" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												WORKING EXPERIENCE
											</span>
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
													Vietinbank (6/2017-now)
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Sales staff
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													-Introducing insurance products of Vietinbank to customer-Finding and taking care of customers-Making records, supervising
													and supporting customers, completing records according to requirements of evaluation department.-Supporting customer in
													dealing with arising insurance benefits.-Ensuring business turnover by quarter and year-Reporting daily results for manager{' '}
												</div>
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
													Eximbank (07/2016 – 05/2017){' '}
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Sales staff
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													-Introducing insurance products of Eximbank to customer-Taking care of and consulting customers-Finding potential
													customers-Making records, supervising and supporting customers-Handling arising problems.{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
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
									<div className="sum">
										{/*                     */}
										<div className="icon-3" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												ACTIVITIES
											</span>
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
													-Participating in the Blood Donation Volunteer
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														-Participating in the Sao Khue Volunteer
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- sharing out donated food and clothing to the homeless.
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
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
									<div className="sum">
										{/*                     */}
										<div className="icon-4" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												PROJECT PARTICIPATION
											</span>
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
													Customer expansion project in CV365 Insurance Company
												</div>
											</h3>
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Sales and old customer management staff
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Result: Developing successfully potential customer segment, exceeding 20% of data&nbsp;
													<br />{' '}
												</div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
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
									<div className="sum">
										{/*                     */}
										<div className="icon-5" />
										<div className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												Further information
											</span>
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
											<div className="w-exp">
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Add other information (if needed):
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements."></div>
											</div>
											<div className="clr" />
										</div>{' '}
										<div className="clr" />
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="clr" />
					</div>
					<div id="footer">
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

export default CV
