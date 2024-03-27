import React, { useEffect, useState } from 'react'
import { handleHide } from '@/components/taocv/functions'

type Props = {}

const Kynang = ({
	data,
	html,
	htmldefault,
	updateField,
	sethtml,
	lang,
	setcheckthaotac,
	handleChangestatusMenu,
}: any) => {
	// làm trống
	const [faketitle, setfaketitle] = useState('')

	const [fake, setfake] = useState('')
	const [indexc, setindex] = useState<any>()

	const handleAddSkill = () => {
		const newSkill = {
			name: 'Nhập kỹ năng của bạn',
			exp: 50,
		}
		const updatedSkills = [...htmldefault.menu[2].content.content.skills, newSkill]
		const updatedContent = {
			...htmldefault.menu[2].content.content,
			skills: updatedSkills,
		}

		// Sao chép
		const updatedMenu2 = {
			...htmldefault.menu[2],
			content: {
				...htmldefault.menu[2].content,
				content: updatedContent,
			},
		}
		// Sao chép dữ liệu menu và cập nhật menu[2] mới
		const updatedMenu = [...htmldefault.menu]
		updatedMenu[2] = updatedMenu2
		// Cập nhật trạng thái với menu mới
		sethtml({
			...htmldefault,
			menu: updatedMenu,
		})
		const skillsDiv = document.getElementById('skills')
	}

	const handleRemoveSkill = (index: any) => {
		const updatedSkills = [...htmldefault.menu[2].content.content.skills]
		updatedSkills.splice(index, 1)
		const updatedContent = {
			...htmldefault.menu[2].content.content,
			skills: updatedSkills,
		}
		const updatedMenu2 = {
			...htmldefault.menu[2],
			content: {
				...htmldefault.menu[2].content,
				content: updatedContent,
			},
		}
		const updatedMenu = [...htmldefault.menu]
		updatedMenu[2] = updatedMenu2
		sethtml({
			...htmldefault,
			menu: updatedMenu,
		})
	}

	// đổi thông tin skill
	const handleSkillsChange = (event: any, menuIndex: any, fieldName: any, indexc: any) => {
		const newName = event.target.textContent

		const updatedMenu = [...htmldefault.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content.skills[indexc][fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				menu: updatedMenu,
			})
		}
	}
	// đổi thông tin title
	const handleChangetitle = (event: any, menuIndex: any, fieldName: any) => {
		const newName = event.target.textContent

		const updatedMenu = [...htmldefault.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content[fieldName] = newName

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				menu: updatedMenu,
			})
		}
	}
	// đổi thông tin input
	const handleSkillsChangeInput = (event: any, menuIndex: any, fieldName: any, indexc: any) => {
		const newExp = event.target.value

		const updatedMenu = [...htmldefault.menu]
		if (updatedMenu[menuIndex]) {
			updatedMenu[menuIndex].content.content.skills[indexc][fieldName] = newExp

			// Cập nhật trạng thái với menu mới
			sethtml({
				...htmldefault,
				menu: updatedMenu,
			})
		}
	}
	return (
		<div
			onClick={() => setcheckthaotac('box03')}
			id="box03"
			className="block cvo-block box-skills ui-sortable-handle"
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
				<div onClick={()=>handleHide('box03')} title="Ẩn mục này" className="hide">
					<i className="fa fa-minus" /> Ẩn
				</div>
			</div>{' '}
			<div className="ski">
				<div className="skic" />
				<div className="cumicc3" />
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
					onClick={() => setfaketitle(html?.content?.title)}
					onInput={(e: any) => {
						handleChangetitle(e, 2, 'title')
					}}
				>
					{faketitle || html?.content?.title}
				</div>
			</div>
			{/* ô input edit chả biết làm gì */}
			{/* <div className="ctbx edit-content">
					<div className="fieldgroup_controls">
						<div className="save js-save-content">Save</div>
					</div>
					<p className="skill-name" cv-form-field="true" contentEditable="true"
suppressContentEditableWarning>
						- Tính tình trung thực, khả năng tự học hỏi cao.
					</p>
					<div className="bar-exp">
						<div style={{ width: '80%' }} />
					</div>
					<div className="bar-value-exp">
						<input min={0} max={100} type="text" defaultValue={80} />
					</div>
					<div className="exp-fake" />
				</div> */}
			<div
				id="skills"
				className="exp content-edit skill"
			//  style={{ background: data.background }}
			>
				{html?.content?.content?.skills?.map((item: any, index: number) => {
					return (
						<div key={index} className="ctbx">
							<div className="fieldgroup_controls">
								<div className="clone" onClick={() => handleAddSkill()}>
									<i className="fa fa-plus" /> Thêm
								</div>
								<div className="edit js-edit-content"> Sửa</div>
								<div className="remove" onClick={() => handleRemoveSkill(index)}>
									<i className="fa fa-minus" /> Xóa
								</div>
							</div>
							<p
								className="skill-name"
								cv-form-field="true"
								contentEditable="true"
								suppressContentEditableWarning
								onInput={(e: any) => (
									handleSkillsChange(e, 2, 'name', index),
									setfake(' '),
									setindex(index),
									handleChangestatusMenu(2)
								)}
							>
								{(indexc === index && fake) || item?.name}
							</p>
							<div className="bar-exp">
								<div style={{ width: `${item?.exp}%` }} />
							</div>
							<div className="bar-value-exp">
								<input
									onChange={(e: any) => {
										e.target.value = e.target.value.replace(/\D/g, "");
										handleSkillsChangeInput(e, 2, 'exp', index), handleChangestatusMenu(2)
									}}
									min={0}
									max={100}
									type="text"
									defaultValue={item?.exp}
								/>
							</div>
							<div className="exp-fake" />
						</div>
					)
				})}

				<div className="clr" />
			</div>
		</div>
	)
}

export default Kynang
