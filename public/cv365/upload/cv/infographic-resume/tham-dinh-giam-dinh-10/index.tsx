const CV = () => {
	return (
		<>
			<div id="page-cv">
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					CV thẩm định
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="cvo-profile-avatar-wraper">
									<div className="wimg">
										<img id="cvo-profile-avatar" cvo-form-field="true" src="images/no_avatar.jpg" />
									</div>
								</div>
								<div className="box-dm" />
								<div id="box-hvt">
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
						<div id="box01" className="block cvo-block box-contact">
							{' '}
							<div id="prof">
								<div className="prof-left">
									<div className="ic">
										<div className="icf1">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-birthday" cvo-placeholder="生年" contentEditable="true">
												19/05/1992
											</span>
										</div>
									</div>
									<div className="ic">
										<div className="icf2">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-sex" cvo-placeholder="性別" contentEditable="true">
												女性
											</span>
										</div>
									</div>
									<div className="ic">
										<div className="icf3">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-phone" cvo-placeholder="電話番号" contentEditable="true" />
										</div>
									</div>
								</div>
								<div className="prof-right">
									<div className="ic-email w-45">
										<div className="icf4">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-email" cvo-placeholder="Eメール" contentEditable="true">
												test@gmail.com
											</span>
										</div>
									</div>
									<div className="ic-address w-45">
										<div className="icf5">
											<i className="fa"></i>
										</div>
										<div className="icoweb">
											<span id="cv-profile-address" cvo-placeholder="住所" contentEditable="true" />
										</div>
									</div>
								</div>
								<div className="clr" />
							</div>
						</div>
					</div>
					<div className="all">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle" style={{}}>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												業務目標
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											価格鑑定の専門家になります。
											<br />
											専門的な環境で働くことができて、会社が市場でその名前を確認するために大きな一歩を踏み出すのを助けます。
											同時に、当社で最高の昇進の機会を捉えることが可能です。
											<br />{' '}
										</span>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												スキル
											</div>
										</h3>
										<div className="exp content-edit skill">
											<div className="ctbx">
												<div className="fieldgroup_controls">
													<div className="clone">
														<i className="fa fa-plus" /> 追加
													</div>
													<div className="edit js-edit-content"> 編集</div>
													<div className="remove">
														<i className="fa fa-minus" /> 削除{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													オフィスコンピューティングのスキル
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
														<i className="fa fa-minus" /> 削除{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													英語スキル
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
														<i className="fa fa-minus" /> 削除{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													分析および評価する能力
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
														<i className="fa fa-minus" /> 削除{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													チーム内で高度に独立して効果的に作業する能力
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
														<i className="fa fa-minus" /> 削除{' '}
													</div>
												</div>
												<p className="skill-name" cv-form-field="true" contentEditable="true">
													環境に素早く適応
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												受賞
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											青少年連合の活動の優秀なメンバー
											<br />
											2018年第4四半期のポジティブ従業員
											<br />
											ホーチミン市ボランティアクラブから報酬
											<br />{' '}
										</span>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												資格
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											会計証明書
											<br />
											基本情報学証明書
											<br />
											英語証明書B1
											<br />{' '}
										</span>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												趣味
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											旅行
											<br />
											本を読む。
											<br />{' '}
										</span>
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
										<h3>
											<div id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												連絡先
											</div>
										</h3>
										<span className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											グエンヴァンアン氏
											<br />
											ホーチミン経済大学鑑定課長
											<br />
											電話番号：0357 158 394
											<br />{' '}
										</span>
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											学歴
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
													ホーチミン市経済大学
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													専攻：価格鑑定
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												評価：優
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
										<div id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											職歴
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
													Colliers CV365Vietnam会社
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													職位：価格鑑定
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- 割り当てられた文書に従って財務評価を行う
												<br />- 住宅ローン相場
												<br />- データシステム設定のための情報収集
												<br />- 他の仕事を実行する：印刷、毎週の報告、毎月の報告
												<br />{' '}
											</div>
										</div>
										<div id="exp2" className="ctbx experience">
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
													CV365価格鑑定株式会社
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													職位：インターンシップ
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- 割り当てられた不動産記録に対する価格評価の実施
												<br />- 鑑定評価書の作成
												<br />- 事務機器、自動車などの査定
												<br />{' '}
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
													- 学校のクラブが主催する貧しい子供たちのための秋中旬のオーガナイズに参加する
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													- 貧しい子供たちを助けるために高地へのボランティア旅行に定期的に参加する
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- 当社のチームビルディング活動の組織委員会に参加する。{' '}
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
													学校の科学研究に参加
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													プロジェクト名：Hung Ha支払株式会社における経費管理会計
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- プロジェクト「2018年の故郷のお正月」・場所：ハノイ市ソンタイ県
												<br />
												役割：プロジェクトの収入と支出を管理し、パートナー連絡して協力すること。
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
					</div>
					<div className="clr" />
					<div id="footer">
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
