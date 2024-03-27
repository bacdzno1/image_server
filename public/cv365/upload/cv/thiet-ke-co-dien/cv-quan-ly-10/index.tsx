
interface Props {
	html: any
	in4CV: any
	in4user: any
	dataCvMau: any
	lang: any
	setHtml: any
	setshowmodal: any
	showmodal: any
	setshowZoomCV: any
	editImg: any
	setEditImg: any
}

const CV: React.FC<Props> = ({ html, in4CV, in4user, dataCvMau, lang, setHtml, setshowmodal, showmodal, setshowZoomCV, editImg, setEditImg }) => {
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
				<div id="cv-title" className="non-printable" contentEditable="true" cvo-validatable="true" cvo-placeholder="CVタイトル">
					CV quản lý
				</div>
				<div id="form-cv">
					<div id="cv-top">
						<div id="cvo-profile">
							<div className="box-01">
								<div id="box01" className="block cvo-block box-contact">
									{' '}
									<div id="prof">
										<div className="ic">
											<div className="icf1">
												<i className="fa"></i>
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
										<div className="ic">
											<div className="icf4">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-email" cvo-placeholder="Eメール" contentEditable="true">
													test@gmail.com
												</span>
											</div>
										</div>
										<div className="ic">
											<div className="icf5">
												<i className="fa"></i>
											</div>
											<div className="icoweb">
												<span id="cv-profile-address" cvo-placeholder="住所" contentEditable="true" />
											</div>
										</div>
										<div className="clr" />
									</div>
								</div>
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
					</div>
					<div id="cv-main">
						<div id="cv-right">
							<div className="ir">
								<div id="sortable" className="ui-sortable">
									<div id="box01" className="block cvo-block box-contact ui-sortable-handle"></div>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												業務目標
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											管理と管理の分野で専門家になることを楽しみにして、さまざまな分野で管理することができます。
											<br />
											多くの競合他社を克服し、市場で強い競争力を持つ会社の名前に貢献します。
											<br />{' '}
										</div>
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												スキル
											</span>
										</h3>
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
													良い戦略を立てる能力
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
													他人をやる気にさせる能力
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
													プロの働き方
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
													柔軟なコミュニケーション
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
													優れた英語力
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
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												受賞
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											商業大学の経営学部で開催された2008年度エクセレントマネージャーコンテストの3位
											<br />
											Rolling Door Company CV365での個性的なクリエイティビティ
											<br />{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												資格
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											会計証明書
											<br />
											基本情報学証明書
											<br />
											英語証明書B1
											<br />{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												趣味
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											- 経営管理証明書
											<br />- コミュニケーション英語証明書
											<br />
											-レベルBの情報学証明書
											<br />{' '}
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
										<h3>
											<span id="cv-boxtitle" cv-form-field="true" contentEditable="true" cvo-placeholder="タイトル" className="box-title">
												連絡先
											</span>
										</h3>
										<div className="box-content err_cv_content" cvo-placeholder="内容" contentEditable="true">
											トランダンニン氏
											<br />
											CV365ローリングドア会社のマーケティングディレクター
											<br />
											電話番号：0125 479 654
											<br />{' '}
										</div>
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											学歴
										</span>
									</p>
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
													ハノイ商業大学
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													専攻：経営学
												</span>
											</p>
											<div className="exp-content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												卒業評価：優{' '}
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											職歴
										</span>
									</p>
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
													CV365有限会社
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													役職：営業担当、マーケティング部長
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- 管理チーム、市場を拡大するためのマーケティングプログラムの設計と維持を担当。
												<br />- マーケティング戦略を開発します。広告、顧客向けのブランドプロモーションの実行。
												<br />- マーケティング部門の代表
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
													ローリングドアCV365会社
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													役職：副事業部長
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- マーケティングプランを担当ローリングドアマーケティングプランを担当し、17％の収益向上を実現する。
												<br />-
												ビジネスプログラムを実行し、100人以上の会社の代理人が収入を増やすのを助け、同時に営業担当者に各主題に適したツールを提供する。
												<br />{' '}
											</div>
										</div>
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
													CV365動物飼料製造会社
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													役職：社長のアシスタント
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- ベトナム市場での自社製品のブランドを特定し、事業運営から1年以内に売上を10％増加させる。
												<br />- 効果的な販売計画を改善するためのアイデアの提供
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											活動
										</span>
									</p>
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
													- 大企業主催のビジネスセミナーに定期的に参加する
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													- 大学で4年連続の自発的献血クラブに参加&nbsp;
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												- 商業大学で良いビジネスをしている学生チームの管理者{' '}
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											参加した事業
										</span>
									</p>
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
													Rolling Door Company CV365におけるローリングドア製品のプロジェクト
												</div>
											</h3>
											<p className="h3">
												<span className="exp-subtitle" cvo-placeholder="職位" contentEditable="true">
													役割：創造的なアイデアを生み出し、プロジェクトの運営方向を実行する
												</span>
											</p>
											<div className="exp-content err_cv_content" contentEditable="true" cvo-placeholder="職歴の詳細内容">
												目的：拡大する市場にアクセスするための会社の能力を向上させ、海外からのより多くの注文を引き付けるために国際的なローリングドアをもたらすこと。
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
									<p className="head">
										<span id="cvo-experience-blocktitle" className="block-title" cvo-placeholder="大きい項目タイトル" contentEditable="true">
											追加情報
										</span>
									</p>
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
					<div className="footer">
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
