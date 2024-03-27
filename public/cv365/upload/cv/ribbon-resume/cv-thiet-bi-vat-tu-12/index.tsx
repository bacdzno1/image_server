const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="이력서 제목">
					Thiết bị vật tư
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
											<div className="fake_img" />
										</div>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											{' '}
											<div id="prof">
												<div className="ic1">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="년생 " contentEditable="true">
															19/05/1992
														</span>
													</div>
												</div>
												<div className="ic2">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="성별 " contentEditable="true">
															여성
														</span>
													</div>
												</div>
												<div className="ic3">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="전화번호 " contentEditable="true" />
													</div>
												</div>
												<div className="ic4">
													<div className="icf">
														<i className="fa" />
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="메일" contentEditable="true">
															test@gmail.com
														</span>
													</div>
												</div>
												<div className="ic5">
													<div className="icf">
														<i className="fa" />
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
									<div className="ifo">
										<div className="chu">
											<h1>
												<span id="cv-profile-fullname" cvo-placeholder="성명" contentEditable="true" />
											</h1>
											<div className="clr" />
											<h2>
												<span id="cv-profile-job" contentEditable="true" cvo-placeholder="지원하고 싶은 위치" />
											</h2>
											<div className="clr" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '43.35px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '-4.36875px' }}>
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
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-4.36875px' }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														작업 목표
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="내용"
															contentEditable="true"
															style={{ marginTop: '-4.36875px' }}
														>
															장비 및 소모품 구매 에서 숙련 된 직원이 되기 원함.
															<br />
															업무에 최선을 다하고 해당 급여을 얻으면 좋겠음.
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '-4.36875px' }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														개인의 기능
													</span>
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
															자재 및 장비 제공 프로젝트 입찰에 관한 주 규정을 명확 이해 가능
														</p>
														<div className="bar-exp">
															<div style={{ width: '50%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={50} />
														</div>
														<div className="exp-fake" />
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
															적산, 도면이해, 입찰서류 작성 및 견적 스킬
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="exp-fake" />
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
															전기 엔지니어의 직위와 관련된 사무용 컴퓨터 프로그램의 능숙한 사용 : 워드, Excel, Autocard, ..
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="exp-fake" />
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
															업무에 고압 견디 가능
														</p>
														<div className="bar-exp">
															<div style={{ width: '80%' }} />
														</div>
														<div className="bar-value-exp">
															<input min={0} max={100} type="text" defaultValue={80} />
														</div>
														<div className="exp-fake" />
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-4.36875px' }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														상금
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="내용"
															contentEditable="true"
															style={{ marginTop: '-4.36875px' }}
														>
															학교에서&nbsp; 많은 사회 활동에 참여 개인으로&nbsp; 표창장을 받았음
															<br />
															CV365 장비 및 자재 감사 회사의 적극적인 직원으로 2018 년 말에 표창을 받았음
															<br />{' '}
														</div>
													</div>
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '32.5125px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '32.5125px' }}>
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
														교통대학교
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/07/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														{' '}
														전공: 건설경체
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다.">
													평가: 최우수
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '32.5125px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '32.5125px' }}>
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
														CV365 장비 및 재료 감사 회사
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/07/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														직위:&nbsp; 건설 분야에 장비 감사&nbsp;
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													- 완성 된 프로젝트를위한 전기 장비 및 자재의 정산 감사
													<br />
													-&nbsp;문서를 수집하고 분류하며프로젝트의 법적 문서와 장비 목록을 검사 및 비교
													<br />
													건설 활동을위한&nbsp; 전기 및 기계 장비 및 재료 수량 재고 실사 및&nbsp; 적산하여 예산하기
													<br />
													프로젝트 투자 자본, 할당 된 자본을 확인
													<br />
													전체 프로젝트에 대한 지불액, 장비 정산액을 확인
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
							<div id="cv-main" style={{ paddingBottom: '480.4px' }}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														자격증
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: 0 }}>
															- 종합 회계 자격증
															<br />- 기본 컴퓨터 공학 적용 자격증&nbsp; &nbsp; &nbsp;
															<br />- B1급 영어 자격증
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														취미
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: 0 }}>
															건설에 관한 자재 독서 좋아하기
															<br />
															여행
															<br />
															공동 활동 참가&nbsp;
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														참고자
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true" style={{ marginTop: 0 }}>
															Mr. 띵반탕
															<br />
															장비-자재 팀 직원
															<br />
															CV365 장비 및 자재 감사 회사
															<br />
															전화번호: 0365 128 479
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle">
										<div id="experience-table">
											<div id="exp2" className="ctbx experience">
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
														CV365 투자 및 건설 주식회사
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/07/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														직위:&nbsp; 예산 기숯자 및 건설 장비에 개한 입찰
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													입찰 서류를 기반으로 프로젝트를 위하여 자재- 부품 수량 적산 및 BOQ 예산&nbsp;&nbsp;
													<br />
													건축 작업을위한부품 볼륨 설정 및견적
													<br />
													입찰 서류 준비, 프로젝트 수행을위한 하청 업체 선정
													<br />
													작업의 정확성과&nbsp; 진도을 보장하기 위해&nbsp; 많은 관련 부서와 연락 및 협력
													<br />- 투자 제안서 제시, 투자 효과 예측
													<br />- 입찰 서류 준비, 입찰서류&nbsp; 평가
													<br />
													예산 서류 관리
													<br />{' '}
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
										</div>
										<div className="head">
											<div className="icright3" />
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												운영 사항
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="회사명">
														가난한 사람들과 노숙자들을위한&nbsp; 조언에&nbsp; 기부 운동에 자주 참여.
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/07/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														고아 학교의 자원 봉사 팀에 참여.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													대학교 확과에 문화 예술 활동 개최
													<br />
													마을의 공공 활동에 참여.
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												진행한 프로젝트
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="회사명">
														CV365 장비 및 자재 심사 회사에서 근무할 때 장비 및 건축 자재에 대한 품질 투자 프로젝트
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/07/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														담당업무 : 계약자와 연결하여 계약자의 요구 사항을 충족시킬 수 있도록&nbsp; 홍보 계획 수립 및 자료 준비
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													결과 : 회사에서 건설 장비 및 자재 매매&nbsp; 계약 체결 및&nbsp; 신뢰성 있는 많은 투자자 유치
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="큰 제목" contentEditable="true">
												추가정보
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="회사명">
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
						<div className="footer">
							<div className="watermark">© Timviec365.vn</div>
						</div>
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
