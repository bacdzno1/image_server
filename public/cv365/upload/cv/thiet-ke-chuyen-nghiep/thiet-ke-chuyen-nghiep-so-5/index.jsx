import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }) {
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
					<div id="cv-main">
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="http://43.239.223.249:3009/imagesno_avatar.jpg" />
										</div>
									</div>
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												BACKGROUND INFORMATION
											</div>
										</h3>
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CAREER GOALS
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											With the background of information technology, knowledge about SEO, online marketing and the marketing team of the company will
											bring the company's service website to the top of the keywords, bringing the company brand more widely to potential customers
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
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
													Advanced skill
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												AWARDS&nbsp;
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Staff achieved good results in the process of working in the second quarter of 2018
											<br />- Certificate of merit of the ward during the 2016 summation meeting for outstanding achievements in union activities.
											<br />{' '}
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												CERTIFICATES
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Certificate of recognition of completing SEO course of Vietmoz, GTV SEO, SEO SEVA ....
											<br />- Certificate of recognition of completing the course: "English for employees"
											<br />- Toeic 450
											<br />{' '}
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="Title" className="box-title">
												Hobbies&nbsp;
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="Content" contentEditable="true">
											- Free time: Learning and sharing knowledge about SEO knowledge on forums
											<br />- Playing soccer
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
											<div className="wfa">
												<i className="fa"></i>
											</div>
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
									<div className="wfa">
										<i className="fa"></i>
									</div>
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
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Major: Information technology
											</span>
										</p>
										<div className="exp-content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											Classification: Good{' '}
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
									<div className="wfa">
										<i className="fa"></i>
									</div>
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
												CV365 Joint Stock Company
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: SEO Specialist
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Analyzing and planning to deploy keyword sets.
											<br />- Building internal link model, backlinks for the system.
											<br />- Calculating, planning to deploy the number of appropriate links.
											<br />- Optimizing onpage, offpage, structure, functions for the website.
											<br />- Planning and implementing branding for brands
											<br />- Measuring and evaluating of effective SEO
											<br />
											Achievements in the working process: Some keywords are as difficult as CV, CV for job (TOP 10)
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
												CV 365 Real Estate Company
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Position: SEO collaborator
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Building and developing satellite sites such as Blog, Web 2.0
											<br />- Being known support tools for SEO and working with tools.
											<br />- Writing articles, linking links as planned.
											<br />- Teamwork, completing the task well.{' '}
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
									<div className="wfa">
										<i className="fa"></i>
									</div>
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
												Participating in union activities in the ward
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Volunteer
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											- Active members of forums, social networks Group sharing experiences on SEO such as: Knowledge SEO, Vietmoz, Seomxh ...
											<br />- Participating in union activities in the ward: Organizing mid-autumn festival for children, donating charity in ward
											campaigns ...
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
									<div className="wfa">
										<i className="fa"></i>
									</div>
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
												CV365 Joint Stock Company
											</div>
										</h3>
										<div className="clr" />
										<p className="h3">
											<span className="exp-subtitle" cvo-placeholder="Job position" contentEditable="true">
												Member of SEO team
											</span>
										</p>
										<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="Job description and task achievements.">
											+ / CV365 Project
											<br />+ / Timviec365.vn Project{' '}
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
									<div className="wfa">
										<i className="fa"></i>
									</div>
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
										<div className="clr" />
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
