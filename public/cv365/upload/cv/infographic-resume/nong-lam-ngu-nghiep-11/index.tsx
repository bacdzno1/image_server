export default function CV({ html }: { html: any }) {
	useEffect(() => {
		handleSetData(html)
	}, [html])
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					CV nông-lâm-ngư-nghiệp
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="info">
									<div id="cam" />
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
									<div className="box-dm" />
								</div>
								<div className="box-01">
									<div id="box01" className="block cvo-block box-contact">
										{' '}
										<div id="prof">
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<p className="icoweb">
													<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
														女性
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
														1992/03/05
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="电话号码" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
														Minhanh@gmail.com
													</span>
												</p>
											</div>
											<div className="clr" />
										</div>
									</div>
								</div>
								<div id="box-hvt">
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
						<div className="all" style={{ paddingTop: '33.25px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '12.4688px' }}></div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '12.4688px' }}>
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															事业目标
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '12.4688px' }}>
													学习经验和实际生活技能以更加完善自己。希望找到一份适合的工作并能在专业工作环境长久上班。努力晋升到农业领域内更高级的岗位{' '}
												</div>
												<div className="clr" />
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '12.4688px' }}>
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															技能
														</div>
													</h3>
												</div>
												<div className="clr" />
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
															有效的团队及独立工作
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
															解决问题能力
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
															交际能力
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
															具有创造思维
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '12.4688px' }}>
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															奖励
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '12.4688px' }}>
													优秀学生农业内创建丰富学生竞赛的第一奖{' '}
												</div>
												<div className="clr" />
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '7.45833px' }}>
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
											<div className="head">
												<div className="icon-1" />
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
													学习水平
												</span>
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.59375px' }}>
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
														顺化农林大学
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															专业：作物科学
														</span>
													</p>
													<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														毕业成绩：好{' '}
													</div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '7.45833px' }}>
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
											<div className="head">
												<div className="icon-2" />
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
													工作经验
												</span>
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.59375px' }}>
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
														胡志明市越成劝农公司时间： 2017/06 - 2019/0
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															职务：树种负责人员
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														整枝、栽接新种从农民把各种菜果买回来并送至集市销售{' '}
													</div>
												</div>
												<div className="clr" />
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '5.59375px' }}>
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
														CV365农林业公司时间： 2016/02 - 2016/05
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															职务：毕业实习生
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														一些稻种的生产、发展能力机产能比学习栽树技术并作出新的树种{' '}
													</div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '7.45833px' }}>
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
											<div className="head">
												<div className="icon-3" />
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
													活动
												</span>
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '5.59375px' }}>
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
														参加学校的冲击青年队
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															给露宿者分发粥
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														是胡志明市志愿会的会员
														<br />{' '}
													</div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															{' '}
															证书
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													作物科学毕业证农学科学证书办公电脑证书B级外语证书{' '}
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															爱好
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													旅游参加公共活动{' '}
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
														<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															确认者
														</div>
													</h3>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													黄金菊、女士劝农课长0654 862 789{' '}
												</div>
												<div className="clr" />
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: 755 }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
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
										</div>{' '}
										<div className="sum">
											{/*                     */}
											<div className="head">
												<div className="icon-4" />
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
													参与项目
												</span>
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
														创造新树种预案
													</div>
												</h3>
												<div className="w-exp">
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															角色：树种技术员
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														结果：协助让公司找到树种接木之新方法，做出来具有经济价值高的更多树种
														<br />{' '}
													</div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
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
										</div>{' '}
										<div className="sum">
											{/*                     */}
											<div className="head">
												<div className="icon-5" />
												<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
													其他信息
												</span>
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
												<div className="w-exp">
													<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获"></div>
												</div>
												<div className="clr" />
											</div>{' '}
											<div className="clr" />
										</div>
										<div className="clr" />
									</div>
								</div>
							</div>
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="clr" />
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
