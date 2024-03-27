import { handleHide } from '@/components/taocv/functions'
import React, { useState } from 'react'


type Props = {}

const Kinhnghiem = ({
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
	const [faketitle, setfaketitle] = useState<any>()
	const [add, setadd] = useState<boolean>(false)
	const handleAddKn = () => {
		setadd(true)
		const newKN = {
			title: 'Tên công ty',
			date: 'Thời gian: 04/2015 – 11/2016',
			subtitle: 'Vị trí: Kỹ sư cơ khí',
			content: '- Sử dụng thành thạo các phần mềm Solid works và Auto Card nhằm phục vụ...  ',
		}
		const updatedKN = [...htmldefault.experiences[1].content.content, newKN]

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.experiences[1],
			content: {
				...htmldefault.experiences[1].content,
				content: updatedKN,
			},
		}
		const updatedMenu = [...htmldefault.experiences]
		updatedMenu[1] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			experiences: updatedMenu,
		})
	}

	const handleRemoveHocVan = (index: any) => {
		const updatedHocVan = [...htmldefault.experiences[1].content.content]
		updatedHocVan.splice(index, 1)
		const updatedexperiences2 = {
			...htmldefault.experiences[1],
			content: {
				...htmldefault.experiences[1],
				content: updatedHocVan,
			},
		}
		const updatedexperiences = [...htmldefault.experiences]
		updatedexperiences[1] = updatedexperiences2
		if (updatedexperiences[1]) {
			updatedexperiences[1].content['title'] = html[1]?.content?.title

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				experiences: updatedexperiences,
			})
		}
		sethtml({
			...htmldefault,
			experiences: updatedexperiences,
		})
	}
	// đổi thông tin skill
	const handleSkillsChange = (event: any, experiencesIndex: any, fieldName: any, indexc: any) => {
		const newName = event.target.textContent
		if (typeof document !== 'undefined') {
			const box1 = document.getElementById('block02')
			const box2 = box1?.querySelector('#experience-table')
			const content = box2?.querySelector(`#exp${indexc} .exp-content`)
			const updatedexperiences = [...htmldefault.experiences]
			if (fieldName === 'content') {
				if (updatedexperiences[experiencesIndex]) {
					updatedexperiences[experiencesIndex].content.content[indexc][fieldName] =
						content?.innerHTML

					// Cập nhật trạng thái với menu mới
					sethtml({
						...htmldefault,
						experiences: updatedexperiences,
					})
				}
			} else if (updatedexperiences[experiencesIndex]) {
				updatedexperiences[experiencesIndex].content.content[indexc][fieldName] = newName

				// Cập nhật trạng thái với menu mới
				sethtml({
					...htmldefault,
					experiences: updatedexperiences,
				})
			}
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
	return (
		<div
			id="block02"
			onClick={() => setcheckthaotac('block02')}
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
				<div onClick={() => handleHide('block02')} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>
			<div className="head">
				<div className="icright2" />
				<div id ="blocktitle">
				<div
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
					onClick={() => setfaketitle(html[1]?.content?.title)}
					onInput={(e: any) => {
						handleChangetitle(e, 1, 'title', 1)
					}}
				>
					{faketitle || html[1]?.content?.title}
				</div>
				</div>
				
			</div>
			<div id="experience-table">
				{html[1]?.content?.content?.map((item: any, index: number) => {
					if (!add ? index == 0 : index !== 1)
						return (
							<div key={index} id={`exp${index+1}`} className="ctbx experience">
								{' '}
								<div className="fieldgroup_controls">
									<div className="clone" onClick={() => handleAddKn()}>
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
										dangerouslySetInnerHTML={{ __html: (index === indexc && fake) || item?.title }}
										onInput={(e: any) => {
											handleSkillsChange(e, 1, 'title', index), handleChangestatusEx(1)
										}}
									></div>
									{/* <div
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
											setfake1(item?.date), setindexc(index)
										}}
										onInput={(e: any) => {
											handleSkillsChange(e, 1, 'date', index), handleChangestatusEx(1)
										}}
									>
										{(index === indexc && fake1) || item?.date}
									</div> */}
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
											handleSkillsChange(e, 1, 'subtitle', index), handleChangestatusEx(1)
										}}
										dangerouslySetInnerHTML={{
											__html: (index === indexc && fake2) || item?.subtitle,
										}}
									></span>
								</p>
								<div
									className="exp-content err_cv_content"
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
										setfake3(' '), setindexc(index)
									}}
									onInput={(e: any) => {
										handleSkillsChange(e, 1, 'content', index), handleChangestatusEx(1)
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

export default Kinhnghiem
