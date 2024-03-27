const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					CV ngân hàng chứng khoán
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
									</div>
									<div className="box-dm" />
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
										</h1>
										<h2>
											申请职位：
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
												</div>
												{/* <div class="ifoic"></div> */}
												<div className="tt-box1">
													<div className="cumicc1" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														个人简历
													</div>
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf">出生日期:</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
																1991/11/08
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
																Tuanvu91@gmail.com
															</span>
														</div>
													</div>
													<div className="clr" />
												</div>
												<div className="clr" />
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
													对财政领域具有过度爱好，并希望自己能在财政-银行-投资专业领域工作，以尽力发挥自己原有的能力并为公司发展服务短期时间内，努力累计经验以及学习新技能，同时改善并提高原有的技能以成为优秀员工。努力在三年后成为财政-银行-投资等自己追求领域的一个专家{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '16.85px' }}>
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
											<div className="icright" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												学习水平
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '11.2333px' }}>
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
														河内外贸大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														专业：财政-银行
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													凭证等级：经济本科（正规）毕业成绩：好{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '16.85px' }}>
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
											<div className="icright" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												工作经验
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '11.2333px' }}>
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
														CV365报销股份公司时间：2018/03 - 2018/ 07
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														职务：中介员
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													寻找客户并执行证券投资领域方法之沟通、咨询等工作指导客户开账号并使用公司的软件根据品种类型编写定期报告并送至客户选择合理的投资名目、分析市场情况线上或打电话为客户服务登载股票分析、分析市场趋向之内容{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '11.2333px' }}>
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
														CV365服务投资商业公司时间：2017/11 - 2018/01
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														职务：分析实习生
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													了解公司各个部门的基本业务了解公司产品执行分析财务报告，比较公司与竞争对手之间的各种活动了解、施行技术分析方法{' '}
												</div>
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
															成熟使用外语能力
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
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															办公电脑能力
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
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															有效的团体工作
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
																<i className="fa fa-plus" /> 加
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															演说、谈判能力好
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
													<div className="cumicc4" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
														奖励
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													证券及证券市场有关主法律证书证券投资咨询及中介证书证券投资及分析证书{' '}
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
													2012年国家用计算机解决数学竞赛的第三奖外贸大学之优秀员工{' '}
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
													看经济和证券书运动活动旅游{' '}
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
													陈明英、女士CV365银行销售部副课长0987 453 8775{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '571.4px' }}>
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
											<div className="icright" />
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
														SOS儿童村协助队之志愿学生
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														给露宿者分发粥
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													参加学校的人道献血队
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
											<div className="icright" />
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
														参加CV365银行人力发展预案
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														角色：提出培训人力方案的人
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													结果：筛选出来有质量、具有技艺的员工队伍参加公司的基本编制。跟人事部门指导、培训具有不高之技艺和专业技能的员工
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
											<div className="icright" />
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

export default CV
