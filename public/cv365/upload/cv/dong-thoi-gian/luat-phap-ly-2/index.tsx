const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="이력서 제목">
					법률
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
															lananh@gmail.com
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
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '48.1px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '24.05px' }}>
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
                                                          <div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="제목" class="box-title">연락처 정보</div></div> */}
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '24.05px' }}>
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
														경력 목표
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div
															className="box-content err_cv_content"
															cvo-placeholder="내용"
															contentEditable="true"
															style={{ marginTop: '24.05px' }}
														>
															- 법률 및 법률 분야의 기술과 경험을 적용하여 전문 변호사가 될 ​​수 있습니다. <br />- 장기 근무를 희망하며, 수행할 법률
															분야의 전문가가 되십시오.
															<br />{' '}
														</div>
													</div>
												</div>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '24.05px' }}>
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
														기술
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
															작업과 시간을 구성하고 관리
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
															워킹 그룹
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
															프레젠테이션 기술
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
															좋은 토론과 웅변 기술
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
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '6.075px' }}>
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
												학업 수준
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '4.05px' }}>
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
														하노이 법대
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/11/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														전문화: 경제법 - 고품질
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다.">
													우수 등급{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '6.075px' }}>
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
												업무 경험
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '4.05px' }}>
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
														CV365 유한책임회사
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/11/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														직위: 부동산 법률 고문
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													- 도움이 필요한 고객을 위한 부동산 거래 관련 법적 절차 컨설팅 <br />- 고객을 위한 합리적인 계약서 작성
													<br />- 고객 관리 텔레세일 수행
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '4.05px' }}>
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
														CV365 공증 사무소
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/11/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														직위: 연습생
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													- 법적 공증인 직업에서 중요한 기술 연습 <br />- 다양한 유형의 계약서 초안 작성: 공증된 계약, 구매 및 판매, 기부,...
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														포상
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
															- 2015년 하노이 법대에서 매년 개최되는 학생 과학 연구 경연 대회에서 1등상을 수상했습니다. <br />- 변호사 토론 및 토론
															대회에서 1등상을 수상했습니다. - 하노이 변호사 협회에서 개최된 원탁 회의가 수상했습니다. <br />{' '}
														</div>
													</div>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														자격증
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
															- 정보 기술 응용 증명서
															<br />- 경제법 전공 영어 증명서{' '}
														</div>
													</div>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														관심
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
															- 친구들과 잡담
															<br />- 여행
															<br />- 요리
															<br />{' '}
														</div>
													</div>
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
													<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														참조 사람
													</span>
												</div>
												<div className="ct_bo">
													<div className="ct_box">
														<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
															Dang Tam Anh
															<br />
															하노이 법대 경제법학부 부학장
															<br />
															전화번호: 0935 158 742
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
							<div id="cv-content" style={{ paddingBottom: '572.4px' }}>
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
												일하다
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="회사명">
														학생회 활동 참여 - 하노이법대 당위원회
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/11/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														- 오라토리 클럽 회원&nbsp;
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													- 하노이 변호사 봉사단 CV365 회원{' '}
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
												참여 프로젝트
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
														하노이변호사봉사단 CV365에서 개최한 도시의 인재변호사 프로젝트
													</div>
													<div className="exp-date" contentEditable="true" cvo-placeholder="근무시간">
														11/06/2023 - 24/11/2023
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														역할: 프로젝트에 대한 일반적인 작업 계획을 구성합니다.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													결과: 학생부터 학교를 졸업한 변호사까지 많은 젊은이들이 참여하도록 유도했습니다. 목표는 실무에 필요한 기술과 지식을 갖춘
													젊은 변호사 커뮤니티를 교육하는 것입니다.{' '}
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
												추가 정보
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
													<div className="exp-title" contentEditable="true" cvo-placeholder="회사명">
														CV365 대학
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														추가 정보(필요한 경우)
													</span>
												</p>
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
