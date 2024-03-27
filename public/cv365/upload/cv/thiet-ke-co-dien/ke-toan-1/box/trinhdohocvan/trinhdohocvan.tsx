import { handleHide } from '@/components/taocv/functions'
import React, { useEffect, useState } from 'react'

type Props = {}

const Trinhdohocvan = ({
	data,
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
	const [faketitle, setfaketitle] = useState('')
	// làm trống
	const handleAddHocVan = () => {
		const newSkill = {
			title: 'Tên trường đại học',
			date: '(9/2011- 7/2015)',
			subtitle: '- Chuyên ngành:',
			content: 'Bằng Tốt nghiệp: ',
		}
		const updatedHocVan = [...htmldefault.experiences[0].content.content, newSkill]

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.experiences[0],
			content: {
				...htmldefault.experiences[0].content,
				content: updatedHocVan,
			},
		}
		const updatedMenu = [...htmldefault.experiences]
		updatedMenu[0] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			experiences: updatedMenu,
		})
		// const skillsDiv = document.getElementById('experience-table')
		// setTimeout(() => {
		// 	// update lại giá trị từ thẻ div có id, vì trùng logic với jquery
		// 	if (skillsDiv) {
		// 		const skillContainers = skillsDiv.getElementsByClassName('ctbx')
		// 		if (skillContainers.length > 0) {
		// 			const lastSkillContainer = skillContainers[skillContainers.length - 1]
		// 			skillsDiv.removeChild(lastSkillContainer)
		// 		}
		// 	}
		// }, 100)
	}

	const handleRemoveHocVan = (index: any) => {
		const updatedHocVan = [...htmldefault.experiences[0].content.content]
		updatedHocVan.splice(index, 1)
		const updatedexperiences2 = {
			...htmldefault.experiences[0],
		content: {
				...htmldefault.experiences[0]?.content,
				content: updatedHocVan,
			},
		}
		const updatedexperiences = [...htmldefault.experiences]
		updatedexperiences[0] = updatedexperiences2
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

	const handleChangetitle = (event: any, experiencesIndex: any, fieldName: any, indexc: any) => {
		const newName = event.target.textContent

		const updatedexperiences = [...htmldefault.experiences]
		if (updatedexperiences[experiencesIndex]) {
			updatedexperiences[experiencesIndex].content[fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				experiences: updatedexperiences,
			})
		}
	}
	const [change, setchange] = useState(false)
	const [titles, settitles] = useState<any>(
		html[0]?.content?.content?.map((item: any) => item.title)
	)
	const [dates, setdates] = useState(html[0]?.content?.content?.map((item: any) => item.date))
	const [subtitles, setsubtitles] = useState(
		html[0]?.content?.content?.map((item: any) => item.subtitle)
	)
	useEffect(() => {
		settitles(html[0]?.content?.content?.map((item: any) => item.title))
		setdates(html[0]?.content?.content?.map((item: any) => item.date))
		setsubtitles(html[0]?.content?.content?.map((item: any) => item.subtitle))
	}, [change])
	return (
		<div
			onClick={() => setcheckthaotac(html[0]?.id)}
			id={html[0]?.id}
			className="cvo-block ui-sortable-handle"
		>
			<div className="blockControls">
				<div title="Di chuyển khối" className="show-layout-editor" onClick={() => {}}>
					<i className="fa fa-bars" />
				</div>
				<div title="Chuyển mục này lên trên" className="up">
					▲
				</div>
				<div title="Chuyển mục này xuống dưới" className="down">
					▼
				</div>
				<div onClick={() => handleHide(html[0]?.id)} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>
			<div className="head">
				<div className="icright1" />
				<div
					style={{ background: 'var(/images/hocvan1.png)' }}
					id="cvo-experience-blocktitle"
					className="block-title"
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
					contentEditable="true"
					suppressContentEditableWarning
					onClick={() => setfaketitle(html[0]?.content?.title)}
					onInput={(e: any) => {
						handleChangetitle(e, 0, 'title', 1)
					}}
				>
					{faketitle || html[0]?.content?.title}
				</div>
			</div>
			<div id="experience-table">
				{html[0]?.content?.content?.map((item: any, index: number) => {
					return (
						<div key={index} id={`exp${index+1}`} className="ctbx experience">
							{' '}
							<div className="fieldgroup_controls">
								<div
									className="clone"
									onClick={() => {
										handleAddHocVan(), setchange(!change)
									}}
								>
									<i className="fa fa-plus" /> Thêm
								</div>
								<div className="remove" onClick={() => handleRemoveHocVan(index)}>
									<i className="fa fa-minus" /> Xóa
								</div>
							</div>
							<h3>
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
									onInput={(e: any) => {
										handleSkillsChange(e, 0, 'title', index), handleChangestatusEx(0)
									}}
									dangerouslySetInnerHTML={{ __html: titles[index] }}
								></div>
								<div
									className="exp-date err_cv_content"
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
										handleSkillsChange(e, 0, 'date', index), handleChangestatusEx(0)
									}}
								>
									{dates[index]}
								</div>
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
										setfake2(item?.subtitle), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 0, 'subtitle', index), handleChangestatusEx(0)
									}}
								>
									{subtitles[index]}
								</span>
							</p>
							<div
								className="exp-content"
								contentEditable="true"
								suppressContentEditableWarning
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
								onClick={() => {
									setfake3(item?.content), setindexc(index)
								}}
								onInput={(e: any) => {
									handleSkillsChange(e, 0, 'content', index), handleChangestatusEx(0)
								}}
								dangerouslySetInnerHTML={{ __html: (index === indexc && fake3) || item?.content }}
							></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Trinhdohocvan
