export default function CV({ html }: { html: any }) {
	useEffect(() => {
		if (html) handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					安宁检查员工
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div className="form" />
									<div id="prof">
										<div className="ic-sex">
											<div className="icf">
												<i className="fa"></i>
											</div>
											<p className="icoweb">
												<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
													南
												</span>
											</p>
										</div>
										<div className="ic-birthday">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
													1995/05/02
												</span>
											</p>
										</div>
										<div className="ic-phone">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-phone" cvo-placeholder="电话号码" contentEditable="true" />
											</p>
										</div>
										<div className="ic-email">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
													Đaoduyanh1990@gmail.com
												</span>
											</p>
										</div>
										<div className="email" />
										<div className="ic-address">
											<p className="icf">
												<i className="fa"></i>
											</p>
											<p className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
											</p>
										</div>
										<div className="clr" />
										<div className="form1" />
									</div>
									<div className="clr" />
									{/* add div */}
									{/* add div */}
								</div>
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
									<div className="box-dm" />
								</div>
								{/* <div class="box-dm"></div> */}
								<div className="clr" />
								<div id="box-hvt">
									{/*php UTVT  */}
									{/* end UTVT */}
									<h1>
										<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
									</h1>
									<div className="chu" />
									<h2>
										<span id="cv-profile-job" contentEditable="true" cvo-placeholder="想应聘的岗位" />
									</h2>
								</div>
								{/* </div> */}
							</div>
						</div>
					</div>
					{/* <div id="MAIN"> */}
					<div className="all">
						<div id="cv-main">
							<div id="cv-right">
								<div className="ir">
									<div id="sortable" className="ui-sortable">
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
											</div>
											<div className="cum">
												<div className="cumic2" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
													事业目标
												</div>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
												使用业务专门技能给航空港确保安宁、安全具有晋升机会，1年内成为机场安宁监察课长{' '}
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
														交际技能
													</p>
													<div className="bar-exp">
														<div style={{ width: '50%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={50} />
													</div>
													{/* <div class="exp-fake"></div> */}
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
														问题解决技能
													</p>
													<div className="bar-exp">
														<div style={{ width: '80%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</div>
													{/* <div class="exp-fake"></div> */}
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
														成熟使用办公电脑技能
													</p>
													<div className="bar-exp">
														<div style={{ width: '80%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</div>
													{/* <div class="exp-fake"></div> */}
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
														具有在高压力工作环境工作能力
													</p>
													<div className="bar-exp">
														<div style={{ width: '80%' }} />
													</div>
													<div className="bar-value-exp">
														<input min={0} max={100} type="text" defaultValue={80} />
													</div>
													{/* <div class="exp-fake"></div> */}
												</div>
												<div className="clr" />
												{/* <div class="box"></div> */}
											</div>
											<div className="clr" />
											<div className="boxx" />
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
											</div>
											<div className="cum">
												<div className="cumic4" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
													奖励
												</div>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
												在CV365国际航空港的活动管理劳动模范学校的优秀学生{' '}
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
											</div>
											<div className="cum">
												<div className="cumic5" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
													{' '}
													证书
												</div>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
												B级办公室电脑TOEIC-750分-英语证书{' '}
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
											</div>
											<div className="cum">
												<div className="cumic6" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
													爱好
												</div>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
												旅游参加发展技能的俱乐部{' '}
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
											</div>
											<div className="cum">
												<div className="cumic7" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
													确认者
												</div>
											</div>
											<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
												河玉映CV365国际机场经理0985 237 168{' '}
											</div>
										</div>
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
									</div>
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
											<div className="hh" />
											<h3>
												<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
													航空学院
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													专业：航空安宁
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												平均分数：8.0毕业成绩：优秀{' '}
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
											<div className="hh" />
											<h3>
												<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
													CV365 国际航空港时间：2017/06至今
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													职务：安宁检查员
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												使用业务技能以确保航空安宁。及时防止、发现及发现违反航空治安的行为根据职权处理对航空安宁规定的违反行为配合自卫力量随时战斗保护企业参加港口的专业消防力量，确保机场的紧急工作，防止水灾风暴，寻找救护就难以及被安排的其他任务{' '}
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
									</div>
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
											<div className="hh" />
											<h3>
												<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
													参加航空学院之志愿队伍
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													给在胡志明市周围区域之露宿者捐助、协助衣服和粮食
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												参加人道献血志愿员队伍
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
									</div>
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
											<div className="hh" />
											<h3>
												<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
													预案： CV365国际航空港发展活动确保机场的安宁
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
													角色：安宁检查员
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
												结果：发展并成功在港口之地面安宁和飞行活动管理上运用预案
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
									</div>
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
											<div className="hh" />
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
					<div className="footer">{/*  */}</div>
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
