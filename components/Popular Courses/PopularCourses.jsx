"use client"
import Image from "next/image"
import { useState } from "react"
import CourseCard from "./CourseCard"

const PopularCourses = () => {
	const [categories, setCategories] = useState([
		"All Programme",
		"Category 1",
		"Category 2",
		"Category3",
		"Category 4",
	])

	const [selectedCategory, setSelectedCategory] = useState("All Programme")

	const [courses, setCourses] = useState([
		{
			title: "Instagram for Business",
			nofClasses: 10,
			days: ["Tuesday", "Saturday"],
			startTime: "6:00pm",
			endTime: "8:00pm",
			isAvailable: false,
			price: 380,
		},
		{
			title: "Canva Champ Course",
			nofClasses: 5,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
		},
		{
			title: "LinkedIn Mastery Course",
			nofClasses: 5,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
		},
		{
			title: "Google Sheets Course",
			nofClasses: 10,
			days: ["Saturday", "Sunday"],
			startTime: "11:00am",
			endTime: "1:00pm",
			isAvailable: true,
			price: 380,
		},
	])

	return (
		<section className="w-full pt-[77.02px] pb-[131px] px-[90.5px] max-[767px]:px-[20px] bg-white relative z-0">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-left max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				Popular{" "}
				<span className="relative">
					<span className="section_graphic">Courses</span>
				</span>
			</h1>

			{/* category list */}
			<div className="w-full flex justify-center items-center mt-[46px]">
				<div className="flex gap-[24px] justify-start items-center overflow-x-scroll no-scrollbar">
					{categories.map((category) => (
						<div
							className={`px-[20px] py-[10px] ${
								selectedCategory === category
									? "bg-[#350B63] text-white border-none"
									: "bg-white text-[#818C96] border border-solid border-[#C4C4C4]"
							} rounded-[5px] whitespace-nowrap cursor-pointer`}
							key={category}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</div>
					))}
				</div>
			</div>

			{/* courses list */}
			<div className="p-[40px] flex justify-center items-center gap-[25px] flex-wrap mt-[61px] max-[767px]:justify-start max-[767px]:flex-nowrap max-[767px]:overflow-x-scroll no-scrollbar">
				{courses.map((course) => (
					<CourseCard key={course.title} course={course} />
				))}
			</div>
		</section>
	)
}

export default PopularCourses
