"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// import corporate_image_1 from "../../public/assets/images/corporate_image_1.JPG"
// import corporate_image_2 from "../../public/assets/images/corporate_image_2.JPG"
// import corporate_image_3 from "../../public/assets/images/corporate_image_3.JPG"

const CoporateSessionCard = () => {
	const [images] = useState([
		"corporate_image_1",
		"corporate_image_2",
		"corporate_image_3",
	])
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((index) => index + 1)
		}, 4000)

		return () => clearInterval(timer)
	}, [index])

	useEffect(() => {
		const lastIndex = images.length - 1
		if (index > lastIndex) setIndex(0)
		if (index < 0) setIndex(lastIndex)
	}, [index, images])

	return (
		// {/* mobile view */}
		// {/* <div className="w-full max-w-[400px] mt-[50px] mx-auto bg-gray-500 rounded-[14px] shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] max-[767px]:mt-[30px] min-[768px]:hidden">
		// 	<Image
		// 		src="/assets/images/corporate_image.JPG"
		// 		width={381}
		// 		height={310}
		// 		className="w-full rounded-[14px]"
		// 	/>
		// 	<p className="w-full mt-[32px] p-[16px] text-center text-[#262543] font-Raleway text-base font-medium max-[767px]:text-xs">
		// 		Interactive discussions that stimulate your mind, fearlessly ask tech
		// 		questions
		// 	</p>
		// </div> */}

		// {/* desktop view */}
		<div className="w-full h-[500px] mt-[50px] bg-gray-500 rounded-[14px] flex justify-start items-center flex-wrap max-[800px]:h-auto">
			<div className="relative shrink-0 w-[50%] h-[500px] rounded-[14px] bg-center bg-cover max-[800px]:w-full max-[800px]:h-[300px] max-[800px]:bg-top">
				{images.map((item, i, arr) => {
					let position = "nextSlide"

					if (i === index) position = "activeSlide"
					if (i === index - 1 || (index === 0 && i === arr.length - 1))
						position = "lastSlide"

					return (
						<Image
							key={item}
							src={`/assets/images/${item}.JPG`}
							fill
							className={`${
								position === "activeSlide" ? "block" : "hidden"
							} overflow-hidden object-cover object-center rounded-[14px]`}
							alt={item}
						/>
					)
				})}
				<div className="absolute z-50 top-0 bottom-0 w-full h-full bg-gradient-to-r from-transparent from-0% via-94% via-transparent to-gray-500 max-[800px]:bg-gradient-to-b"></div>
			</div>
			<div className="flex-1 h-full p-[80px] text-[#E9E9E9] text-3xl font-Raleway max-[767px]:text-sm max-[767px]:p-[40px]">
				<Image
					src="/assets/icons/Quotes.svg"
					width={40}
					height={40}
					alt="quotes"
					className="max-[767px]:w-[20px] max-[767px]:h-[20px]"
				/>
				Interactive discussions that stimulate your mind, fearlessly ask tech
				questions
			</div>
		</div>
	)
}

export default CoporateSessionCard
