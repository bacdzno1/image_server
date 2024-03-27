const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="이력서 제목">
					CONTENT 작성 아르바이트 지원
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="box01" className="block cvo-block box-contact">
										{' '}
										<div id="prof">
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<div className="icoweb">
													<span id="cv-profile-sex" cvo-placeholder="성별 " contentEditable="true">
														여
													</span>
												</div>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<div className="icoweb">
													<span id="cv-profile-birthday" cvo-placeholder="년생 " contentEditable="true">
														1998/11/7
													</span>
												</div>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<div className="icoweb">
													<span id="cv-profile-phone" cvo-placeholder="전화번호 " contentEditable="true" />
												</div>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<div className="icoweb">
													<span id="cv-profile-email" cvo-placeholder="메일" contentEditable="true">
														tuoitham365@gmail.com&nbsp;
													</span>
												</div>
											</div>
											<div className="ic">
												<div className="icf">
													<i className="fa"></i>
												</div>
												<div className="icoweb">
													<span id="cv-profile-address" cvo-placeholder="주소 " contentEditable="true" />
												</div>
											</div>
											<div className="clr" />
										</div>
										{/* add div */}
									</div>
									{/* <div class="chu">
                  
              </div> */}
									<div id="cvo-profile-avatar-wraper">
										<div className="wimg">
											<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="성명" contentEditable="true" />
										</h1>
										<div className="clr" />
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="지원하고 싶은 위치" />
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
												{/* <div class="tt-box1">
                                                      <div class="cumicc1"></div>
                                                      <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="제목" class="box-title">자기소개</div></div> */}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														작업 목표
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
													전문적인 작업 환경을 경험하고 가장 정확한 콘텐츠 작성 기술을 배우고 연습하기를 바랍니다. 또한, 정규직 직원이 되면 우수한
													직원이 될 수 있는 것으로 기대합니다.
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
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '5.23333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												교육수준
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '3.14px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														저널리즘 및 언론 학원
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														{' '}
														학과:&nbsp; 저널리즘
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다.">
													전공: 인쇄 신문{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '5.23333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												경력
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '3.14px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														Hoa Hoc Tro 신문2019 년 6 월 ~ 2019 년 11 월
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치 : 기사를 쓰는 Freelancer
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													업무 : 학교에 대한 뉴스 검색 및 쓰기 및 신문 센터한테&nbsp; 전달{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '3.14px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														Công ty Dịch vụ Web CV365/웹 서비스 회사 CV3652018 년 3 월 ~ 2019 년 5 월
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치 : 집의 카피라이터
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													작업 : 할당 된 키워드에 따라 글 작성{' '}
												</div>
											</div>
											<div id="exp3" className="ctbx experience" style={{ marginTop: '3.14px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														CV365 옷 가게2017 년 9 월 ~ 2018 년 2 월
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치 : 파트 타임 온라인 영업 직원
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													주요 엄부 : 팬페이지 관리,&nbsp; 판매 자문 및 필요에 따라 팬 페이지에 광고 게시{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '5.23333px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												운영 사항
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '3.14px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														푸토 학생 협회-자원 봉사 팀에 가입
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														언론 지원자
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													협회팬 페이지에 이벤트 활동 게시&nbsp;
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
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '13.94px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														개인의 기능
													</div>
												</div>
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															프리랜서 작문 기술
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															Microsoft Office 소프트웨어 사용 기술
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															영어 읽기, 쓰기 능력
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															프레젠테이션 기술
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															빠른 독해 능력&nbsp;
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															빠른 타이핑 기술
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															집중력
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															환경에 적응하는 능력
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
																<i className="fa fa-plus" /> 추가
															</div>
															<div className="edit js-edit-content"> 수정</div>
															<div className="remove">
																<i className="fa fa-minus" /> 삭제
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															빨리 배울 수있는 능력
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '13.94px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														상금
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '13.94px' }}>
													2018-2019 학년도 1 학기 우수 학생청소년 클럽 회원 2018 년 가장 활발한 회원저널리즘 학부의 "좋은 뉴스 사냥꾼"수상{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ display: 'none', marginTop: '13.94px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														자격증
													</div>
												</div>
												<div className="box-content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '13.94px' }}>
													B1급 영어 자격증기업관리 레슨, 소통 레슨 자격증{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '13.94px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														취미
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '13.94px' }}>
													신문 읽기, 뉴스보기여행과 문화 배우기쓰기{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '13.94px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														참고자
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '13.94px' }}>
													CV365 회사 편집 팀장{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '691.4px' }}>
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
										</div>
										<div className="head">
											<div className="icright4" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												진행한 프로젝트
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														프로젝트 참여 : "골목에있는 연꽃"– 규정에 따라 공공 벽과 쓰레기장에서 청소하는 프로젝트
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														역할 : 개인은 아이디어를 재생하고 구현합니다.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													결과 :이 프로젝트는 Cau Giay, Dich Vong Hau 병동 8 클러스터의 대부분의 주민들의 참여를 끌었으며 페이스북페이지에서 100 % 5
													*로 평가되었습니다.
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												추가정보
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 추가
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 삭제
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="회사명">
														기타 정보( 필요시)
													</div>
												</h3>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."></div>
											</div>{' '}
										</div>
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="bg">
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
