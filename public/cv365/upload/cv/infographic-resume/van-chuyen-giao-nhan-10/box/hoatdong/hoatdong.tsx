import React, { useState } from 'react'
import { handleHide } from '@/components/taocv/functions'

type Props = {}

const Hoatdong = ({
	html,
	htmldefault,
	updateField,
	sethtml,
	lang,
	setcheckthaotac,
	handleChangestatusEx,
}: any) => {
	const [activity1, setActivity1] = useState<any>(html[2]?.content?.content[0]?.subtitle)
	const [activity2, setActivity2] = useState<any>(html[2]?.content?.content[0]?.content)

	const handleAddHd = () => {
		const newSkill = {
			title: 'Đại học Bách Khoa Hà Nội',
			date: '',
			subtitle: 'Tình nguyện viên',
			content:
				'\n                               - Tham gia vào các hoạt động ngoại khóa dành cho sinh viên.<br>                              ',
		}
		const updatedHocVan = [...htmldefault.experiences[2].content.content, newSkill]

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.experiences[2],
			content: {
				...htmldefault.experiences[2].content,
				content: updatedHocVan,
			},
		}
		const updatedMenu = [...htmldefault.experiences]
		updatedMenu[2] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			experiences: updatedMenu,
		})
	}

	const handleRemoveHocVan = (index: any) => {
		const updatedHocVan = [...htmldefault.experiences[2].content.content]
		updatedHocVan.splice(index, 1)
		const updatedexperiences2 = {
			...htmldefault.experiences[2],
			content: {
				...htmldefault.experiences[2],
				content: updatedHocVan,
			},
		}
		const updatedexperiences = [...htmldefault.experiences]
		updatedexperiences[2] = updatedexperiences2
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
	const handleActivity1 = (e: any, index: number) => {
		handleSkillsChange(e, 2, 'subtitle', index), handleChangestatusEx(2)
		setActivity1(e[2]?.content?.content[0]?.content)
	}
	const handleActivity2 = (e: any, index: number) => {
		handleSkillsChange(e, 2, 'content', index), handleChangestatusEx(2)
		setActivity2(e[2]?.content?.content[0]?.content)
	}
	return (
		<div
			id="block03"
			onClick={() => setcheckthaotac('block03')}
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
				<div onClick={() => handleHide('block03')} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>
			<div className="head">
				<div className="icright3" />
				<div id="blocktitle">
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
					onClick={() => setfakett(html[2]?.content?.title)}
					onInput={(e: any) => handleSkillsChange2(e, 2, 'title')}
				>
					{fakett || html[2]?.content?.title}
				</div>
				</div>
				
			</div>
			<div id="experience-table">
				{html[2]?.content?.content?.map((item: any, index: number) => {
					return (
						<div key={index} id={`exp${index}`} className="ctbx experience">
							{' '}
							<div className="fieldgroup_controls">
								<div onClick={() => handleAddHd()} className="clone">
									<i className="fa fa-plus" /> Thêm
								</div>
								<div className="remove" onClick={() => handleRemoveHocVan(index)}>
									<i className="fa fa-minus" /> Xóa
								</div>
							</div>
							<h3>
								<div
									className="exp-title"
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
									onInput={(e: any) => {
										handleSkillsChange(e, 2, 'title', index), handleChangestatusEx(2)
									}}
								>
									{item?.title}
								</div>
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
									onInput={(e: any) => {
										handleSkillsChange(e, 2, 'date', index), handleChangestatusEx(2)
									}}
								>
									{item?.date}
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
									onInput={(e: any) => {
										handleActivity1(e, index)
									}}
								>
									{activity1}
								</span>
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
								onInput={(e: any) => {
									handleActivity2(e, index)
								}}
								dangerouslySetInnerHTML={{ __html: activity2 }}
							></div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Hoatdong
