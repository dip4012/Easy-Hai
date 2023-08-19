"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import CourseCard from "./CourseCard"

const PopularCourses = () => {
	const [categories, setCategories] = useState([
		"All Courses",
		"Workshops",
		"Masterclasses",
	])

	const [selectedCategory, setSelectedCategory] = useState("All Courses")

	const [courses, setCourses] = useState([
		{
			title: "Instagram for Business",
			nofClasses: 10,
			days: ["Tuesday", "Saturday"],
			startTime: "6:00pm",
			endTime: "8:00pm",
			isAvailable: false,
			price: 380,
			image: "instagram",
		},
		{
			title: "Canva Champ Course",
			nofClasses: 5,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
			image: "canva",
		},
		{
			title: "LinkedIn Mastery Course",
			nofClasses: 5,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
			image: "linkedin",
		},
		{
			title: "Google Sheets Course",
			nofClasses: 10,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
			image: "google_sheets",
		},
	])

	// const [showScrollIndicator, setShowScrollIndicator] = useState(false)
	// const ref = useRef()

	// useEffect(() => {
	// 	document.getElementById("coursesList").scrollTo({
	// 		left: 12.5,
	// 		behavior: "smooth",
	// 	})
	// 	handleResize()
	// 	window.addEventListener("resize", handleResize)
	// 	return () => window.removeEventListener("resize", handleResize)
	// }, [])

	// const handleResize = () => {
	// 	const coursesCount = courses.length
	// 	// const widthPerElement = Number(window.innerWidth) > 767 ? 296 : 161
	// 	const widthPerElement = 296
	// 	if (
	// 		Number(ref.current.clientWidth) >
	// 		widthPerElement * coursesCount + 25 * (coursesCount + 1) + 40
	// 	) {
	// 		setShowScrollIndicator(false)
	// 	} else {
	// 		setShowScrollIndicator(true)
	// 	}
	// }

	// const handleClick = () => {
	// 	const coursesListDiv = document.getElementById("coursesList")
	// 	const coursesCount = courses.length
	// 	// const widthPerElement = (Number(window.innerWidth) > 767 ? 296 : 161) + 25
	// 	const widthPerElement = 296 + 25
	// 	const totalScrollableOffset =
	// 		12.5 + (coursesCount - 1) * widthPerElement >
	// 		coursesListDiv.scrollWidth - coursesListDiv.clientWidth
	// 			? coursesListDiv.scrollWidth - coursesListDiv.clientWidth
	// 			: 12.5 + (coursesCount - 1) * widthPerElement

	// 	if (coursesListDiv.scrollLeft >= totalScrollableOffset) {
	// 		coursesListDiv.scrollTo({
	// 			left: 12.5,
	// 			behavior: "smooth",
	// 		})
	// 	} else {
	// 		coursesListDiv.scrollTo({
	// 			left: coursesListDiv.scrollLeft + widthPerElement,
	// 			behavior: "smooth",
	// 		})
	// 	}
	// }

	return (
		<section
			className="w-full py-[50px] px-[74px] max-[767px]:px-[4px] bg-white relative z-0"
			id="popular_courses"
		>
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">Popular Courses</span>
			</h1>

			{/* category list */}
			<div className="w-full px-[16px] flex justify-center items-center mt-[80px] max-[767px]:mt-[50px]">
				<div className="flex gap-[24px] justify-start items-center flex-wrap max-[767px]:gap-[12px]">
					{categories.map((category) => (
						<div
							className={`px-[20px] py-[10px] ${
								selectedCategory === category
									? "bg-[#350B63] text-white border-none"
									: "bg-white text-[#818C96] border border-solid border-[#C4C4C4]"
							} rounded-[5px] whitespace-nowrap cursor-pointer text-xs font-medium font-Raleway max-[767px]:text-[12px] max-[767px]:font-light max-[767px]:px-[8px] max-[767px]:py-[8px]`}
							key={category}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</div>
					))}
				</div>
			</div>

			{/* courses list */}
			<div className="w-full mt-[20px] flex justify-center items-center relative">
				{/* <button
					className={`absolute top-50% right-[10px] rounded-full bg-[#350B63] z-1 p-[10px] animate-bounceHorizontal ${
						!showScrollIndicator && "hidden"
					}`}
					onClick={handleClick}
				>
					<Image
						src="/assets/icons/forward_icon.svg"
						width={20}
						height={20}
						alt="forward icon"
						className=""
					/>
				</button> */}
				<div
					className="px-[16px] py-[25px] flex justify-start items-stretch gap-[25px] overflow-x-scroll no-scrollbar"
					id="coursesList"
				>
					{courses.map((course) => (
						<CourseCard key={course.title} course={course} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PopularCourses
