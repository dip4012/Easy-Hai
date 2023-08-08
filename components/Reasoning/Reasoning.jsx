"use client"
import { useEffect, useRef, useState } from "react"
import QualityCard from "./QualityCard"

const Reasoning = () => {
	const [listItems] = useState([
		{
			title: "Personalized Learning",
			text:
				"Interactive discussions that stimulate your mind, fearlessly ask tech questions.",
			color: "green",
		},
		{
			title: "Expert Guidance",
			text:
				"Our courses are conducted by Shreya herself who specialize in demystifying tech concepts to make it practical and enjoyable for adults and seniors. teaching digital skills.",
			color: "orange",
		},
		{
			title: "Practical Approach",
			text:
				"Learn with Shreya by solving real-life problems and gain access to learning sheets, playbooks, and assignments.",
			color: "blue",
		},
		{
			title: "Convenient Virtual Learning",
			text:
				"Our Zoom classes allow you to learn from the comfort of your own home.",
			color: "violet",
		},
		{
			title: "Community",
			text:
				"Make tech buddies by joining the curated community of other learners and mentors.",
			color: "purple",
		},
	])

	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(index + 1)
		}, 4000)

		return () => clearInterval(timer)
	}, [index])

	useEffect(() => {
		const lastIndex = listItems.length - 1
		if (index < 0) setIndex(lastIndex)
		if (index > lastIndex) setIndex(0)
	}, [index, listItems])

	return (
		<div className="w-full px-[80px] py-[50px] bg-[#262543] relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-white w-full font-Raleway text-5xl font-bold tracking-[0.768px] text-center gap-[4px] max-[767px]:justify-start max-[767px]:text-2xl max-[767px]:font-medium">
				<span className="section_graphic">Why Learn With Us?</span>
			</h1>

			{/* <p className="w-full text-center mt-[50px] text-white font-Raleway text-sm font-normal tracing-[0.15px]">
				Veritatis voluptas sit eos nihil velit debitis. Illum dolor qu
			</p> */}

			{/* desktop list points */}
			<div className="w-full mt-[80px] flex justify-center items-center max-[767px]:hidden max-[767px]:mt-[50px]">
				<div className="flex gap-[45px] justify-start items-start overflow-x-scroll no-scrollbar">
					{listItems.map((item) => (
						<QualityCard position={"activeSlide"} item={item} key={item.title} />
					))}
				</div>
			</div>

			{/* mobile list points */}
			<div className="w-full h-[170px] mt-[50px] flex justify-center items-start min-[768px]:hidden">
				{listItems.map((item, i, arr) => {
					let position = "nextSlide"

					if (i === index) position = "activeSlide"
					if (i === index - 1 || (index === 0 && i === arr.length - 1))
						position = "lastSlide"

					return <QualityCard position={position} item={item} key={item.title} />
				})}
			</div>
		</div>
	)
}

export default Reasoning
