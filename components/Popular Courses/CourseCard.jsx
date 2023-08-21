"use client"

import { Bookmark, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import {
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverFooter,
	PopoverArrow,
	PopoverCloseButton,
	PopoverAnchor,
} from "@chakra-ui/react"

import { ShareSocial } from "react-share-social"

const CourseCard = ({ course }) => {
	const [saved, setSaved] = useState(false)
	return (
		<div className="shrink-0 w-[375px] h-[389px] rounded-[14px] bg-white shadow-[0_4px_25px_0_rgba(0,0,0,0.10)]">
			{/* course thumbnail image */}
			<Image
				src={`/assets/images/${course.image}.JPG`}
				width={334}
				height={179}
				style={{
					width: "100%",
					height: "50%",
				}}
				className="shrink-0 rounded-t-[14px]"
				alt={course.title}
			/>
			{/* couse details */}
			<div className="w-full h-1/2 px-[16px] py-[18px] flex flex-col justify-between items-start">
				<div className="shrink-0 w-full">
					{/* category */}
					<div className="flex justify-between items-center">
						<p className="text-[#3A3A48] font-Raleway text-sm font-semibold">
							{course.category}
						</p>
						<div className="flex justify-center items-center gap-[10px]">
							<Bookmark
								className={`stroke-black ${
									saved && "fill-black"
								} w-[20px] h-[20px] cursor-pointer`}
								onClick={() => setSaved((prev) => !prev)}
							/>

							{/* share button setup */}
							<Popover>
								<PopoverTrigger>
									<button>
										<Send className="stroke-black w-[20px] h-[20px] cursor-pointer" />
									</button>
								</PopoverTrigger>
								<PopoverContent>
									<PopoverArrow />
									<PopoverCloseButton />
									<PopoverBody>
										<ShareSocial
											url={`example.com/${course.title.replace(/\s/g, "-").toLowerCase()}`}
											socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
											onSocialButtonClicked={(data) => console.log(data)}
										/>
									</PopoverBody>
								</PopoverContent>
							</Popover>
						</div>
					</div>

					{/* couse title */}
					<h1 className="text-[#350B63] mt-4 font-Raleway text-xl font-extrabold tracking-[0.388px]">
						{course.title}
					</h1>

					{/* course timings */}
					<p className="text-[#3A3A48] font-Raleway text-xs font-normal">
						{course.days.join(", ")} | {`${course.startTime} to ${course.endTime}`}
					</p>
				</div>

				<div className="shrink-0 w-full flex justify-between items-center">
					<div>
						<Image
							src="/assets/icons/graduation_cap.svg"
							width={35}
							height={35}
							className="inline-block mr-2 p-2 bg-black rounded-md"
						/>
						<p className="inline-block text-[#3A3A48] font-Raleway text-sm font-semibold">
							{course.nofClasses} sessions
						</p>
					</div>
					<div>
						<Image
							src="/assets/icons/video_cam.svg"
							width={35}
							height={35}
							className="inline-block mr-2 p-2 bg-black rounded-md"
						/>
						<p className="inline-block text-[#3A3A48] font-Raleway text-sm font-semibold">
							online
						</p>
					</div>
					{/* platform */}
					{/* <p className="text-[#777795] font-Raleway text-xs font-semibold">
						Platform:
						<Link href="#" className="inline-block ml-[8px]">
							<Image
								src="/assets/icons/zoom_logo.png"
								width={30}
								height={8}
								className=""
								alt="zoom logo"
							/>
						</Link>
					</p> */}

					{/* {course.isAvailable ? (
						<button className="px-[20px] py-[10px] bg-[#350B63] text-white font-Raleway text-xs font-medium rounded-[5px]">
							Enroll Now
						</button>
					) : (
						<div className="px-[20px] py-[10px] bg-white ring-[#3B770B] ring-2 animate-pulse text-[#3B770B] font-Raleway text-xs font-semibold rounded-[5px]">
							Coming Soon
						</div>
					)} */}

					{/* course price and course CTA */}
					{/* <div className="w-full flex justify-between items-center mt-[10px] max-[767px]:mt-[5px]"> */}
					{/* <div className="flex justify-center items-center gap-[8px]">
							<p className="text-[#FD661F] font-Inter text-base font-bold max-[767px]:text-[9px] max-[767px]:font-bold">
								&#8377; {course.price}
							</p>
							<p className="text-[#230F0F] font-Inter text-sm font-normal line-through max-[767px]:text-[8px] max-[767px]:font-normal">
								&#8377; {course.price * 1.2}
							</p>
						</div> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	)
}

export default CourseCard
