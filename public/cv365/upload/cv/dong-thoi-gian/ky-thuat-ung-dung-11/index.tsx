const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					CV kỹ thuật ứng dụng
				</div>
				<div id="form-cv">
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
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
									</h1>
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="想应聘的岗位" />
									</h2>
								</div>
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div id="prof">
										<div className="ic">
											<div className="icf1">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
													出生日期： 1993/09/16
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf2">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
													南
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf3">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-phone" cvo-placeholder="电话号码" contentEditable="true" />
											</div>
										</div>
										<div className="ic">
											<div className="icf4">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
													anhthai93@mail.com
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf5">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
											</div>
										</div>
										<div className="clr" />
									</div>
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												事业目标
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											希望能晋升公司客户服务部门之主管岗位累计到更多工作经验并提高自己的技术分级能力{' '}
										</div>
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
													交际英语流利
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
													成熟使用AutoCad和其他技术软件设计设备动机
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
													成熟使用MS Office
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
													交际和演说能力好
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
													工作上一直具有高度责任性
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
													组织、管理及解决工作能力
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												奖励
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											2014年机械系之优秀员工学生研究科学竞赛之第一奖{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												{' '}
												证书
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											办公电脑证书从业汽车技术专员证书{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												爱好
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											看跟汽车技术应用有关之杂志和书了解新型汽车听音乐、上网看新闻运动活动{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
												确认者
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											黄青风、先生Mercedes公司经理0687 164 198{' '}
										</div>
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
									<div className="head">
										<div className="icright1" />
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
											学习水平
										</div>
									</div>
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
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													专科：机械
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												专业：汽车-动力设备{' '}
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
									</div>{' '}
									<div className="head">
										<div className="icright2" />
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
											工作经验
										</div>
									</div>
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
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													职务：高级技术专员
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												专门控制给有需求客户提供正牌配件的工作负责从外国把正牌配件进口回来的的工段根据客户需求、销售之汽车数量来计算需要进口的配件数量给代理分配配件{' '}
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
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													职务：咨询服务之实习生{' '}
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												发现汽车的缺点、寻找更换配件服务客户{' '}
											</div>
										</div>{' '}
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
										<div className="icright3" />
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
											活动
										</div>
									</div>
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
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													给露宿者分发粥
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												协助零配件生产单位在详细分析和应用在产品上的工段
												<br />{' '}
											</div>
										</div>{' '}
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
										<div className="icright4" />
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
											参与项目
										</div>
									</div>
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
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													角色：提出应用汽车构想之个人
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												结果：被组织部门评估为应用性高的汽车模式，从而给公司带回更多生产零配件合作合同
												<br />{' '}
											</div>
										</div>{' '}
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
										<div className="icright5" />
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
											其他信息
										</div>
									</div>
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
											<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获"></div>
										</div>{' '}
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

export default CV
