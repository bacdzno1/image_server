import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CV Title">
					CV y tế dược
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div className="chu">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="Full name" contentEditable="true" />
										</h1>
										<div className="clr" />
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="Job position" />
										</h2>
									</div>
									<div className="anh">
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
											<div className="fake_img" />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											{' '}
											<div id="prof">
												<div className="ic2">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="Gender " contentEditable="true">
															female
														</span>
													</div>
												</div>
												<div className="ic1">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="Birthday" contentEditable="true">
															19/05/1992
														</span>
													</div>
												</div>
												<div className="ic3">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="Telephone number" contentEditable="true" />
													</div>
												</div>
												<div className="ic4">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Email" contentEditable="true">
															minhthanh@gmail.com
														</span>
													</div>
												</div>
												<div className="ic5">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="Address" contentEditable="true" />
													</div>
												</div>
												<div className="clr" />
											</div>
											{/* add div */}
										</div>
										<div className="clr" />
									</div>
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}>
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
												</div>
												{/* <div class="ifoic"></div> */}
												{/* <div class="tt-box1">
                                                        <div class="cumicc1"></div>
                                                        <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="Title" class="box-title">BACKGROUND INFORMATION</div></div> */}
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
												<div className="cum">
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CAREER GOALS
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Pursuing my favorite work
													<br />- Becoming an exemplary medical officer, can save many patients and devote myself to the hospital.
													<br />- Improving professional qualifications, striving to become management personnel in the health sector.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
										</div>
										<div className="head">
											<div className="icright1" />
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
														Hai Phong University of Medical Technology and Pharmacy
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
														2019 - 2020
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Major: General Nursing
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Classification: Distinction, GPA: 8.4{' '}
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
										</div>
										<div className="head">
											<div className="icright2" />
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
														CV365 private clinic
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
														2019 - 2020
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Nurse
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Receiving patients, making records for patients to examine
													<br />- Taking blood for testing, measuring vital signs
													<br />- Supporting doctors to do ultrasound, test, electrocardiography, ...
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '16.9667px' }}>
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
												<div className="ski">
													<div className="skic" />
													<div className="cumicc3" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														PERSONAL SKILLS
													</div>
												</div>
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
															Skill to plan patient care in accordance with professional procedures
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
															First aid skills&nbsp;
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
															Communication skill, dealing with patients and patients' families, with colleagues correctly and morally
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
															Skill to provide advice - educate health for the community, especially patients
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
															Standing high pressure in the medical sector
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.9667px' }}>
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														AWARDS&nbsp;
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Content"
													contentEditable="true"
													style={{ marginTop: '16.9667px' }}
												>
													- Excellent student of Hai Phong University of Medical Technology and Pharmacy
													<br />- Receiving&nbsp; scholarship from Hai Phong University of Medical Technology and Pharmacy
													<br />- Health staff having active charitable activities
													<br />{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.9667px' }}>
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
													<div className="cumicc5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														CERTIFICATES
													</div>
												</div>
												<div
													className="box-content err_cv_content"
													cvo-placeholder="Content"
													contentEditable="true"
													style={{ marginTop: '16.9667px' }}
												>
													- Basic nursing certificate
													<br />- Certificate of medical examination and treatment practice
													<br />- Basic English certificate
													<br />- Office computing certificate
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.7333px' }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: '17.7333px' }}>
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
														CV365 Hospital
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
														2019 - 2020
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Position: Intern
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Supporting to manage sick rooms according to the schedule of assignment
													<br />+ Taking care of patients who come for examination
													<br />+ Managing sick rooms, medical records, medicine cabinets, machinery, facilities and medical instruments
													<br />- Being on the duty in the clinic according to the assignment
													<br />+ Handling and solving emergency cases quickly and promptly
													<br />+ Receiving works and completing assigned works during the day
													<br />+ Closely monitoring level 1 and level 2 patients and understanding the health status, medical records of the patients
													in the practicing department
													<br />+ Managing medicine and medical equipment
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.7333px' }}>
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
										</div>
										<div className="head">
											<div className="icright3" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												ACTIVITIES
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '17.7333px' }}>
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
														Regularly participating in volunteer activities when studying at the University such as: Green summer, highland warm
														clothes, blood donation, ...
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
														2019 - 2020
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Volunteer (09/2013 - 08/2014)
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													- Volunteer at the medical facility for free treatment for the poor CV365.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.7333px' }}>
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
										</div>
										<div className="head">
											<div className="icright4" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												PROJECT PARTICIPATION
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '17.7333px' }}>
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
														Project: Dangerous overcoming with medical love
													</div>
													<span className="exp-date" contentEditable="true" cvo-placeholder="Working time">
														2019 - 2020
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
														Participants: CV365 Medicine - Pharmacy Joint Stock Company
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
													Role: Calling health staff to participate in the volunteer program
													<br />
													Purpose: to help poor and disadvantaged people to participate in medical examination and treatment, health protection to
													have a healthy life. Many localities in the highlands have received timely tonic and medicine.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={3}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
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
													<div className="cumicc6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														Hobbies&nbsp;
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													- Reading and studying Medical books
													<br />- Traveling
													<br />- Singing
													<br />{' '}
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
												<div className="cum">
													<div className="cumicc7" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
														References&nbsp;
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
													Ms. Dang Anh Thu
													<br />
													Head of CV365 Hospital Department
													<br />
													Phone numbers: 0398 475 215
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '613.4px' }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
										</div>
										<div className="head">
											<div className="icright5" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="Heading" contentEditable="true">
												Further information
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
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
							<div className="clr" />
						</div>
						<div className="footer">
							<div className="watermark">© Timviec365.vn</div>
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
