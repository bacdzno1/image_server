export default function CV({ html }: { html: any }) {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					CV KỸ THUẬT ỨNG DỤNG
				</div>
				<div id="form-cv">
					<div className="cv_page height_page" data-page={1}>
						<div id="cv-top">
							<div id="cvo-profile">
								<div className="box-01">
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="氏名" contentEditable="true" />
										</h1>
										<h2>
											応募する：
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="応募仕事" />
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
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
											<div className="box-dm" />
										</div>
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}>
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
												</div>{' '}
												<div className="cum">
													{/* <div class="cumic2"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														業務目標
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
													専門的な環境で働いて、学校で学んだすべての知識とスキルを応用できる工学専門分野での雇用の現実から発展させることができるようにします。会社への貢献を楽しみにして、業績を記録し、仕事で進歩する機会を得ることができます。
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div id="thongtin">
									<div id="thongtin-item">
										<div id="box01" className="block cvo-block box-contact">
											{/* <div class="ifo">
          <div class="ifoic"></div>
          <h4><div id="cv-boxtitle" cv-form-field="true" contenteditable="true" cvo-placeholder="タイトル" class="box-title">履歴書</div></h4>
      </div> */}
											<div id="prof">
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="生年" contentEditable="true">
															生年月日：1994年10月20日
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="性別" contentEditable="true">
															男性の
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="電話番号" contentEditable="true" />
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Eメール" contentEditable="true">
															メール：Vietanh@gmail.com
														</span>
													</div>
												</div>
												<div className="ic">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="住所" contentEditable="true" />
													</div>
												</div>
												<div className="clr" />
											</div>
											<div className="clr" />
											{/* add div */}
										</div>
										{/* add div */}
									</div>
								</div>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '3.85px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '3.85px' }}>
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
														VanXuan技術テクノロジー短期大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														専攻：応用工学
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													卒業評価：良{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '3.85px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '3.85px' }}>
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
														CV365エンターテインメント商品有限会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														役職：シニアテクニカルスタッフ
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													仕様書、規格、技術的要求事項、原材料を含む当社のコードに関する技術文書の設定製品サンプルの作成または製品モデルのアイデアの事前スケッチダイアグラムに移動してサイズをジャンプするためにコンピュータにモデルのデータを入力する色認識基準、カスタマーケア部門からの詳細サイズをチェックすること。割り当てられたコードの調査{' '}
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
										<div id="cvo-profile-avatar-wraper">
											<div className="wimg">
												<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
											</div>
											<div className="box-dm" />
										</div>
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '-5.12px' }}>
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
													{/* <div class="cumicc3"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														スキル
													</div>
												</div>
												<div className="box-content" style={{ marginTop: '-5.12px' }}>
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
															新しい技術や技術を迅速に認識してアクセスする能力
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															英語の会話能力が平均的である。
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															{' '}
															良い分析と問題解決
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															独立して仕事をする能力、チームワークスキル、常にチームの精神を向上させ、職場での圧力に耐える。
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															仕事を整理して整理する能力
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
																<i className="fa fa-plus" /> 追加
															</div>
															<div className="edit js-edit-content"> 編集</div>
															<div className="remove">
																<i className="fa fa-minus" /> 削除
															</div>
														</div>
														<p className="skill-name" cv-form-field="true" contentEditable="true">
															会社の要求に応じて残業を希望する
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-5.12px' }}>
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
													{/* <div class="cumic4"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														受賞
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '-5.12px' }}>
													CV365輸入輸出貿易有限会社の第3四半期のアクティブな従業員科学研究の学生のコンテストで優秀な学生{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-5.12px' }}>
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
													{/* <div class="cumic5"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														資格
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '-5.12px' }}>
													英語証明書B1コミュニケーションコース、経営学コースの証明書{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-5.12px' }}>
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
													{/* <div class="cumic6"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														趣味
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '-5.12px' }}>
													映画を見るみること本を読むこと音楽を聴くことスポーツ{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '-5.12px' }}>
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
													{/* <div class="cumic7"></div> */}
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														連絡先
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '-5.12px' }}>
													デュオン・ホン・アンCV365エンターテインメント商品有限会社の部長0965 128 746{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div id="thongtin">
									<div id="thongtin-item">{/* add div */}</div>
								</div>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '15.8px' }}>
										<div id="experience-table">
											<div id="exp2" className="ctbx experience" style={{ marginTop: '15.8px' }}>
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
														CV365輸入輸出貿易有限会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														役職：マーケットスタッフ
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													食品や飲料など、同社のハイエンド製品の提供を作ること常に消費者を維持し、会社の親密な顧客を確保する顧客やパートナーからの反省がある場合に製品から生じる問題への対処{' '}
												</div>
											</div>
										</div>
									</div>
									<div id="block03" className="cvo-block ui-sortable-handle" style={{ marginTop: '15.8px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.8px' }}>
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
														試験シーズン、夏の緑の活動に参加する
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														献血チームのメンバー
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													学校主催のスポーツ大会に積極的に参加する
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block04" className="cvo-block ui-sortable-handle" style={{ marginTop: '15.8px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.8px' }}>
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
														CV365グループで開催された列車の切符を予約するためのモバイルアプリケーションプロジェクト
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														プロジェクトにおける役割：プログラマに分析、システム設計、モジュール開発、コード最適化を実行させる。
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													結果：顧客が交通機関や旅行の目的でチケットを素早く予約できるようにする。
													それを実践した後のプロジェクトはたくさんの良いフィードバックを受けた。
													<br />{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block05" className="cvo-block ui-sortable-handle" style={{ marginTop: '15.8px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '15.8px' }}>
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
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer">
							<div className="watermark">∴ Timviec365.vn</div>
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
