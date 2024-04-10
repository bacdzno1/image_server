import React, { useState } from 'react'
import { handleHide } from '@/components/taocv/functions'

type Props = {}

const Thong_tin_them = ({
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
	const [faketitle, setfaketitle] = useState<any>(htmldefault?.experiences[4]?.content?.title)
	const handleAddHocVan = () => {
		const newSkill = {
			title: '',
			date: '',
			subtitle: 'Thêm những thông tin khác (nếu cần)',
			content: '\n                               \n                               ',
		}
		const updatedHocVan = [...htmldefault.experiences[4].content.content, newSkill]

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.experiences[4],
			content: {
				...htmldefault.experiences[4].content,
				content: updatedHocVan,
			},
		}
		const updatedMenu = [...htmldefault.experiences]
		updatedMenu[4] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			experiences: updatedMenu,
		})
		const skillsDiv2 = document.getElementById('block05') // Select the first element
		const skillsDiv = skillsDiv2?.querySelector('#experience-table') // Select an element with the id 'experience-table' inside the 'block02' element

		setTimeout(() => {
			// update lại giá trị từ thẻ div có id, vì trùng logic với jquery
			if (skillsDiv) {
				const skillContainers = skillsDiv.getElementsByClassName('ctbx')
				if (skillContainers.length > 0) {
					const lastSkillContainer = skillContainers[skillContainers.length - 1]
					skillsDiv.removeChild(lastSkillContainer)
				}
			}
		}, 200)
	}

	const handleRemoveHocVan = (index: any) => {
		const updatedHocVan = [...htmldefault.experiences[4].content.content]
		updatedHocVan.splice(index, 1)
		const updatedexperiences2 = {
			...htmldefault.experiences[4],
			content: {
				...htmldefault.experiences[4],
				content: updatedHocVan,
			},
		}
		const updatedexperiences = [...htmldefault.experiences]
		updatedexperiences[4] = updatedexperiences2
		sethtml({
			...htmldefault,
			experiences: updatedexperiences,
		})
	}

	// đổi thông tin skill
	const handleSkillsChange = (event: any, experiencesIndex: any, fieldName: any, indexc: any) => {
		const newName = event.target.textContent
		if (typeof document !== 'undefined') {
			const box1 = document.querySelectorAll('#block05')
			const box2 = box1[0]
			const content = box2?.querySelector(`#exp${indexc} .exp-${fieldName}`)
			const updatedexperiences = [...htmldefault.experiences]
			if (updatedexperiences[experiencesIndex]) {
				updatedexperiences[experiencesIndex].content.content[indexc][fieldName] = content?.innerHTML

				// Cập nhật trạng thái với menu mới
				sethtml({
					...htmldefault,
					experiences: updatedexperiences,
				})
			}
		}
	}
	const handleSkillsChange2 = (event: any, experiencesIndex: any, fieldName: any, indexc: any) => {
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
	const handleChangetitle = (event: any, menuIndex: any, fieldName: any) => {
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
	return (
		<div
			id="block05"
			onClick={() => setcheckthaotac('block05')}
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
				<div onClick={() => handleHide('block05')} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>
			<div className="head">
				<div className="icright5" />
				<div
					id="cvo-experience-blocktitle"
					className="block-title"
					cvo-placeholder="Tiêu đề mục lớn"
					contentEditable="true"
					suppressContentEditableWarning
					onClick={() => setfaketitle(htmldefault?.experiences[4]?.content?.title)}
					onInput={(e: any) => {
						handleChangetitle(e, 4, 'title')
					}}
				>
					{faketitle}
				</div>
			</div>
			<div id="experience-table">
				{htmldefault?.experiences[4]?.content?.content?.map((item: any, index: number) => {
					return (
						<div key={index} id={`exp${index}`} className="ctbx experience">
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
									onClick={() => {
										setfake1(' '), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 4, 'date', index), handleChangestatusEx(4)
									}}
									dangerouslySetInnerHTML={{
										__html: (index === indexc && fake1) || item?.date,
									}}
								></div>
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
									dangerouslySetInnerHTML={{ __html: (index === indexc && fake) || item?.title }}
									onClick={() => {
										setfake(' '), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 4, 'title', index), handleChangestatusEx(4)
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
										setfake2(' '), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 4, 'subtitle', index), handleChangestatusEx(4)
									}}
									dangerouslySetInnerHTML={{
										__html: (index === indexc && fake2) || item?.subtitle,
									}}
								/>
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
									handleSkillsChange(e, 4, 'content', index), handleChangestatusEx(4)
								}}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Thong_tin_them
