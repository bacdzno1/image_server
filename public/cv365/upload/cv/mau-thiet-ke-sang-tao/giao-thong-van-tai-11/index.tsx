const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					giao thông vận tải
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
										<div className="box-dm" />
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
									<div className="clr" />
								</div>
							</div>
						</div>
						<div className="all" style={{ paddingTop: '27.35px' }}>
							<div id="cv-main" style={{}}>
								<div id="cv-right">
									<div className="ir">
										<div id="sortable" className="connectedSortable sortable ui-sortable">
											<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{ marginTop: '18.2625px' }}>
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
														<div className="icf">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-birthday" cvo-placeholder="生年" contentEditable="true">
																19/05/1992
															</span>
														</div>
													</div>
													<div className="ic">
														<div className="icf">
															<i className="fa"></i>
														</div>
														<div className="icoweb">
															<span id="cv-profile-sex" cvo-placeholder="性別" contentEditable="true">
																女性
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
																test@gmail.com
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
											</div>
											<div id="box02" className="block cvo-block ui-sortable-handle" style={{ marginTop: '18.2625px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '18.2625px' }}>
													職業環境で働くことを楽しみにして、固有の経験と知識を開発する多くの機会があります。&nbsp;
													<br />
													同時に、あなたは自分自身を向上させるために現実から貴重なスキルや経験を補完することができます。会社の強固な発展を生み出すために力と知恵を貢献して、それ以来、多くのキャリアアップの機会が与えられます。{' '}
												</div>
											</div>{' '}
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{}}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block01" className="cvo-block ui-sortable-handle" style={{ marginTop: '20.5125px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '13.675px' }}>
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
														交通通信大学
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														専攻：交通工事のエンジニア
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													卒業評価：良{' '}
												</div>
											</div>{' '}
										</div>
									</div>
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: '20.5125px' }}>
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
											<div id="exp1" className="ctbx experience" style={{ marginTop: '13.675px' }}>
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
														CV365建築・インテリア株式会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：建築・インテリアの監督を担当する従業員
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													実施したプロジェクト：Van Phu・Ha Dongアパート
													<br />- 投資家と仕事をする会社を代表する
													<br />- 建設活動の進捗と品質を管理する
													<br />- 投資家との多くの項目の確認と承認、承認文書と完了文書の作成。
													<br />{' '}
												</div>
											</div>
											<div id="exp2" className="ctbx experience" style={{ marginTop: '13.675px' }}>
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
														交通通信大学　交通技術センター
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：研修生
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 請負業者が別の段階に進む前に確認した建設プロセス中の進捗と品質管理を監視する。
													<br />- テストサンプルの部屋で実験をする
													<br />- アスファルトおよびコンクリート表面の設計、施工、製造に関する請負業者への助言および支援。
													<br />- 技術的要件を満たしていないポジションについて報告し、改善策を提案する。
													<br />- 記録を作成し、投資家および管理委員会と品質検査の結果を報告する。
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
											<div id="box03" className="block cvo-block box-skills ui-sortable-handle" style={{ marginTop: '16.34px' }}>
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
															設計と構造についての十分な理解
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
															プロジェクトを管理し、アイテムを計算する方法を知っている
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
															法の知識
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
															上手なコミュニケーション、優れたプレゼンテーションスキル
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
											<div id="box04" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.34px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '16.34px' }}>
													- 社会活動に積極的に参加している学生報酬
													<br />
													-&nbsp;2018年末にCV365 建設インテリア株式会社で優秀な従業員
													<br />{' '}
												</div>
											</div>
											<div id="box05" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.34px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '16.34px' }}>
													- 道路・橋梁技術者の修了証
													<br />- 情報学証明書
													<br />{' '}
												</div>
											</div>
											<div id="box06" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.34px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '16.34px' }}>
													- トレッキング
													<br />- ボランティア活動に参加する
													<br />- ドローイング
													<br />{' '}
												</div>
											</div>
											<div id="box07" className="block cvo-block ui-sortable-handle" style={{ marginTop: '16.34px' }}>
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
												<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true" style={{ marginTop: '16.34px' }}>
													グエンドゥクトラン　先生
													<br />
													交通通信大学の講師
													<br />
													電話番号：0978 258 146
													<br />{' '}
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
							<div id="cv-content" style={{ paddingBottom: '299.4px' }}>
								<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
									<div id="block02" className="cvo-block ui-sortable-handle" style={{ marginTop: 0 }}>
										<div id="experience-table">
											<div id="exp3" className="ctbx experience" style={{ marginTop: 0 }}>
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
														CV365建設科学検査株式会社
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：インターンシップ
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- 実験を実施し、プロジェクトで使用される材料の品質を確認する。
													<br />- 記録の作成と実験結果の報告
													<br />{' '}
												</div>
											</div>
										</div>
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
														- 交通通信大学の人道的献血クラブでのボランティア活動に参加する。
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														- 大学で4年連続の自発的献血クラブに参加&nbsp;
													</span>
												</p>
												<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
													- Phuotluon協会のメンバーとして、ハイランド人を支援するための寄付をもたらすためにトレッキングツアーに参加する。{' '}
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
														National Highway 1を拡張およびアップグレードするプロジェクトの一部であるCau Gie Ninh Binh高速道路とHighway
														1を接続する道路の建設プロジェクト
													</div>
												</h3>
												<p className="h3">
													<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
														職位：現場検査
													</span>
												</p>
												<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容"></div>
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
									</div>
								</div>
							</div>
							<div className="clr" />
						</div>
						<div className="footer"></div>
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
