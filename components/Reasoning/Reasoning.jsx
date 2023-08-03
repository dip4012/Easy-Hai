"use client"
import { useEffect, useRef, useState } from "react"
import QualityCard from "./QualityCard"

const Reasoning = () => {
	const [listItems] = useState([
		{
			title: "Personalized Learning",
			text:
				"Interactive discussions that stimulate your mind, fearlessly ask tech questions",
			color: "green",
		},
		{
			title: "Expert Guidance",
			text:
				"Our courses are conducted by Shreya herself who specialize in teaching digital skills.",
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
				"Our Zoom classes allow you to learn from the comfort of your own home. ",
			color: "violet",
		},
		{
			title: "Community",
			text:
				"Make tech buddies by joining the curated community of other learners and mentors.",
			color: "purple",
		},
	])

	const ref = useRef()
	let carouselTimer

	useEffect(() => {
		document.getElementById("reasonList").scrollTo({
			left: 22.5,
			behavior: "smooth",
		})
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const handleResize = () => {
		clearInterval(carouselTimer)
		const reasonDiv = document.getElementById("reasonList")

		if (reasonDiv.scrollWidth > reasonDiv.clientWidth) {
			clearInterval(carouselTimer)
			carouselTimer = setInterval(() => {
				const widthPerElement = 243 + 45
				const totalScrollableOffset =
					22.5 + 4 * widthPerElement > reasonDiv.scrollWidth - reasonDiv.clientWidth
						? reasonDiv.scrollWidth - reasonDiv.clientWidth
						: 22.5 + 4 * widthPerElement

				if (reasonDiv.scrollLeft >= totalScrollableOffset) {
					reasonDiv.scrollTo({
						left: 22.5,
						behavior: "smooth",
					})
				} else {
					reasonDiv.scrollTo({
						left: reasonDiv.scrollLeft + widthPerElement,
						behavior: "smooth",
					})
				}
			}, 3000)
		}
	}
	return (
		<div className="w-full pt-[74px] pb-[93.9px] px-[92.14px] bg-[#262543] relative z-0 max-[767px]:pt-[38px] max-[767px]:pb-[96.56px] max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-white w-full font-Raleway text-5xl font-bold tracking-[0.768px] flex flex-wrap justify-center items-center gap-[4px] max-[767px]:justify-start max-[767px]:text-2xl max-[767px]:font-medium">
				<span className="section_graphic">Why Learn With Us?</span>
			</h1>

			<p className="w-full text-center mt-[54px] text-white font-Raleway text-sm font-normal tracing-[0.15px] max-[767px]:text-left">
				Veritatis voluptas sit eos nihil velit debitis. Illum dolor qu
			</p>

			{/* list points */}
			<div
				className="w-full mt-[100px] flex justify-center items-center"
				ref={ref}
			>
				<div
					className="flex gap-[45px] justify-start items-start overflow-x-scroll no-scrollbar max-[767px]:justify-start"
					id="reasonList"
				>
					<div></div>
					{listItems.map((item) => (
						<QualityCard item={item} key={item.title} />
					))}
					<div></div>
				</div>
			</div>
		</div>
	)
}

export default Reasoning
