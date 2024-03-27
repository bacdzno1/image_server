import React, { useEffect, useState } from 'react'
import styles from '@/components/taocv/tao_cv.module.css'
import Sidebar_right from '@/components/taocv/sidebar_right'
import { uploadAvatarCV } from '@/pages/api/cv'
import { access_token, unixTimestampToDateString } from '@/utils/convert'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import { handleHide } from '@/components/taocv/functions'
import Trinhdohocvan from './box/trinhdohocvan/trinhdohocvan'
import Kinhnghiem from './box/kinhnghiem/kinhnghiem'
import More_kinhnghiem from './box/more_kinhnghiem/more_kinhnghiem'
import Default_more_kinhnghiem from './box/kinhnghiem/default_more_kinhnghiem'
import Hoatdong from './box/hoatdong/hoatdong'
import Du_an_tham_gia from './box/du_an/du_an_tham_gia'
import Thong_tin_them from './box/thong_tin_them/thong_tin_them'
import Kynang from './box/kynang/kynang'
type Props = {}

const Index = ({
	data,
	in4CV,
	html,
	sethtml,
	updateField,
	in4user,
	showmodal,
	setshowmodal,
	dataCvMau,
	setshowZoomCV,
	lang,
	checkthaotac,
	setcheckthaotac,
}: any) => {
	const [zoom, setzoom] = useState(1)
	const [title, settitle] = useState('')
	const [title_mt, settitle_mt] = useState('')
	const [img, setimg] = useState<any>('')
	const [gioitinh, setgioitinh] = useState<any>(html?.menu[0]?.content?.content?.content?.sex)
	const [muctieu, setmuctieu] = useState('')
	// check người dùng đã nhập nội dung chưa
	const handleChangestatusMenu = (menuIndex: any) => {
		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex]['status'] = 1

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	// check người dùng đã nhập nội dung chưa

	const handleChangestatusEx = (ExIndex: any) => {
		const updatedEx = [...html.experiences]
		if (updatedEx[ExIndex]) {
			updatedEx[ExIndex]['status'] = 1

			// Cập nhật trạng thái với Ex mới
			sethtml({
				...html,
				experiences: updatedEx,
			})
		}
	}
	// đổi thông tin titleMenu
	const handleChangetitle = (event: any, menuIndex: any, fieldName: any) => {
		const newName = event.target.textContent

		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content[fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	const langcv = Cookies.get('langcv')
	// Cập nhật avatar

	const handleMuctieuChange = (event: any, menuIndex: any) => {
		const newMuctieu = event
		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content = newMuctieu

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	// đổi thông tin infor
	const handleInforChange = (event: any, menuIndex: any, fieldName: any) => {
		const newBirthday = event.target.textContent

		// Sao chép dữ liệu menu và cập nhật giá trị birthday trong menu tại index được truyền
		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content.content[fieldName] = newBirthday

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	// đổi thông tin infor
	const handleInforChangedefault = (event: any, menuIndex: any, fieldName: any) => {
		const newBirthday = event

		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content.content[fieldName] = newBirthday

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	const handleInforChangenumber = (event: any, menuIndex: any, fieldName: any) => {
		const newBirthday = event.target.textContent
		const updatedMenu = [...html.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content.content[fieldName] = newBirthday

			// Cập nhật trạng thái với menu mới
			sethtml({
				...html,
				menu: updatedMenu,
			})
		}
	}
	useEffect(() => {
		if (access_token) {
			setTimeout(() => {
				handleInforChangedefault(unixTimestampToDateString(in4user?.thong_tin?.use_birth_day), 0, 'birthday')
				handleInforChangedefault(in4user?.thong_tin?.use_phone, 0, 'phone')
				handleInforChangedefault(in4user?.thong_tin?.use_address, 0, 'address')
				handleInforChangedefault(in4user?.thong_tin?.use_email_lienhe, 0, 'email')
				updateField('position', in4user?.thong_tin?.cv_title)
				updateField('name', in4user?.thong_tin?.use_first_name)
			}, 100)
		}
		handleChangestatusMenu(0)
	}, [lang])
	const [dienthoai, setdienthoai] = useState('')
	const [ngaysinh, setngaysinh] = useState<any>(
		(in4user?.thong_tin?.use_birth_day && unixTimestampToDateString(in4user?.thong_tin?.use_birth_day)) ||
			html?.menu[0]?.content?.content?.content?.birthday
	)
	const [email, setemail] = useState('')
	const [address, setaddress] = useState('')
	let box02: any = null
	if (typeof document !== 'undefined') {
		box02 = document.getElementById('box02')
	}
	const laf = box02?.querySelector('.box-content')
	useEffect(() => {
		handleMuctieuChange(laf?.innerHTML, 1)
	}, [laf?.innerHTML])

	const handleSkillsChange = (menuIndex: any, fieldName: any, data: any) => {
		if (typeof document !== 'undefined') {
			const updatedMenu = [...html.menu]
			if (updatedMenu[menuIndex]) {
				updatedMenu[menuIndex].content[fieldName] = data

				// Cập nhật trạng thái với menu mới
				sethtml({
					...html,
					menu: updatedMenu,
				})
			}
		}
	}
	const [change, setChange] = useState(false)
	//morekn
	useEffect(() => {
		setTimeout(() => setChange(!change), 1000)
		if (typeof document !== 'undefined') {
			const getBoxData = (boxNumber: any) => {
				const box = document.getElementById(`box0${boxNumber}`)
				const content = box?.querySelector('.ct_bo')?.querySelector('.box-content')?.innerHTML
				return content
			}

			const checkAndHandleMenuChange = (menuIndex: any, contentToCheck: any) => {
				const in4CVData = in4CV?.item_ur
					? JSON?.parse(in4CV?.item_ur?.html)
					: JSON?.parse(
							in4CV[lang === 'vi' ? 'html_vi' : lang === 'en' ? 'html_en' : lang === 'jp' ? 'html_jp' : lang === 'cn' ? 'html_cn' : 'html_kr']
					  )

				if (contentToCheck !== in4CVData.menu[menuIndex].content.content) {
					handleChangestatusMenu(menuIndex)
				}
			}

			checkAndHandleMenuChange(3, getBoxData(4))
			checkAndHandleMenuChange(4, getBoxData(5))
			checkAndHandleMenuChange(5, getBoxData(6))
			checkAndHandleMenuChange(6, getBoxData(7))
		}
	}, [change])
	useEffect(() => {
		setTimeout(() => setChange(!change), 1000)
		if (typeof document !== 'undefined') {
			const getBoxData = (boxNumber: any) => {
				const box = document.getElementById(`box0${boxNumber}`)
				const content = box?.querySelector('.ct_bo')?.querySelector('.box-content')?.innerHTML
				return content
			}

			const checkAndHandleMenuChange = (menuIndex: any, contentToCheck: any) => {
				const in4CVData = in4CV?.item_ur
					? JSON?.parse(in4CV?.item_ur?.html)
					: JSON?.parse(
							in4CV[lang === 'vi' ? 'html_vi' : lang === 'en' ? 'html_en' : lang === 'jp' ? 'html_jp' : lang === 'cn' ? 'html_cn' : 'html_kr']
					  )

				if (contentToCheck !== in4CVData.menu[menuIndex].content.content) {
					handleChangestatusMenu(menuIndex)
				}
			}

			checkAndHandleMenuChange(3, getBoxData(4))
			checkAndHandleMenuChange(4, getBoxData(5))
			checkAndHandleMenuChange(5, getBoxData(6))
			checkAndHandleMenuChange(6, getBoxData(7))
		}
	}, [change])
	const router = useRouter()
	const [base64, setbase64] = useState<any>()
	const handleImageUpload = async () => {
		const res = await uploadAvatarCV(base64, access_token)
		setimg(res?.data?.img)
		updateField('avatar', res?.data?.img)
	}
	let imgsave: any = ''
	if (typeof localStorage !== 'undefined') {
		imgsave = localStorage?.getItem('imgsave')
	}
	useEffect(() => {
		setbase64(imgsave)
		if (base64) {
			handleImageUpload()
			if (typeof localStorage !== 'undefined') {
				localStorage.removeItem('imgsave')
			}
		}
	}, [base64, img, imgsave])
	return (
		<div className="container_taocv_parent">
			<div className="container_taocv">
				<div className="container_content_taocv">
					<div className="box_content_taocv">
						<div className="page_cv " style={{ transform: 'unset', zoom: zoom }}>
							<input type="hidden" id="cvid" name="cvid" />
							<input type="hidden" id="issave" name="issave" defaultValue={0} />
							<div id="page-cv">
								{!showmodal ? (
									<div
										onClick={() => settitle(' ')}
										id="cv-title"
										className="non-printable"
										contentEditable="true"
										suppressContentEditableWarning
										cvo-validatable="true"
										cvo-placeholder={
											lang === 'vi' ? 'Tiêu đề CV' : lang === 'en' ? 'Title' : lang === 'jp' ? 'タイトル ' : lang === 'cn' ? '标题 ' : '제목 '
										}
										onInput={(e: any) => {
											updateField('cv_title', e.target.textContent)
										}}
									>
										{title || html?.cv_title}
									</div>
								) : (
									''
								)}

								<div id="form-cv">
									<div className="cv_page height_page" data-page={1}>
										<div id="cv-top">
											<div id="cvo-profile">
												<div className="box-01">
													<div className="anh">
														<div id="cvo-profile-avatar-wraper">
															<div className="wimg">
																<img
																	id="cvo-profile-avatar"
																	cvo-form-field="true"
																	src={img ? img : in4CV?.item_ur?.linkImg || '/images/no_avatar.jpg'}
																/>
															</div>
															<div className="fake_img" />
														</div>
													</div>
													<div id="box-hvt">
														<div id="box01" className="block cvo-block box-contact">
															{' '}
															<div id="prof">
																<div className="ic1">
																	<div className="icf">
																		<i className="fa"></i>
																	</div>

																	<div className="icoweb">
																		<span
																			id="cv-profile-birthday err_cv_content"
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Ngày sinh'
																					: lang === 'en'
																					? 'Birthday'
																					: lang === 'jp'
																					? '生年'
																					: lang === 'cn'
																					? '生日'
																					: '년생'
																			}
																			contentEditable="true"
																			suppressContentEditableWarning
																			// onClick={() => {
																			// 	if (!in4CV?.item_ur?.html) {
																			// 		setngaysinh(html?.content?.content?.content?.birthday)
																			// 	}
																			// }}
																			onInput={(e: any) => handleInforChange(e, 0, 'birthday')}
																		>
																			{ngaysinh}
																		</span>
																	</div>
																</div>
																<div className="ic2">
																	<div className="icf">
																		<i className="fa"></i>
																	</div>
																	<div className="icoweb">
																		<span
																			onInput={(e: any) => handleInforChange(e, 0, 'sex')}
																			id="cv-profile-sex"
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Giới tính'
																					: lang === 'en'
																					? 'Gender'
																					: lang === 'jp'
																					? '性別'
																					: lang === 'cn'
																					? '性别'
																					: '성별  '
																			}
																			contentEditable="true"
																			suppressContentEditableWarning
																			onClick={() => {
																				if (!in4CV?.item_ur?.html) {
																					setgioitinh('')
																				} else {
																					setgioitinh(
																						in4CV?.item_ur?.html && JSON?.parse(in4CV?.item_ur?.html)?.menu[0]?.content?.content?.content?.psexhone
																					)
																				}
																			}}
																		>
																			{gioitinh}
																		</span>
																	</div>
																</div>
																<div className="ic3">
																	<div className="icf">
																		<i className="fa"></i>
																	</div>
																	<div className="icoweb">
																		<span
																			id="cv-profile-phone"
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Điện thoại'
																					: lang === 'en'
																					? 'Telephone number'
																					: lang === 'jp'
																					? '電話番号'
																					: lang === 'cn'
																					? '电话号码'
																					: '전화번호 '
																			}
																			contentEditable="true"
																			suppressContentEditableWarning
																			onInput={(e: any) => {
																				handleInforChangenumber(e, 0, 'phone'), setdienthoai(' ')
																			}}
																			data-previous-value=""
																			onClick={() => {
																				if (!in4CV?.item_ur?.html) {
																					setdienthoai('')
																				}
																			}}
																		>
																			{in4user?.thong_tin?.use_phone ||
																				(in4CV?.item_ur?.html && JSON?.parse(in4CV?.item_ur?.html)?.menu[0]?.content?.content?.content?.phone)}
																		</span>
																	</div>
																</div>
																<div className="ic4">
																	<div className="icf">
																		<i className="fa"></i>
																	</div>
																	<div className="icoweb">
																		<span
																			id="cv-profile-email"
																			contentEditable="true"
																			suppressContentEditableWarning
																			onClick={() => {
																				if (!in4CV?.item_ur?.html) {
																					setemail(' ')
																				}
																			}}
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Email'
																					: lang === 'en'
																					? 'Email'
																					: lang === 'jp'
																					? 'Eメール'
																					: lang === 'cn'
																					? '邮箱'
																					: '메일 '
																			}
																			onInput={(e: any) => handleInforChange(e, 0, 'email')}
																		>
																			{email || in4user?.thong_tin?.use_email_lienhe || html?.menu[0]?.content?.content?.content?.email}
																		</span>
																	</div>
																</div>

																<div className="ic5">
																	<div className="icf">
																		<i className="fa"></i>
																	</div>
																	<div className="icoweb">
																		<span
																			id="cv-profile-address"
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Địa chỉ'
																					: lang === 'en'
																					? 'Address'
																					: lang === 'jp'
																					? '住所'
																					: lang === 'cn'
																					? '地址'
																					: '주소'
																			}
																			contentEditable="true"
																			suppressContentEditableWarning
																			onClick={() => {
																				if (!in4CV?.item_ur?.html) {
																					setaddress(' ')
																				}
																			}}
																			onInput={(e: any) => handleInforChange(e, 0, 'address')}
																		>
																			{in4user?.thong_tin?.use_address ||
																				(in4CV?.item_ur?.html && JSON?.parse(in4CV?.item_ur?.html)?.menu[0]?.content?.content?.content?.address)}
																		</span>
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
																<span
																	id="cv-profile-fullname"
																	cvo-placeholder={`${
																		lang === 'vi'
																			? 'Họ tên'
																			: lang === 'en'
																			? 'Full name'
																			: lang === 'jp'
																			? '受取人の名前'
																			: lang === 'cn'
																			? '全名 '
																			: '성명'
																	}`}
																	contentEditable="true"
																	suppressContentEditableWarning
																	onInput={(e: any) => updateField('name', e.target.textContent)}
																	data-edit={1}
																>
																	{in4user?.thong_tin?.use_first_name}
																</span>
															</h1>
															<div className="clr" />
															<h2>
																<span
																	id="cv-profile-job"
																	contentEditable="true"
																	suppressContentEditableWarning
																	cvo-placeholder={`${
																		in4user?.thong_tin?.cv_title || lang === 'vi'
																			? 'Vị trí công việc bạn muốn ứng tuyển'
																			: lang === 'en'
																			? 'Apply for position'
																			: lang === 'jp'
																			? '応募する：'
																			: lang === 'cn'
																			? '申请职位： '
																			: '직위 신청 : '
																	}`}
																	onInput={(e: any) => updateField('position', e.target.textContent)}
																/>
															</h2>
															<div className="clr" />
														</div>
													</div>
													<div className="wrap_info"></div>
												</div>
											</div>
										</div>
										<div id="imageEditorWraper" style={{ display: 'none' }}>
											<div className="container">
												<h3>Chỉnh sửa ảnh đại diện</h3>
												<div className="editor-col-left">
													<h4>Ảnh gốc</h4>
													<div className="imageEditor" style={{ display: 'none' }}>
														<img id="image" src="" />
													</div>
													<div className="editorChooseImage">
														<label htmlFor="inputImage" className="btn-choose-image" title="Upload image file">
															<input type="file" className="sr-only" id="inputImage" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
															<i className="fa fa-picture-o" />
															<br />
															Click chọn ảnh để tải lên!
														</label>
													</div>
													<div className="image-controls" style={{ display: 'none' }}>
														<div className="image-control-group">
															<button className="image-control-btn btn-zoom-in-image">
																<span className="fa fa-search-plus" />
															</button>
															<button className="image-control-btn btn-zoom-out-image">
																<span className="fa fa-search-minus" />
															</button>
														</div>
														<div className="image-control-group">
															<button className="image-control-btn btn-rotate-left">
																<span className="fa fa-rotate-left" />
															</button>
															<button className="image-control-btn btn-rotate-right">
																<span className="fa fa-rotate-right" />
															</button>
														</div>
													</div>
													<div
														className="tipCompress"
														style={{
															fontSize: 14,
															color: 'red',
															marginTop: 5,
															marginLeft: 20,
															textAlign: 'left',
														}}
													>
														Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng giảm dung lượng ảnh trước khi tải lên.
													</div>
													<div className="loadingShow" style={{ display: 'none' }}>
														<i className="fa fa-spinner fa-spin" />
														<br />
														<br />
														<span className="loadingMessage">Đang tải ảnh lên ...</span>
													</div>
												</div>
												<div className="editor-col-right">
													<h4>Ảnh hiển thị trên CV</h4>
													<div className="imageEditorControls">
														<div className="img-edit-preview" style={{ border: '1px solid #efefef' }}>
															<img src="http://43.239.223.249:3009/images/no_avatar.jpg" alt="ảnh đại diện" />
														</div>
														<div className="edit-image-btns" style={{ display: 'none' }}>
															<label
																htmlFor="inputImage1"
																// type="button"
																className="btn-change-image"
															>
																<input type="file" className="sr-only" id="inputImage1" name="file" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff" />
																Đổi ảnh
															</label>
															<button type="button" className="btn-remove-image">
																Xóa ảnh
															</button>
															<br />
														</div>
														<div onClick={() => router.push(router.asPath)}>
															<button type="button" className="btn-save-image disabled">
																Xong
															</button>
														</div>
														<div>
															<a style={{ cursor: 'pointer' }} className="btn-close-image-editor" title="Đóng trình chỉnh sửa (Không lưu thay đổi)">
																Đóng lại (Không lưu)
															</a>
														</div>
														<form action="" method="post" id="saveEditedAvatar" style={{ display: 'none' }}>
															<input type="hidden" name="cropx" id="dataX" defaultValue={0} />
															<input type="hidden" name="cropy" id="dataY" defaultValue={0} />
															<input type="hidden" name="cropw" id="dataWidth" defaultValue={280} />
															<input type="hidden" name="croph" id="dataHeight" defaultValue={280} />
															<input type="hidden" name="rotate" id="dataRotate" defaultValue={0} />
															<input type="hidden" name="tile" id="dataTile" defaultValue={1} />
															<input type="hidden" name="cv_alias" id="cv_alias" defaultValue="CV Khu chế xuất - Khu công nghiệp 03" />
														</form>
													</div>
												</div>
											</div>
										</div>
										<div className="all">
											<div id="cv-main" style={{}}>
												<div id="cv-right">
													<div className="ir">
														<div id="sortable" className="connectedSortable sortable ui-sortable">
															<div onClick={() => setcheckthaotac('box01')} id="box01" className="block cvo-block box-contact ui-sortable-handle">
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
																	<div onClick={() => handleHide('box01')} title="Ẩn mục này" className="hide">
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
																	<div onClick={() => handleHide('box01')} title="Ẩn mục này" className="hide">
																		<i className="fa fa-minus" /> Ẩn
																	</div>
																</div>
															</div>

															<div onClick={() => setcheckthaotac('box02')} id="box02" className="block cvo-block ui-sortable-handle">
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
																	<div onClick={() => handleHide('box02')} title="Ẩn mục này" className="hide">
																		<i className="fa fa-minus" /> Ẩn
																	</div>
																</div>{' '}
																<div className="cum">
																	<div className="cumicc2" />
																	<div
																		id="cv-boxtitle"
																		cv-form-field="true"
																		contentEditable="true"
																		suppressContentEditableWarning
																		cvo-placeholder={
																			lang === 'vi'
																				? 'Tiêu đề'
																				: lang === 'en'
																				? 'Title'
																				: lang === 'jp'
																				? 'タイトル '
																				: lang === 'cn'
																				? '标题 '
																				: '제목 '
																		}
																		className="box-title"
																		onClick={() => settitle_mt(html?.menu[1]?.content?.title)}
																		onInput={(e: any) => {
																			handleChangetitle(e, 1, 'title')
																		}}
																	>
																		{title_mt || html?.menu[1]?.content?.title}
																	</div>
																</div>
																<div className="ct_bo">
																	<div className="ct_box">
																		<div
																			className="box-content err_cv_content"
																			cvo-placeholder={
																				lang === 'vi'
																					? 'Nội dung'
																					: lang === 'en'
																					? 'Content'
																					: lang === 'jp'
																					? '内容'
																					: lang === 'cn'
																					? '内容 '
																					: '내용 '
																			}
																			contentEditable="true"
																			suppressContentEditableWarning
																			data-edit={1}
																			onClick={() => {
																				if (!in4CV?.item_ur?.html) {
																					setmuctieu(' ')
																				}
																			}}
																			onInput={(e: any) => {
																				handleChangestatusMenu(1)
																			}}
																			dangerouslySetInnerHTML={{
																				__html:
																					muctieu ||
																					(in4CV?.item_ur?.html && JSON?.parse(in4CV?.item_ur?.html)?.menu[1]?.content?.content) ||
																					html?.menu[1]?.content?.content,
																			}}
																		></div>
																	</div>
																</div>
															</div>

															<Kynang
																handleChangestatusMenu={handleChangestatusMenu}
																setcheckthaotac={setcheckthaotac}
																lang={lang}
																data={data}
																html={html?.menu[2]}
																htmldefault={html}
																updateField={updateField}
																sethtml={sethtml}
															/>
														</div>
													</div>
												</div>
												<div className="clr" />
											</div>
											<div id="cv-content" style={{}}>
												<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
													<Trinhdohocvan
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														data={data}
														html={html?.experiences}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
													<Kinhnghiem
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														html={html?.experiences}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
												</div>
											</div>
											<div className="clr"></div>
										</div>
										<div className="watermark">© Timviec365.vn</div>
									</div>
									<div className="cv_page page_more height_page" data-page={2}>
										<div className="all" style={{ paddingTop: 0 }}>
											<More_kinhnghiem
												handleChangestatusMenu={handleChangestatusMenu}
												setcheckthaotac={setcheckthaotac}
												data={data}
												lang={lang}
												html={html?.menu}
												htmldefault={html}
												updateField={updateField}
												sethtml={sethtml}
											/>
											<div id="cv-content" style={{}}>
												<div className="ir connectedSortable sort_block ui-sortable" id="sort_block">
													<Default_more_kinhnghiem
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														html={html?.experiences}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
													<Hoatdong
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														html={html?.experiences}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
													<Du_an_tham_gia
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														html={html?.experiences}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
													<Thong_tin_them
														handleChangestatusEx={handleChangestatusEx}
														setcheckthaotac={setcheckthaotac}
														lang={lang}
														htmldefault={html}
														updateField={updateField}
														sethtml={sethtml}
													/>
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
							</div>{' '}
						</div>
					</div>
				</div>
				<Sidebar_right html={html} sethtml={sethtml} in4CV={in4CV} dataCvMau={dataCvMau} setshowZoomCV={setshowZoomCV} checkthaotac={checkthaotac} />
			</div>
			<div className="container_sidebar_rigth">
				<div className={`container_sidebar_rigth cursor_pt`}>
					{!showmodal ? (
						<div className={`box_range_zoom`}>
							<img src="http://43.239.223.249:3009/images/plus_black.svg" className={`icon_cong_zoom img33 cursor_pt`} alt="Cộng zoom" />
							<div className={`box_input_range `}>
								<input
									className={`input_range zoom_web d_none`}
									type="range"
									min={50}
									max={150}
									defaultValue={100}
									onChange={(e: any) => setzoom(e.target.value / 100)}
								/>
							</div>
							<p className={`txt_input_range `}>{zoom * 100}%</p>
							<img src="http://43.239.223.249:3009/images/minus_black.svg" className={`icon_tru_zoom img33 cursor_pt`} alt="Trừ zoom" />
						</div>
					) : (
						<div style={{ color: '#fff' }}>&nbsp;2</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Index
