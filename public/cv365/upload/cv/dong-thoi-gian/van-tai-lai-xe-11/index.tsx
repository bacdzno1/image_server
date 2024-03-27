const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="标题">
					CV vận tải lái xe
				</div>
				<div id="form-cv" style={{ position: 'relative' }}>
					<div className="cv_tt">
						<div id="cv-main">
							<div id="cv-top">
								{/* Div avatar */}
								<div id="bg-avata">
									<div className="ava">
										<div id="cvo-profile-avatar-wraper">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
									<div className="box-dm" />
								</div>
								<div className="box-info">
									<div id="box01" className="block cvo-block box-contact">
										<div id="infor-left">
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="生日" contentEditable="true">
														出生日期：1988/10/15
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
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-sex" cvo-placeholder="性别" contentEditable="true">
														南
													</span>
												</p>
											</div>
										</div>
										<div id="infor-right">
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="邮箱" contentEditable="true">
														thanhchung@gmail.com
													</span>
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-face" cvo-placeholder="Facebook" contentEditable="true" />
												</p>
											</div>
											<div className="ic">
												<p className="icf">
													<i className="fa"></i>
												</p>
												<p className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="地址" contentEditable="true" />
												</p>
											</div>
										</div>
									</div>{' '}
								</div>
								<div className="box-01">
									<div id="box-hvt">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="全名" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="想应聘的岗位" />
										</h2>
										{/* <p><span id="cv-profile-about"></span></p> */}
									</div>
									<div className="clr" />
								</div>
							</div>
							{/* end div avatar */}
							<div className="all">
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}></div>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-2" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															事业目标
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
															可以突出完成公司交代的工作：保管好机清洗干净公司的汽车能长久在公司工作{' '}
														</span>
													</p>
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
												{/* icon titlt skill */}
												<h3>
													<div className="text">
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															技能
														</span>
													</div>
													<div className="image" align="center">
														<div className="icon-skikll" />
													</div>
												</h3>
												{/* end icon title skill */}
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															记得路线的能力好、热情、老实
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															直遵守交通法律、开车时确保安全、不喝酒
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															工作上具有高度责任性，确保安全性
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															了解公路交通法律
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															熟悉城市和附近省份的路
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															工作上勤劳、耐劳、活泼
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															解决问题
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															交接并设立关系好
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
																<i className="fa fa-plus" /> 加{' '}
															</div>
															<div className="edit js-edit-content"> 修改</div>
															<div className="remove">
																<i className="fa fa-minus" /> 删除{' '}
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															工作组织能力好
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-4" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															奖励
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
															Gala国际有限公司的积极员工河内矿业地质大学的优秀学生{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-5" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															{' '}
															证书
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
															B2驾驶证基本级外语证书电脑证书{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-6" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															爱好
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
															旅游做菜运动{' '}
														</span>
													</p>
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
												{/* icon title */}
												<h3>
													<div className="image" align="center">
														<div className="bgic-7" />
													</div>
													<div className="text">
														{' '}
														<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="标题" className="box-title">
															确认者
														</span>
													</div>
												</h3>
												{/* end icon title */}
												<div id="bg-content">
													<p>
														<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
															阮氏怀芳Gala国际有限公司电话号码：0954 369 447{' '}
														</span>
													</p>
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
														学习水平
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-1" />
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
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															河内矿业地质大学
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															培训形式：本科大学-毕业成绩好
														</span>
													</p>
													<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														累计分数：7.2{' '}
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
														工作经验
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-2" />
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
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															Gala国际有限公司时间： 2017/09-2019/0
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															职务：司机员
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														开
														KIA车，执行公司在胡志明市内的交接货品、收钱等任开7座汽车，跟随主管去西部和中部各省份出差执行维修保养汽管理登记检查工作并按时买汽车保险{' '}
													</div>
												</div>
												<div id="exp2" className="ctbx experience">
													{' '}
													<div className="fieldgroup_controls">
														<div className="clone">
															<i className="fa fa-plus" /> 加
														</div>
														<div className="remove">
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															大长发有限公司时间：03/2016 - 04/2017
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															时间：司机员
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														给经理开车，同时按照人事行政部门开车接送员工执行各项目：定期保养、保修、维修按规定执行登记检查执行经理要求的其他工作{' '}
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
														活动
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-3" />
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
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															参加在登记检查中心给司机培训的工作
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															参加志愿活动，给辽远偏僻同仁分发衣服和稻米
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														参加建设学校，让穷困学生有更好的学习环境
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
														参与项目
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-4" />
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
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															参加设立给AZ机动车登检中心培训司机项目
														</span>
													</h3>
													<p className="h3">
														<span className="exp-subtitle" cvo-placeholder="工作岗位" contentEditable="true">
															角色：项目协助员
														</span>
													</p>
													<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获">
														结果:协助了更多员工成功登记驾驶照
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
												<div className="text">
													<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大题目" contentEditable="true">
														其他信息
													</span>
												</div>
												<div className="image">
													<div className="bgic-right-5" />
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
															<i className="fa fa-minus" /> 删除{' '}
														</div>
													</div>
													<h3>
														<span className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="公司名称">
															补充其他信息（若需要）
														</span>
													</h3>
													<div className="exp-content" contentEditable="true" cvo-placeholder="描述具体工作, 在工作期间所得到的收获"></div>
												</div>{' '}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ft" />
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
