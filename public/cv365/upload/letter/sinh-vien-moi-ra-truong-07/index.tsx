import { uploadAvatarCV } from '@/pages/api/cv'
import { access_token } from '@/utils/convert'
import React, { useEffect, useState } from 'react'

type Props = {}

const Container_thu = ({ data, in4user, html, sethtml, in4ThuSsr, dataThuMau }: any) => {
	const [showChiase, setshowChiase] = useState<boolean>(false)
	const [showxemtruoc, setshowxemtruoc] = useState<boolean>(false)
	const [img, setimg] = useState<string>('')
	const [img2, setimg2] = useState('')

	const handleImageUpload = async (e: any) => {
		const file: any = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = async (e: any) => {
				const base64Data: any = e.target.result
				const res = await uploadAvatarCV(base64Data, access_token)
				setimg2(res?.data?.img)
			}

			reader.readAsDataURL(file)
		}
	}
	const updateField = (field: any, value: any) => {
		sethtml((prevData: any) => ({
			...prevData,
			[field]: value,
		}))
	}
	useEffect(() => {
		if (!in4ThuSsr?.item_ur?.html) {
			updateField('user_to', '')
			updateField('content', '')
			updateField('profile', { ...html?.profile, lto_name: in4user?.thong_tin?.use_first_name })
			updateField('profile', { ...html?.profile, lto_email: in4user?.thong_tin?.use_email_lienhe })
			updateField('profile', { ...html?.profile, lto_phone: in4user?.thong_tin?.use_phone })
			updateField('profile', { ...html?.profile, lto_address: in4user?.thong_tin?.use_address })
			updateField('profile', { ...html?.profile, lto_job: in4user?.thong_tin?.cv_title })

			updateField('lto_address', {
				...html?.profile,
				address: in4user?.thong_tin?.use_address,
			})
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
		<>
			<div id="page-letter">
				<div
					id="letter-title"
					className="non-printable"
					contentEditable="true"
					suppressContentEditableWarning
					cvo-placeholder="Tiêu đề Thư"
					onInput={(e: any) => updateField('lt_title', e.target.textContent)}
				/>
				<div id="form-letter">
					<div id="content">
						{/* bg */}
						<div id="bg">
							{/* lt-top  */}
							<div id="lt-top">
								<h1>
									<span
										id="lto-name"
										cvo-placeholder="Họ tên"
										contentEditable="true"
										suppressContentEditableWarning
										onInput={(e: any) =>
											updateField('profile', {
												...html.profile,
												lto_name: e.target.textContent,
											})
										}
									>
										{in4ThuSsr?.item_ur?.html?.profile?.lto_name || in4user?.thong_tin?.use_first_name}
									</span>
								</h1>
								<h2 id="title-job">
									<span
										onInput={(e: any) =>
											updateField('profile', {
												...html.profile,
												lto_job: e.target.textContent,
											})
										}
										id="lto-job"
										cvo-placeholder="Nghề nghiệp"
										contentEditable="true"
										suppressContentEditableWarning
									>
										{in4ThuSsr?.item_ur?.html?.profile?.lto_job || in4user?.thong_tin?.cv_title}
									</span>
								</h2>
								<div id="cvo-profile-avatar-wraper">
									<img id="cvo-profile-avatar" cvo-form-field="true" src={img2} />
								</div>
								<div className="box-hvt">
									{/* lt-right  */}

									<div id="lt-right">
										<div className="ir">
											<div className="box-02">
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
														<span
															id="lto-address"
															cvo-placeholder="Địa chỉ"
															contentEditable="true"
															suppressContentEditableWarning
															onInput={(e: any) =>
																updateField('profile', {
																	...html.profile,
																	lto_address: e.target.textContent,
																})
															}
														>
															{in4ThuSsr?.item_ur?.html?.profile?.lto_address || in4user?.thong_tin?.use_address}
														</span>
													</p>
												</div>
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
														<span
															id="lto-phone"
															cvo-placeholder="Số điện thoại"
															contentEditable="true"
															suppressContentEditableWarning
															onInput={(e: any) =>
																updateField('profile', {
																	...html.profile,
																	lto_phone: e.target.textContent,
																})
															}
														>
															{in4ThuSsr?.item_ur?.html?.profile?.lto_phone || in4user?.thong_tin?.use_phone}
														</span>{' '}
													</p>
												</div>
												<div className="ic">
													<p className="icf">
														<i className="fa"></i>
													</p>
													<p className="icoweb">
														<span
															id="lto-email"
															cvo-placeholder="Email"
															contentEditable="true"
															suppressContentEditableWarning
															onInput={(e: any) =>
																updateField('profile', {
																	...html.profile,
																	lto_email: e.target.textContent,
																})
															}
														>
															{in4ThuSsr?.item_ur?.html?.profile?.lto_email || in4user?.thong_tin?.use_email_lienhe}
														</span>
													</p>
												</div>
												<div className="clr" />
											</div>
										</div>
									</div>
									{/* end lt-right  */}
								</div>
								{/* <div class="box-01"><div id="lto-about" cvo-placeholder="Giới thiệu bản thân" contentEditable="true"
suppressContentEditableWarning></div></div> */}
							</div>
							{/* end lt-top  */}
						</div>
						<div className="lto-day">
							<div
								id="lto-day"
								cvo-placeholder="Ngày viết thư"
								contentEditable="true"
								suppressContentEditableWarning
								onInput={(e: any) => updateField('lto_day', e.target.textContent)}
							>
								{in4ThuSsr?.item_ur?.html?.lto_day}
							</div>
						</div>
						<div id="lt-content">
							<div className="ir">
								<div
									onInput={(e: any) => updateField('content', e.target.textContent)}
									id="lto-content"
									cvo-placeholder="Nội dung"
									contentEditable="true"
									suppressContentEditableWarning
								>
									{in4ThuSsr?.item_ur?.html?.content}
								</div>
							</div>
						</div>
					</div>
					{/* end bg */}
					{/* lt-content  */}

					{/* end lt-content  */}
				</div>
			</div>
			<ul className="plugin">
				<li id="bt-share">
					<a onClick={() => setshowChiase(!showChiase)} title="Chia sẻ">
						<i className="tcv_share" />
					</a>
					<ul style={{ display: showChiase ? 'block' : 'none' }}>
						<li>
							<a
								rel="nofollow"
								href={`https://www.facebook.com/sharer/sharer.php?u=https://timviec365.vn/cv365/tao-mau-thu-${in4ThuSsr?.alias}`}
								title="Facebook"
								target="_blank"
							>
								<i className="img ico19" />
							</a>
						</li>
						<li>
							<a
								rel="nofollow"
								href={`http://www.twitter.com/share?url=https://timviec365.vn/cv365/tao-mau-thu-${in4ThuSsr?.alias}`}
								title="Twitter"
								target="_blank"
							>
								<i className="img ico20" />
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a title="Hướng dẫn" href="https://timviec365.vn/cv365/huong-dan-tao-thu-xin-viec" target="_blank">
						<i className="tcv_tt" />
					</a>
				</li>
			</ul>
			<div id="hoso-scroll" style={{ height: 'auto' }}>
				<div className="box-four">
					{dataThuMau?.data?.items?.map((item: any, index: number) => {
						if (index < 4)
							return (
								<div key={index} className="item">
									<div className="wa">
										<img src={item?.image} alt={item?.name} />
										<div className="info">
											<div className="btn-box">
												<p
													onClick={() => {
														setshowxemtruoc(true), setimg(item?.image)
													}}
												>
													<a style={{ cursor: 'pointer' }}>xem trước</a>
												</p>
												<p>
													<a href={`https://timviec365.vn/cv365/tao-mau-thu-${item?.alias}`}>Tạo thư</a>
												</p>
											</div>
										</div>
										<div id="lbx_255" className="modal" style={{ display: showxemtruoc ? 'block' : 'none' }}>
											<div className="mr">
												<span className="close" onClick={() => setshowxemtruoc(false)}>
													×
												</span>
												<p style={{ position: 'relative', display: 'table', margin: 'auto' }}>
													<a className="btn bg-blue" href={`https://timviec365.vn/cv365/tao-mau-thu-${item?.alias}`}>
														TẠO MẪU THƯ CỦA TÔI NGAY BÂY GIỜ
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
								<input
									type="file"
									className="sr-only"
									id="inputImage"
									name="file"
									accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"
									onChange={handleImageUpload}
								/>
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
							Nếu ảnh của bạn có dung lượng trên 5MB, vui lòng
							<a rel="nofollow" href="https://compressor.io/compress" target="_blank" style={{ color: '' }}>
								{' '}
								bấm vào đây
							</a>{' '}
							để giảm dung lượng ảnh.
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
								<label htmlFor="inputImage1" typeof="button" className="btn-change-image">
									<input
										type="file"
										className="sr-only"
										id="inputImage1"
										name="file"
										accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff"
										onChange={handleImageUpload}
									/>
									Đổi ảnh
								</label>
								<button type="button" className="btn-remove-image">
									Xóa ảnh
								</button>
								<br />
							</div>
							<div onClick={() => updateField('avatar', img2)}>
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
								<input type="hidden" name="tit_alias" id="tit_alias" defaultValue="Sinh Viên Mới Ra Trường 07" />
								<input type="hidden" name="cropx" id="dataX" defaultValue={0} />
								<input type="hidden" name="cropy" id="dataY" defaultValue={0} />
								<input type="hidden" name="cropw" id="dataWidth" defaultValue={280} />
								<input type="hidden" name="croph" id="dataHeight" defaultValue={280} />
								<input type="hidden" name="rotate" id="dataRotate" defaultValue={0} />
								<input type="hidden" name="tile" id="dataTile" defaultValue={1} />
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Container_thu
