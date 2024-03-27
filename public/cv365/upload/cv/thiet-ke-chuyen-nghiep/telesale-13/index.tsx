
export default function CV({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }: any) {
	const [htmlData, setHtmlData] = useState(html)

	useEffect(() => {
		setPlaceholderHTMl(lang)
	}, [lang])

	useEffect(() => {
		handleSetData(html)
	}, [html])

	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="이력서 제목">
					Telesales 직원
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
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="성명" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="지원하고 싶은 위치" />
										</h2>
									</div>
									<div className="box-dm" />
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '22.85px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '-0.241667px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														자기소개
													</div>
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf1">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="성별 " contentEditable="true">
																남성
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf2">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="년생 " contentEditable="true">
																25/7/1993
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf3">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="전화번호 " contentEditable="true" />
														</div>
													</div>
													<div className="ic">
														<div className="icf4">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="메일" contentEditable="true">
																thoitrang123@gmal.com
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf5">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-address" cvo-placeholder="주소 " contentEditable="true" />
														</div>
													</div>
													<div className="clr" />
												</div>
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-0.241667px' }}>
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
												<div
													className="box-content err_cv_content"
													cvo-placeholder="내용"
													contentEditable="true"
													style={{ marginTop: '-0.241667px' }}
												>
													전문 텔레세일즈직원이되어 고객을 만족시키고 회사의 공통목표를 달성하는 것을 목표로합니다.-향후 3 년간 지식을 배우고 보충하기
													위한 노력으로 텔레세일즈 리더 가 되기를 원합니다.{' '}
												</div>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '-0.241667px' }}>
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
															사무 컴퓨터 능력
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
															의사소통 스킬
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
															기본 텔레셀즈 스킬
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
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.1375px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '11.425px' }}>
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
														무역 대학교 (2011/08~2015/06)
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														{' '}
														전공: 마켓팅
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다.">
													최종 학력: 중평균점수: 7.9{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '17.1375px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '11.425px' }}>
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
														CV365건강 관리 회사&nbsp;기간 : 2017 년 8 월-현재
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치 : 기능성 식품에대한&nbsp; 텔레세일즈직원
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													회사에서 제공한 데이터를 기반으로 고객에게 연락하고&nbsp; 제품 설명 및 소개합니다.고객 네트워크를 검색하고 확장제품 기술
													지원.{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '11.425px' }}>
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
														CV365 Clean 제품 회사기간 : 2016 년 7 월-2017 년 6 월
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														위치: 영업 직원
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													회사의 목표 및 구현 계획에 따라 판매 계획을 진행제품에 대한 솔루션에대한 고객을 상담하고 지원시장수요를 조사하고 비즈니스
													활동에 적합한 비즈니스 솔루션을 제안{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														상금
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
													"2015 년 마케팅 학생 와 함께 창조 콘테스트에서 2 등 수상2011및 2012년 연속 "1 월 스타"인증 획득{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														자격증
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
													B1 영어 증명서A level 응용 컴퓨터 스킬 증명서{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														취미
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
													Marketing 책 수집여행 , 봉사 활동{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="제목" className="box-title">
														참고자
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="내용" contentEditable="true">
													Ông/ Mr. Ngô Thành NhânCV365 건강 관리 텔레셀즈팀장전화번호: 0912 777 999{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '402.4px' }}>
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
														"그린 섬머"프로젝트 참여 : 청소, 도로,주택&nbsp; 건설&nbsp; 청소 및 지원 학습, 교육 도구&nbsp; 지원.
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														헌혈 단체의 회원
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													-클럽 가입 : 생명 공학 클럽, 영어 커뮤니케이션 클럽,&nbsp; 헌혈 클럽.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
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
														CV365 Health Care Company의 Telesales 전문 연구 프로젝트.
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="작업 위치" contentEditable="true">
														역할 : 회사의 텔레 세일즈 전문가.
													</span>
												</p>
												<div
													className="exp-content err_cv_content"
													contentEditable="true"
													cvo-placeholder=" 업무에서 달성되는 업무 세부 사항을 설명한다."
												>
													-결과 : 최첨단 텔레 셀즈 판매 기술을 적용하여&nbsp; 생산성을 높이고 제품 위험을 개선합니다.
													<br />{' '}
												</div>
											</div>{' '}
										</div>
										<div className="form" />
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
										<div className="form" />
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer">{/*  */}</div>
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
					{/* <div id="MAIN"> */}
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
