
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
export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }: Props) {
	const [htmlData, setHtmlData] = useState(html)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					通信专员
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
										<div className="box-dm" />
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="想应聘的岗位" />
										</h2>
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
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
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
												</div>{' '}
												<div className="cum">
													<div className="cumicc2" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														事业目标
													</div>
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf">出生日期:</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
																1995/8/01
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf">性别:</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
																南
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf">地址:</div>
														<div className="icoweb">
															<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
														</div>
													</div>
													<div className="ic">
														<div className="icf">电话号码:</div>
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="电话号码" contentEditable="true" />
														</div>
													</div>
													<div className="ic">
														<div className="icf">电子邮件:</div>
														<div className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
																yenhoang@gmaIl.com
															</span>
														</div>
													</div>
													<div className="clr" />
												</div>
												{/* <div class="ifoic"></div> */}
												{/*  <div class="tt-box1">
                                                      <div class="cumicc1"></div>
                                                      <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="标题" class="box-title">个人简历</div></div> */}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														事业目标
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													短期目标：希望有磨炼通信技能的工作环境、成熟 marketing
													online业务、突出完成被安排的任务长期目标：能长期在公司上班，在工作过程中提高自学精神、团体工作并协助同事，提高能力以3年内成为一个marketing
													- 通信课长{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div id="box01" className="block cvo-block box-contact">
									{/* add div */}
								</div>
								<div className="clr" />
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '31.35px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												学习水平
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '20.9px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														商业大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														专业：商标Marketing 2013/8 - 2017/6
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													毕业成绩：优秀平均分数：8.0{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '31.35px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												工作经验
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '20.9px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														兴河支付股份公司时间：2018/1至今
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														职务：SEO web 员工
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													执行Seo Onpage, Offpage、最优content、给content定向写法，目的是把搜尋词和website站在前面{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '20.9px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														CV365通信公司时间：2016/9 - 2017/12
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														职务：Content Marketing员工
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													根据SEO-er的定向填写 content&nbsp;在公司website 登载在社会网站上分享稿件{' '}
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
												<div className="ski">
													<div className="skic" />
													<div className="cumicc3" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														技能
													</div>
												</div>
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															写作技能
														</p>
														<div className="bar-exp">
															<div style={{ width: '50%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={50} />
														</div>
														<div className="fake" />
													</div>
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															交际技能
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="fake" />
													</div>
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															marketing online技能
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="fake" />
													</div>
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															GG ads
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="fake" />
													</div>
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															FB ads
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="fake" />
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														奖励
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													“第六次之黄金首领”比赛之第二奖“商业大学2015年花魁”名号“2016年优秀工团干部”奖状{' '}
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
												<div className="cum">
													<div className="cumicc5" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														{' '}
														证书
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													应用电脑B1级英文{' '}
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
												<div className="cum">
													<div className="cumicc6" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														爱好
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													看书写作跟旅游与查获有关的内容旅游、听音乐、运动{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														确认者
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													阮进达、先生兴河支付股份公司Marketing课长SĐT电话号码: 036 121 3434{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '451.4px' }}>
								<div className="clr" />
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												活动
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														参加“冬天寒衣”活动：给活动设计草案，唤起学校之学生捐助寒衣，把收集到的衣服送至边远地方之穷人、孩子
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														给露宿者分发粥
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													参加“善愿粥锅”活动：于志愿员的角色，准备原料、工具，直接煮粥并发给饿人、穷人、孤儿、孤独老人...
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												参与项目
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														预案：“给未有经验的人的SEO预案展开绝招”
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														角色：在兴河支付股份公司的Seo员
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													结果：采用各经验并经常把web登上Google的Top 1&nbsp;
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												其他信息
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 删除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														补充其他信息（若需要）
													</div>
												</h3>
												<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获"></div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer"></div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="watermark">∴ Timviec365.vn</div>
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
