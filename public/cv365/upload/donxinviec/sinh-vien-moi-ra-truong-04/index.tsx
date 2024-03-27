import { unixTimestampToDateString } from '@/utils/convert'
import React, { useEffect, useState } from 'react'

type Props = {}

const Container_don = ({ data, in4user, html, sethtml, in4DonSsr, dataDonMau }: any) => {
	const [showChiase, setshowChiase] = useState<boolean>(false)
	const [showxemtruoc, setshowxemtruoc] = useState<boolean>(false)
	const [img, setimg] = useState<string>('')
	const updateField = (field: any, value: any) => {
		sethtml((prevData: any) => ({
			...prevData,
			[field]: value,
		}))
	}
	const date = new Date()
	const year = date.getFullYear()
	const day = date.getDate()
	const month = date.getMonth()
	const [content, setcontent] = useState('')
	useEffect(() => {
		if (!in4DonSsr?.item_ur?.html) {
			updateField('user_to', '')
			updateField('ngay', day)
			updateField('thang', month + 1)
			updateField('nam', year)
			updateField('content', '')
			updateField('lt_title', '')
			updateField('profile', { ...html.profile, name: in4user?.thong_tin?.use_first_name })
			updateField('birthday', {
				...html.profile,
				birthday: unixTimestampToDateString(in4user?.thong_tin?.use_birth_day),
			})
			updateField('address', {
				...html.profile,
				address: in4user?.thong_tin?.use_address,
			})
			updateField('user_don', in4user?.thong_tin?.use_first_name)
		}
	}, [data?.lang])
	let box: any = ''
	if (typeof document !== 'undefined') {
		box = document.getElementById('lto-content')
	}
	useEffect(() => {
		updateField('content', box?.innerHTML)
	}, [box?.innerHTML])
	return (
		<div className="ctr">
			<div id="page-letter">
				<div
					id="letter-title"
					className="non-printable"
					contentEditable="true"
					suppressContentEditableWarning
					cvo-placeholder={
						data.lang === 'vi'
							? 'Tiêu đề đơn'
							: data.lang === 'en'
							? 'Title'
							: data.lang === 'jp'
							? 'タイトル '
							: data.lang === 'cn'
							? '标题 '
							: '제목 '
					}
					onInput={(e: any) => updateField('lt_title', e.target.textContent)}
				/>
				<div id="form-letter">
					<div id="main" />
					{data.lang === 'vi' ? (
						<div id="lt-top">
							<p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
							<p>Độc lập - Tự do - Hạnh phúc</p>
							<p>......o0o......</p> <h1>Đơn ứng tuyển</h1>
						</div>
					) : data.lang === 'en' ? (
						<div id="lt-top">
							<p>SOCIALIST REPUBLIC OF VIETNAM</p>
							<p>Independence – Freedom – Happiness</p>
							<p>......o0o......</p> <h1>COVER LETTER</h1>
						</div>
					) : data.lang === 'jp' ? (
						<div id="lt-top">
							<p>ベトナム社会主義共和国</p>
							<p>独立―自由―幸福</p>
							<p>......o0o......</p> <h1>就職申込書</h1>
						</div>
					) : data.lang === 'cn' ? (
						<div id="lt-top">
							<p>越南社会主义共和国</p>
							<p>独立 – 自由 - 幸福</p>
							<p>......o0o......</p> <h1>求职申请书</h1>
						</div>
					) : (
						<div id="lt-top">
							<p>베트남 사회주의 공화국</p>
							<p>독립 - 자유 – 행복</p>
							<p>......o0o......</p> <h1>고용 신청서</h1>
						</div>
					)}

					<div id="lt-content">
						<div className="ir">
							<div className="lt-box">
								<p className="text-top">
									<span>
										{data.lang === 'vi'
											? 'Kính gửi:'
											: data.lang === 'en'
											? 'To'
											: data.lang === 'jp'
											? '御中'
											: data.lang === 'cn'
											? '敬致'
											: '귀중'}
									</span>{' '}
									<span
										id="lto-user-to"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Tên người nhận'
												: data.lang === 'en'
												? 'To'
												: data.lang === 'jp'
												? 'ホスト名'
												: data.lang === 'cn'
												? '收件人的姓名'
												: '수신자 이름'
										}
										onInput={(e: any) => updateField('user_to', e.target.textContent)}
										contentEditable="true"
										suppressContentEditableWarning
									>
										{in4DonSsr?.item_ur && html?.user_to}
									</span>
								</p>
								<p>
									{data.lang === 'vi'
										? 'Tên tôi là: '
										: data.lang === 'en'
										? 'My name is: '
										: data.lang === 'jp'
										? '氏名：'
										: data.lang === 'cn'
										? '我是：'
										: '제 이름은'}
									<span
										id="lto-name"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Họ tên'
												: data.lang === 'en'
												? 'Full name'
												: data.lang === 'jp'
												? '受取人の名前'
												: data.lang === 'cn'
												? '全名 '
												: '성명'
										}
										onInput={(e: any) =>
											updateField('profile', { ...html.profile, name: e.target.textContent })
										}
										contentEditable="true"
										suppressContentEditableWarning
									>
										{in4user?.thong_tin?.use_first_name}&nbsp;
									</span>
								</p>
								<p>
									{data.lang === 'vi'
										? 'Sinh năm: '
										: data.lang === 'en'
										? 'Date of birth: '
										: data.lang === 'jp'
										? '生年月日：'
										: data.lang === 'cn'
										? '出生日期：'
										: '년생월일: '}
									<span
										id="lto-birthday"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Ngày sinh'
												: data.lang === 'en'
												? 'Birthday'
												: data.lang === 'jp'
												? '生年'
												: data.lang === 'cn'
												? '出生日期'
												: '년생월일'
										}
										onInput={(e: any) =>
											updateField('profile', { ...html.profile, birthday: e.target.textContent })
										}
										contentEditable="true"
										suppressContentEditableWarning
									>
										{unixTimestampToDateString(in4user?.thong_tin?.use_birth_day)}&nbsp;
									</span>
								</p>
								<p className="text-ad">
									<span>
										{data.lang === 'vi'
											? 'Địa chỉ: '
											: data.lang === 'en'
											? 'Permanent address: '
											: data.lang === 'jp'
											? '戸籍住所：'
											: data.lang === 'cn'
											? '常驻地址: '
											: '등록지: '}
									</span>
									<span
										id="lto-address"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Địa chỉ: '
												: data.lang === 'en'
												? 'Permanent address: '
												: data.lang === 'jp'
												? '戸籍住所：'
												: data.lang === 'cn'
												? '常驻地址: '
												: '등록지: '
										}
										onInput={(e: any) =>
											updateField('profile', { ...html.profile, address: e.target.textContent })
										}
										contentEditable="true"
										suppressContentEditableWarning
									>
										{in4user?.thong_tin?.use_address}
									</span>
								</p>
							</div>
							<div
								id="lto-content"
								cvo-placeholder={
									data.lang === 'vi'
										? 'Nội dung'
										: data.lang === 'en'
										? 'Content'
										: data.lang === 'jp'
										? '内容'
										: data.lang === 'cn'
										? '内容'
										: '내용'
								}
								contentEditable="true"
								suppressContentEditableWarning
								onInput={(e: any) => {
									updateField('content', e.target.textContent)
								}}
								dangerouslySetInnerHTML={{
									__html: in4DonSsr?.item_ur && in4DonSsr?.item_ur?.html?.content,
								}}
							></div>
							<div className="end_write">
								<p>
									<span
										id="lto-local"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Tỉnh/Thành phố'
												: data.lang === 'en'
												? '...'
												: data.lang === 'jp'
												? '....において'
												: data.lang === 'cn'
												? '...'
												: '...'
										}
										contentEditable="true"
										suppressContentEditableWarning
										onInput={(e: any) => updateField('local', e.target.textContent)}
									>
										{in4DonSsr?.item_ur && html?.local}
									</span>
									,{' '}
									{data.lang === 'vi'
										? 'Ngày'
										: data.lang === 'en'
										? 'date'
										: data.lang === 'jp'
										? '年'
										: data.lang === 'cn'
										? '年'
										: '년'}{' '}
									<span
										onInput={(e: any) => updateField('ngay', e.target.textContent)}
										id="lto-ngay"
										cvo-placeholder="....."
										contentEditable="true"
										suppressContentEditableWarning
									>
										{html?.ngay}
									</span>
									{data.lang === 'vi'
										? 'Tháng'
										: data.lang === 'en'
										? 'month'
										: data.lang === 'jp'
										? '月'
										: data.lang === 'cn'
										? '年'
										: '월'}{' '}
									<span
										onInput={(e: any) => updateField('thang', e.target.textContent)}
										id="lto-thang"
										cvo-placeholder="....."
										contentEditable="true"
										suppressContentEditableWarning
									>
										{html?.thang}
									</span>
									{data.lang === 'vi'
										? 'Năm'
										: data.lang === 'en'
										? 'year'
										: data.lang === 'jp'
										? '日'
										: data.lang === 'cn'
										? '日'
										: '일'}{' '}
									<span
										onInput={(e: any) => updateField('nam', e.target.textContent)}
										id="lto-nam"
										cvo-placeholder="....."
										contentEditable="true"
										suppressContentEditableWarning
									>
										{html?.nam}
									</span>
								</p>
								<p>
									<span
										id="lto-user_don"
										cvo-placeholder={
											data.lang === 'vi'
												? 'Người viết đơn'
												: data.lang === 'en'
												? 'Candidate'
												: data.lang === 'jp'
												? '応募者'
												: data.lang === 'cn'
												? '申请人'
												: '작성자'
										}
										contentEditable="true"
										suppressContentEditableWarning
										onInput={(e: any) => updateField('user_don', e.target.textContent)}
									>
										{in4user?.thong_tin?.use_first_name}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>{' '}
			{/*End giao dien mau đơn */}
			<ul className="plugin">
				<li id="bt-share">
					<a
						style={{ cursor: 'pointer' }}
						onClick={() => setshowChiase(!showChiase)}
						title="Chia sẻ"
					>
						<i className="tcv_share" />
					</a>
					<ul style={{ display: showChiase ? 'block' : 'none' }}>
						<li>
							<a
								rel="nofollow"
								href={`https://www.facebook.com/sharer/sharer.php?u=https://timviec365.vn/cv365/tao-don-xin-viec/${in4DonSsr?.alias}`}
								title="Facebook"
								target="_blank"
							>
								<i className="img ico19" />
							</a>
						</li>
						<li>
							<a
								rel="nofollow"
								href={`http://www.twitter.com/share?url=https://timviec365.vn/cv365/tao-don-xin-viec/${in4DonSsr?.alias}`}
								title="Twitter"
								target="_blank"
							>
								<i className="img ico20" />
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<div id="hoso-scroll" style={{ height: 'auto' }}>
				<div className="box-four">
					{dataDonMau?.data?.items?.map((item: any, index: number) => {
						if (index < 4)
							return (
								<div key={index} className="item">
									<div className="wa">
										<img src={item?.image} alt={item?.name} />
										<div className="info">
											<div
												className="btn-box"
												onClick={() => {
													setshowxemtruoc(true), setimg(item?.image)
												}}
												style={{ cursor: 'pointer' }}
											>
												<p>
													<a>Xem trước</a>
												</p>
												<p>
													<a href={`/cv365/tao-don-xin-viec/${item?.alias}`}>Tạo đơn</a>
												</p>
											</div>
										</div>
										<div
											id="lbx_379"
											className="modal"
											style={{ display: showxemtruoc ? 'block' : 'none' }}
										>
											<div className="mr">
												<span onClick={() => setshowxemtruoc(false)} className="close">
													×
												</span>
												<p
													style={{
														position: 'relative',
														display: 'table',
														margin: 'auto',
													}}
												>
													<a
														className="btn bg-blue"
														href={`/cv365/tao-don-xin-viec/${item?.alias}`}
													>
														TẠO MẪU ĐƠN CỦA TÔI NGAY BÂY GIỜ
													</a>
													<i
														className="img ico17"
														style={{
															width: 42,
															height: 42,
															position: 'absolute',
															right: '-50px',
															cursor: 'pointer',
														}}
													/>
												</p>
												<img className="modal-content" src={img} alt={item?.name} />
											</div>
										</div>
									</div>
								</div>
							)
					})}
				</div>
			</div>
		</div>
	)
}

export default Container_don
