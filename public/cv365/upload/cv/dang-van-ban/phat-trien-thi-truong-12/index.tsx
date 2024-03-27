const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					phát triển thương mại
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
											<span id="cv-profile-fullname" cvo-placeholder="氏名" contentEditable="true" />
										</h1>
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="応募仕事" />
										</h2>
									</div>
									<div className="box-dm" />
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
												<div className="tt-box1">
													<div className="cumicc1" />
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														履歴書
													</div>
												</div>
												<div id="prof">
													<div className="ic">
														<div className="icf1">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="性別" contentEditable="true">
																女性
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf2">
															<i className="fa">生年月日:</i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="生年" contentEditable="true">
																19/05/1992
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf3">
															<i className="fa">電話番号:</i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-phone" cvo-placeholder="電話番号" contentEditable="true" />
														</div>
													</div>
													<div className="ic">
														<div className="icf4">
															<i className="fa">電子メールア:</i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-email" cvo-placeholder="Eメール" contentEditable="true">
																test@gmail.com
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf5">
															<i className="fa">住所:</i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-address" cvo-placeholder="住所" contentEditable="true" />
														</div>
													</div>
													<div className="clr" />
												</div>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														業務目標
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													より多くの経験を学び、市場分野で多くのスキルを磨き、安定した収入を得ることを願っています
													<br />
													自分自身をさらに発展させるために挑戦的でダイナミックな環境で働いて、プロの市場開発従業員になるよう努めます。
													従業員が職場で進歩するのを助けるために会社が常に条件を作り出すことを望みます。
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
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '38.1px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												学歴
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '38.1px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="会社名">
														ハノイ商業大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														専攻：輸出入および国際マーケティング
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													評価：優
												</div>
											</div>{' '}
										</div>
										<div className="form" />
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '38.1px' }}>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												職歴
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: '38.1px' }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="会社名">
														CV365バイク用品会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：市場開発担当副部長
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 顧客のニーズを分析し、同社の供給元の市場動向を理解する
													<br />- 電話を聞いて、会社に顧客を歓迎する
													<br />- 販売促進部のための支援、プロモーションプログラムの企画、ワークショップの企画、会社の新製品の紹介。
													<br />- マーケティング活動に関連する他の部門のためのサポート
													<br />{' '}
												</div>
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
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '10.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														スキル
													</div>
												</div>
												<div className="exp content-edit skill">
													<div className="ctbx">
														<div className="fieldgroup_controls">
															<div className="clone">
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															マーケティングを専門とする英語スキル
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															市場開拓動向を素早く把握
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															オフィス情報に堪能
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															グループで働く能力
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															作業圧力に強い
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															周辺環境への素早い適応
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '10.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														受賞
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '10.64px' }}>
													- 貿易大学のボランティア大学チームのボランティア活動における優れた個人
													<br />- CV365 Motorbike Equipment Companyのポジティブスタッフ
													<br />{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '10.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														資格
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '10.64px' }}>
													- 専門英語証明書
													<br />- レベルBの情報学証明書
													<br />{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '10.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														趣味
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '10.64px' }}>
													- 旅行
													<br />- ビジネスに関する本を読む
													<br />- ニュースを見る
													<br />{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '10.64px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														連絡先
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '10.64px' }}>
													グエントゥアンアン氏
													<br />
													CV365有限会社の社長
													<br />
													電話番号：1285 358 947
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '272.4px' }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="会社名">
														CV365有限会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														役職：マーケティングマネジメント秘書
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 会議、セミナー、スタッフトレーニングなど、会社のためのイベントの企画。
													<br />- 社内の従業員向けのエンターテイメントプログラムの提案と計画
													<br />- マーケティング支援 -&nbsp; PR活動
													<br />- 事務および秘書業務を遂行する
													<br />{' '}
												</div>
											</div>
										</div>
										<div className="form" />
									</div>
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												活動
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="会社名">
														- ボランティアはボランティアプログラムの組織に参加する。
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														- 大学で4年連続の自発的献血クラブに参加&nbsp;
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													-ハノイ商業大学のボランティア学生チームに参加する{' '}
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												参加した事業
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<h3>
													<div className="exp-title err_cv_content" contentEditable="true" cvo-placeholder="会社名">
														GaT&nbsp; -&nbsp; Give Take Bookプロジェクト -&nbsp; CV365 Motorbike Equipment Companyの製品の市場拡大
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														役割：Facebook、Instagramのコンテンツ記事の管理と作成
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													プロジェクトを通じて、チームワーク、プレゼンテーション、コミュニケーションスキルのトレーニング、コンテンツマーケティングの執筆におけるスキルの蓄積ができる。
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												追加情報
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience" style={{ marginTop: 0 }}>
												{' '}
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除
													</div>
												</div>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														その他情報（必要の場合）
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容"></div>
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

export default CV
