const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					CV nhập liệu
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
											<div className="box-dm" />
										</div>
									</div>
									<div className="chu">
										<h1>
											<span id="cv-profile-fullname" cvo-placeholder="氏名" contentEditable="true" />
										</h1>
										<div className="clr" />
										<h2>
											<span id="cv-profile-job" contentEditable="true" cvo-placeholder="応募仕事" />
										</h2>
									</div>
									<div id="box-hvt">
										{/*php UTVT  */}
										{/* end UTVT */}
										<div id="box01" className="block cvo-block box-contact">
											<div className="tt-box1">
												<div className="cumicc1" />
												<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
													履歴書
												</div>
											</div>
											<div id="prof">
												{/* <div class="ic03"> */}
												<div className="ic01">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-birthday" cvo-placeholder="生年" contentEditable="true">
															19/05/1992
														</span>
													</div>
												</div>
												<div className="ic02">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-sex" cvo-placeholder="性別" contentEditable="true">
															女性
														</span>
													</div>
												</div>
												<div className="ic03">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-phone" cvo-placeholder="電話番号" contentEditable="true" />
													</div>
												</div>
												{/*  </div> */}
												{/*  <div class="ic02"> */}
												<div className="ic04">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-email" cvo-placeholder="Eメール" contentEditable="true">
															test@gmail.com
														</span>
													</div>
												</div>
												<div className="ic05">
													<div className="icf">
														<i className="fa"></i>
													</div>
													<div className="icoweb">
														<span id="cv-profile-address" cvo-placeholder="住所" contentEditable="true" />
													</div>
												</div>
												{/* </div> */}
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
						<div className="all" style={{ paddingTop: '32.1px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '5.5375px' }}>
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
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '5.5375px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '5.5375px' }}>
													プロセスがうまくいかないことを確実にするために会社が正しいデータを入力するのを助ける。
													<br />
													企業データ管理の分野でマネージャになりたいという長期的な願い
													<br />{' '}
												</div>
											</div>
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '5.5375px' }}>
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
															基本的なコンピュータ操作に習熟している
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
															慎重な性格、勤勉なスタイル
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
															高い忍耐力、繰り返し行われる作業ができる。
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '5.5375px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '5.5375px' }}>
													大学レベルの科学研究の第3位。
													<br />
													大学のチームに参加する過程で青少年連合、ハノイ青少年連盟からの優秀な成績証明書
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
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '24.075px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '16.05px' }}>
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
														ホーチミン市経済大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														専攻：外国貿易
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													卒業評価：良、平均点数：7.16{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '24.075px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '16.05px' }}>
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
														CV365一員有限会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：営業チーム長
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- コンサルティング、製品の紹介、顧客の質問への回答
													<br />- 在庫を追跡し、業界の注文を請求する。
													<br />- 製品サプライヤーとの協力
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '16.05px' }}>
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
														CV365 AB有限会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：書類担当従業員
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 輸出入書類の作成
													<br />- 毎月の輸出入状況に関する報告
													<br />- 顧客やサプライヤーとの協力
													<br />{' '}
												</div>
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
					<div className="cv_page page_more height_page" data-page={2}>
						<div className="all" style={{ paddingTop: 0 }}>
							<div id="cv-main" style={{ paddingBottom: '668.4px' }}>
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														資格
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: 0 }}>
													Aレベルの応用情報学証明書
													<br />{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														趣味
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: 0 }}>
													音楽を聴く
													<br />
													ドローイング
													<br />
													調理
													<br />{' '}
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
													<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
														連絡先
													</div>
												</div>
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: 0 }}>
													デュオンコックハング氏
													<br />
													CV365 AB有限会社の社長
													<br />
													電話番号：0983 218 145
													<br />{' '}
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
											<div id="exp3" className="ctbx experience">
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
														CV365店
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：セールスマン
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 店舗での販売
													<br />- 店舗のFacebookチャネルでのコンサルティング、商品の紹介、宣伝、電話によるカスタマーケア
													<br />- 毎日販売された商品の生産量について報告する
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												活動
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
														- ボランティアプログラムに参加
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														+ホームレスの人々にお粥を配る+孤児院でボランティアを教える
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- ホーチミン市経済大学の多くの課外プログラムの支援に参加する。
													<br />
													+学校代表団のコミュニケーション活動を支援する
													<br />
													+休日を祝うために課外および芸術公演を築く
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												参加した事業
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
														CV365 一員有限会社で従業員のデータ入力スキルを向上させる
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														役割：会社で働くスタッフを正しい入力手順で案内し、エラーを回避するためのヒントをすばやく表示する。
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													結果：会社のデータは基準を満たし、エラーを制限するように保証されているため、次の段階での作業効率は計画に従って達成される。
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
											<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
												追加情報
											</div>
										</div>
										<div id="experience-table">
											<div id="exp1" className="ctbx experience">
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
						<div className="watermark_js">© Timviec365.vn</div>
					</div>
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
