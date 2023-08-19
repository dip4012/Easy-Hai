"use client"
import { useEffect, useRef, useState } from "react"
import QualityCard from "./QualityCard"
import {
	BookOpen,
	GraduationCap,
	MoveLeft,
	MoveRight,
	PersonStanding,
	Tablet,
	User2,
} from "lucide-react"
import Image from "next/image"

const Reasoning = () => {
	const [listItems] = useState([
		{
			title: "Personalized Learning",
			text:
				"Interactive discussions that stimulate your mind, fearlessly ask tech questions.",
			color: "green",
			icon: <User2 className="stroke-white stroke-2" />,
		},
		{
			title: "Expert Guidance",
			text:
				"Our courses are conducted by Shreya herself who specialize in demystifying tech concepts to make it practical and enjoyable for adults and seniors. teaching digital skills.",
			color: "orange",
			icon: <GraduationCap className="stroke-white stroke-2" />,
		},
		{
			title: "Practical Approach",
			text:
				"Learn with Shreya by solving real-life problems and gain access to learning sheets, playbooks, and assignments.",
			color: "blue",
			icon: <BookOpen className="stroke-white stroke-2" />,
		},
		{
			title: "Convenient Virtual Learning",
			text:
				"Our Zoom classes allow you to learn from the comfort of your own home.",
			color: "violet",
			icon: <Tablet className="stroke-white stroke-2" />,
		},
		{
			title: "Community",
			text:
				"Make tech buddies by joining the curated community of other learners and mentors.",
			color: "purple",
			icon: <PersonStanding className="stroke-white stroke-2" />,
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
				<div className="w-full flex gap-[45px] justify-center items-start flex-wrap no-scrollbar">
					{listItems.map((item) => (
						<QualityCard position={"activeSlide"} item={item} key={item.title} />
					))}
				</div>
			</div>

			{/* mobile list points */}
			<div className="w-full h-[200px] mt-[50px] flex justify-center items-start min-[768px]:hidden">
				{listItems.map((item, i, arr) => {
					let position = "nextSlide"

					if (i === index) position = "activeSlide"
					if (i === index - 1 || (index === 0 && i === arr.length - 1))
						position = "lastSlide"

					return <QualityCard position={position} item={item} key={item.title} />
				})}
			</div>
			<div className="flex justify-center items-center gap-2 min-[768px]:hidden">
				<button className="" onClick={() => setIndex((prev) => prev - 1)}>
					<MoveLeft className="w-[30px] stroke-[#FD661F] stroke-1" />
				</button>
				<button className="" onClick={() => setIndex((prev) => prev + 1)}>
					<MoveRight className="w-[30px] stroke-[#FD661F] stroke-1" />
				</button>
			</div>
		</div>
	)
}

export default Reasoning
