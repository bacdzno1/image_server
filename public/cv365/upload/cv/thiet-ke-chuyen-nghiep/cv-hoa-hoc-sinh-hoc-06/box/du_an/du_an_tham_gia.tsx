import { handleHide } from '@/components/taocv/functions'
import React, { useState } from 'react'


type Props = {}

const Du_an_tham_gia = ({
	html,
	htmldefault,
	updateField,
	sethtml,
	lang,
	setcheckthaotac,
	handleChangestatusEx,
}: any) => {
	const [fake, setfake] = useState<any>('')
	const [fake1, setfake1] = useState<any>('')
	const [fake2, setfake2] = useState<any>('')
	const [fake3, setfake3] = useState<any>('')
	const [indexc, setindexc] = useState<any>()
	const [subtitle, setSubtitle] = useState<any>(html[3]?.content?.content[0]?.subtitle)
	const handleAddHocVan = () => {
		const newSkill = {
			title:
				'Công ty Cổ phần Sản xuất hàng may mặc Ánh Sao  8/2018 Một học viên Ánh Sao – Một nhân tài bước vào hội nhập',
			date: '2021-2023',
			subtitle:
				'- Vai trò : Người tổ chức thực hiện phong trào thi đua nhân viên làm việc tích cực, hăng say.',
			content:
				'\n                               \n    -Kết quả: Toàn bộ nhân viên của tổ sản xuất may mặc thuộc công ty Ánh Sao được tham gia vào các chương trình đào tạo nâng cao tay nghề do công ty tổ chức với sự hướng dẫn đào tạo của các chuyên gia hàng đầu về công nghệ may mặc. Qua đó, có 95% lao động tại công ty nắm bắt được những kỹ thuật mới tân tiến trong hoạt động may mặc.                                ',
		}
		const updatedHocVan = [...htmldefault.experiences[3].content.content, newSkill]

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.experiences[3],
			content: {
				...htmldefault.experiences[3].content,
				content: updatedHocVan,
			},
		}
		const updatedMenu = [...htmldefault.experiences]
		updatedMenu[3] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			experiences: updatedMenu,
		})
		// const skillsDiv2 = document.getElementById('block04') // Select the first element
		// const skillsDiv = skillsDiv2?.querySelector('#experience-table') // Select an element with the id 'experience-table' inside the 'block02' element

		// setTimeout(() => {
		// 	// update lại giá trị từ thẻ div có id, vì trùng logic với jquery
		// 	if (skillsDiv) {
		// 		const skillContainers = skillsDiv.getElementsByClassName('ctbx')
		// 		if (skillContainers.length > 0) {
		// 			const lastSkillContainer = skillContainers[skillContainers.length - 1]
		// 			skillsDiv.removeChild(lastSkillContainer)
		// 		}
		// 	}
		// }, 200)
	}

	const handleRemoveHocVan = (index: any) => {
		const updatedHocVan = [...htmldefault.experiences[3].content.content]
		updatedHocVan.splice(index, 1)
		const updatedexperiences2 = {
			...htmldefault.experiences[3],
			content: {
				...htmldefault.experiences[3],
				content: updatedHocVan,
			},
		}
		const updatedexperiences = [...htmldefault.experiences]
		updatedexperiences[3] = updatedexperiences2
		sethtml({
			...htmldefault,
			experiences: updatedexperiences,
		})
	}

	// đổi thông tin skill
	const handleSkillsChange = (event: any, experiencesIndex: any, fieldName: any, indexc: any) => {
		const newName = event.target.textContent

		const updatedexperiences = [...htmldefault.experiences]
		if (updatedexperiences[experiencesIndex]) {
			updatedexperiences[experiencesIndex].content.content[indexc][fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				experiences: updatedexperiences,
			})
		}
	}

	const handleSkillsChange2 = (event: any, menuIndex: any, fieldName: any) => {
		const newName = event.target.textContent

		const updatedMenu = [...htmldefault.experiences]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content[fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				experiences: updatedMenu,
			})
		}
	}
	const [fakett, setfakett] = useState('')
	return (
		<div
			id="block04"
			onClick={() => setcheckthaotac('block04')}
			className="cvo-block ui-sortable-handle"
		>
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
				<div onClick={() => handleHide('block04')} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>
			<div className="head">
				<div className="icright4" />
				<div
					id="cvo-experience-blocktitle"
					className="block-title"
					cvo-placeholder="Tiêu đề mục lớn"
					contentEditable="true"
					suppressContentEditableWarning
					onClick={() => setfakett(html[3]?.content?.title)}
					onInput={(e: any) => handleSkillsChange2(e, 3, 'title')}
				>
					{fakett || html[3]?.content?.title}
				</div>
			</div>
			<div id="experience-table">
				{html[3]?.content?.content?.map((item: any, index: number) => {
					return (
						<div key={index} id={`exp${index + 1}`} className="ctbx experience">
							<div className="fieldgroup_controls">
								<div className="clone" onClick={() => handleAddHocVan()}>
									<i className="fa fa-plus" /> Thêm
								</div>
								<div className="remove" onClick={() => handleRemoveHocVan(index)}>
									<i className="fa fa-minus" /> Xóa
								</div>
							</div>
							<h3>
								<div
									className="exp-date"
									contentEditable="true"
									suppressContentEditableWarning
									onClick={() => {
										setfake1(''), setindexc(index)
									}}
									cvo-placeholder={
										lang === 'vi'
											? 'Thời gian làm việc'
											: lang === 'en'
												? 'Working time'
												: lang === 'jp'
													? '勤務期間'
													: lang === 'cn'
														? '工作时间 '
														: '근무시간 '
									}
									onInput={(e: any) => {
										handleSkillsChange(e, 3, 'date', index), handleChangestatusEx(3)
									}}
								>
									{fake1 || item?.date}
								</div>
								<div
									className="exp-title err_cv_content"
									contentEditable="true"
									suppressContentEditableWarning
									cvo-placeholder={
										lang === 'vi'
											? 'Tên công ty'
											: lang === 'en'
												? 'Company namet'
												: lang === 'jp'
													? '会社名'
													: lang === 'cn'
														? '公司名称 '
														: '회사명 '
									}
									onClick={() => {
										setfake(' '), setindexc(index)
									}}
									dangerouslySetInnerHTML={{ __html: (index === indexc && fake) || item?.title }}
									onInput={(e: any) => {
										handleSkillsChange(e, 3, 'title', index), handleChangestatusEx(3)
									}}
								></div>
							</h3>
							<p className="h3">
								<span
									className="exp-subtitle"
									cvo-placeholder={
										lang === 'vi'
											? 'Vị trí công việc'
											: lang === 'en'
												? 'Job position'
												: lang === 'jp'
													? '職位'
													: lang === 'cn'
														? '工作岗位 '
														: '작업 위치 '
									}
									contentEditable="true"
									suppressContentEditableWarning
									onClick={() => {
										setfake2(''), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 3, 'subtitle', index), handleChangestatusEx(3)
									}}
								>
									{subtitle}
								</span>
							</p>
							<div
								className="exp-content err_cv_content"
								contentEditable="true"
								suppressContentEditableWarning
								onClick={() => {
									setfake3(' '), setindexc(index)
								}}
								cvo-placeholder={
									lang === 'vi'
										? 'Mô tả chi tiết công việc, những gì đạt được trong quá trình làm việc.'
										: lang === 'en'
											? 'Job description and task achievements.'
											: lang === 'jp'
												? '職歴の詳細内容'
												: lang === 'cn'
													? '描述具体工作, 在工作期间所得到的收获 '
													: ' 업무에서 달성되는 업무 세부 사항을 설명한다. '
								}
								dangerouslySetInnerHTML={{ __html: (index === indexc && fake3) || item?.content }}
								onInput={(e: any) => {
									handleSkillsChange(e, 3, 'content', index), handleChangestatusEx(3)
								}}
							></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Du_an_tham_gia
