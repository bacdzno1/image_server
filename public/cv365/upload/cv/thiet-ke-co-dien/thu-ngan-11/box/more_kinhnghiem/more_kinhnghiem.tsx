import React, { useState } from 'react'
import { handleHide } from '@/components/taocv/functions'

type Props = {}

const More_kinhnghiem = ({
	data,
	html,
	htmldefault,
	updateField,
	sethtml,
	lang,
	setcheckthaotac,
	handleChangestatusMenu,
}: any) => {
	const [fake, setfake] = useState<string>('')
	const [fakett, setfakett] = useState<string>(html?.slice(3)?.map((item:any)=>item?.content?.title))
	const [indextt, setindextt] = useState<any>()
	const [indexc, setindexc] = useState<any>()
	// đổi thông tin skill
	const handleSkillsChange = (event: any, menuIndex: any, fieldName: any) => {
		if (typeof document !== 'undefined') {
			const data = document.getElementById(`morekn${indexc}`)
			const updatedMenu = [...htmldefault.menu]
			if (updatedMenu[menuIndex]) {
				updatedMenu[menuIndex].content[fieldName] = data?.innerHTML

				// Cập nhật trạng thái với menu mới
				sethtml({
					...htmldefault,
					menu: updatedMenu,
				})
			}
		}
	}

	return (
		<div id="cv-main">
			<div id="cv-right">
				<div className="ir">
					<div id="sortable" className="connectedSortable sortable ui-sortable">
						{html?.slice(3)?.map((item: any, index: number) => {
							return (
								<div
									onClick={(e) => {
										setcheckthaotac(item?.id)
									}}
									id={item?.id}
									className="block cvo-block ui-sortable-handle"
								>
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
										<div onClick={()=>handleHide(item?.id)} title="Ẩn mục này" className="hide">
											<i className="fa fa-minus" /> Ẩn
										</div>
									</div>{' '}
									<div className="cum">
										<div className="cumicc4" />
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
											// onClick={() => {
											// 	setfakett(item?.content?.title), setindextt(index)
											// }}
											onInput={(e: any) => {
												handleSkillsChange(e, index + 3, 'title')
											}}
										>
											{fakett[index]}
										</div>
									</div>
									<div className="ct_bo">
										<div className="ct_box">
											<div
												id={`morekn${index}`}
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
												dangerouslySetInnerHTML={{
													__html: (index === indexc && fake) || item?.content?.content,
												}}
												onClick={() => {
													setfake(' '), setindexc(index)
												}}
												onInput={(e: any) => {
													handleSkillsChange(e, index + 3, 'content'),
														handleChangestatusMenu(index + 3)
												}}
											></div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="clr" />
		</div>
	)
}

export default More_kinhnghiem
