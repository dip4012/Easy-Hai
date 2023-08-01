"use client"

import { useEffect, useState } from "react"
import ReviewUserCard from "./ReviewUserCard"
import Image from "next/image"
import Review from "./Review"

const Reviews = () => {
	const [reviews, setReviews] = useState([
		{
			id: 1,
			name: "Raymond Holt",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
		{
			id: 2,
			name: "Rosa Diaz",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
		{
			id: 3,
			name: "Jake Peralta",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
		{
			id: 4,
			name: "Charles Boyle",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
		{
			id: 5,
			name: "Amy Santiago",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
		{
			id: 6,
			name: "Gina Linetti",
			title: "Lorem, ipsum",
			messages: [
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "owner",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
				{
					sender: "user",
					text:
						"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, reprehenderit!",
				},
			],
		},
	])

	const [selectedIndex, setSelectedIndex] = useState(0)

	useEffect(() => {
		const scrollDivToElement = () => {
			const div = document.getElementById("review_card_list")
			div.scrollTo({
				left: 233 * selectedIndex,
				behavior: "smooth",
			})
		}

		scrollDivToElement()
	}, [selectedIndex])

	return (
		<section className="w-full px-[90px] pt-[50px] pb-[80px] bg-white relative z-0 max-[767px]:px-[20px]">
			{/* section header */}
			<h1 className="text-[#350B63] font-Raleway text-5xl font-bold leading-[62.4px] tracking-[-2.88px] text-center max-[767px]:text-left max-[767px]:text-2xl max-[767px]:leading-[31.2px] max-[767px]:tracking-[-1.44px]">
				<span className="section_graphic">What Our Students Has to Say?</span>
			</h1>

			{/* reviews user card list */}
			<div
				id="review_card_list"
				className="w-full flex justify-start items-center gap-[16px] overflow-x-scroll no-scrollbar mt-[45px] p-[20px]"
			>
				{reviews.map((review, index) => (
					<ReviewUserCard
						key={review.id}
						review={review}
						selected={selectedIndex == index}
						index={index}
						setSelectedIndex={setSelectedIndex}
					/>
				))}
			</div>

			{/* selected review */}
			<Review review={reviews[selectedIndex]} />

			{/* navigation buttons */}
			<div className="flex justify-center items-center gap-[24px] mt-[37px]">
				<button
					onClick={() => {
						setSelectedIndex((prevIndex) =>
							prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
						)
					}}
				>
					<Image
						src="/assets/icons/arrowup.png"
						width={40}
						height={40}
						alt="previous review button"
					/>
				</button>
				<button
					onClick={() => {
						setSelectedIndex((prevIndex) =>
							prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
						)
					}}
				>
					<Image
						src="/assets/icons/arrowdown.png"
						width={40}
						height={40}
						alt="next review button"
					/>
				</button>
			</div>
		</section>
	)
}

export default Reviews
