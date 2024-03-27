export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					勘测员工
				</div>
				<div id="form-cv">
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
								<div className="clr" />
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle">
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												个人简历
											</span>
										</h3>
										<p className="icoweb cvi-date">
											<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
												1994/8/22
											</span>
										</p>
										<p className="icoweb cvi-user">
											<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
												南
											</span>
										</p>
										<p className="icoweb cvi-phone">
											<span id="cv-profile-phone" cvo-placeholder="电话号码" contentEditable="true" />
										</p>
										<p className="icoweb cvi-envelope-square">
											<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
												nhutrang228@gmaIl.com
											</span>
										</p>
										<p className="icoweb cvi-map-marker">
											<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
										</p>
										<p className="icoweb cvi-info">
											<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true" />
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												事业目标
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											短期目标：采用专业知识和技能以突出完成一个勘测员的任务长期目标：在勘测员岗位上工作的时间内，为了具有更高的工作岗位并能为公司出更多的力就不停学习、补充知识、磨炼业务{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												技能
											</span>
										</h3>
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
													借助监督工程
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
													协助安装并提出图纸
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
													交际英语
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
													看懂并收集数据
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
													分析与统计
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												奖励
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											由中央学生会签发的“正月星”奖励2014年和2015年“学校五好学生”奖励{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												{' '}
												证书
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											应用电脑TOEIC 600{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												爱好
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											看书研究最新之勘测工艺{' '}
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												确认者
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											胡天安CV365建筑股份公司经理SĐT电话号码: 036 789 9789{' '}
										</div>
									</div>{' '}
								</div>
							</div>
						</div>
						<div id="cv-content">
							<div className="il">
								<div id="cv-top">
									<div id="cvo-profile">
										<div className="box-01">
											<div id="box-hvt">
												<h1>
													<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
												</h1>
												<p />
												<h2>
													<span id="cv-profile-job" contentEditable="true" cvo-placeholder="想应聘的岗位" />
												</h2>
												<p />
											</div>
											<div className="clr" />
										</div>
									</div>
								</div>
								<div className="clr" />
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
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												学习水平
											</span>
										</p>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														河内矿业地质大学
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														专业：地图勘测与管理 2012/8 - 2016/6
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													毕业成绩：优秀平均分数：8.5{' '}
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
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												工作经验
											</span>
										</p>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														CV365建筑股份公司时间: 2017/2至今
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														职务：勘测技术员
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													跟被公司分配的客户见面、咨询直接考察并给未可生产的工程测量建筑尺寸，确定已经测量的建筑尺寸、设计图...提出跟客户工作的记录把测量结果和跟当初设计具有修改的内容传给销售部{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														CV365水过滤器责任有限公司时间：2016/7 - 2017/2
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														水过滤器设计图看懂实习生
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													直接设计并看懂水过滤器设计图协助水过滤器安装过程协助监督工程在执行设计图、生产和安装等过程配合各部门{' '}
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
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												活动
											</span>
										</p>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														参加“绿化夏天”活动：给山区穷人维修房间、建设公共卫生间，给小孩子发粮食、衣服、书本和举办夏天活动
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														给露宿者分发粥
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													参加|“满月晚会”：制作中秋灯、唤起捐助书本、衣服以送至边远乡下区域
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
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												参与项目
											</span>
										</p>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														“Start-up Student Ideas”项目
													</span>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
														角色：代表班长
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
													结果：成功地向好善乐施介绍测量数据软件
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
										<p className="head">
											<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
												其他信息
											</span>
										</p>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
														补充其他信息（若需要）
													</span>
												</h3>
												<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer">
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
