const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="이력서 제목">
					석유화학 필터
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div className="anh">
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
										</div>
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="성명" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="지원하고 싶은 위치" />
										</h2>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											<div className="tt-box1">
												<div className="cumicc1" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
													자기소개
												</div>
											</div>
											<div id="prof">
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="년생 " contentEditable="true">
															1991년11월 8일
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="성별 " contentEditable="true">
															남성
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
															minhchuongha@gmaIl.com
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
													업무를 완수하기 위해 관련 지식과 경험을 적용합니다. 베트남 최대의 석유공사가 되는 기업에 기여합니다.--향후 3년 내에 석유
													사장으로 승진할 수 있는 기회를 제공합니다.{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '32.2px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '21.4667px' }}>
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
														호치민시 광업 지질 대학교
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														{' '}
														전공: 화학 공학 기술 2008/8~2012/6
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다.">
													졸업평가: 우수평균점수: 7.8{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '32.2px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '21.4667px' }}>
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
														Timviec365.vn 석유 총공사기간: 2015/1-현재
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치: 화학물질 차장
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													화학 물질 공급 과정 및 석유, 활력 발전 서비스 검사 담당&nbsp;화학 물질 분야의 고객을 수집, 검색, 개발프로젝트 구현 과정을
													모니터링, 독촉, 감시함{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '21.4667px' }}>
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
														CV365석유-전력 회사기간: 2012/1월~2015/12월
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치: 석유 화학 필터 엔지니어
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													-새로운 유전의 품질 관리, 탐사 및 검색-기술 시스템 설계, 석유 개척 도면 설계의 평가, 검사 및 검토&nbsp;-가솔린 시스템 운영
													관리{' '}
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
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '14.04px' }}>
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
															-영어로 의사 소통
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
															기본 한국어로 의사소통
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
															독립-팀워크 기술
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
															사무실용 컴퓨터 공학
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
															인적 자원 관리 및 프로젝트 관리 기술
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.04px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '14.04px' }}>
													“2010년 도시급 좋은 것의 5가지 학생” 칭호위치: KHH반 청년단 간부“2010년 도시급 좋은 것의 5가지 학생” 대회 일등{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.04px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '14.04px' }}>
													-사무실용 컴퓨터 공학-영어: TOIEC 700, IELTS 7,5-CPA, CFA, VACPA 금융 증명서{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.04px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '14.04px' }}>
													-영어 독학-음악 듣기, 독서, 영화 보기-피크닉{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '14.04px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: '14.04px' }}>
													-Ms. Dao Mai Anh-CV365 석유-전력 회사 부사장전화번호: 036 787 9999{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: 321 }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												운영 사항
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
														“큰 아름 연결 캠페인”: 가난한 농촌 지역의 학생들을위한 음식, 의복, 학습도구 지원 호소, 배포에 참여함
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														+ 노숙자들에게 죽을 분배하기+ 고아원에서 자원 봉사자 가르치기
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													“인간적인 피 방울” 이벤트: 헌혈 자원봉사자로 하고 헌혈하는 학생들을 지원함
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
														"원유를 완제품으로 변환하는 솔루션” 프로젝트
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														역할: CV365 석유-전력 회사의 석유 화학 필터 엔지니어
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													결과 : 단 2 개월 이내 회사의 매출이 30 %로 증가합니다.
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
						<div className="footer"></div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					<div className="ft">
						<div className="watermark">© Timviec365.vn</div>
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
