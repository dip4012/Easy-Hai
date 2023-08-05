import Image from "next/image"
import Link from "next/link"

const CourseCard = ({ course }) => {
	return (
		<div className="w-[296px] rounded-[14px] bg-white shadow-[0_4px_25px_0_rgba(0,0,0,0.10)] flex-shrink-0 max-[767px]:w-[161px]">
			{/* course thumbnail image */}
			<Image
				src="/assets/images/dummy_course_image.png"
				width={334}
				height={179}
				style={{
					width: "100%",
					height: "50%",
				}}
				className="rounded-t-[14px]"
			/>
			{/* couse details */}
			<div className="w-full px-[16px] py-[18px] flex flex-col justify-start items-start gap-[30px] max-[767px]:px-[8.69px] max-[767px]:py-[9px] max-[767px]:gap-[15px]">
				<div className="shrink-0 w-full">
					{/* course timings */}
					<p className="text-[#3A3A48] font-Raleway text-xs font-semibold max-[767px]:text-[7px] max-[767px]:font-semibold">
						{course.days.join(", ")} - {`${course.startTime} to ${course.endTime}`}
					</p>

					{/* couse title */}
					<h1 className="text-[#350B63] font-Raleway text-base font-extrabold tracking-[0.388px] max-[767px]:text-[10px] max-[767px]:font-extrabold">
						{course.title}:
					</h1>

					{/* number of classes */}
					<p className="text-[#350B63] font-Raleway text-sm font-normal tracking-[0.388px] max-[767px]:text-[7px] max-[767px]:font-normal">
						{course.nofClasses} Live MasterClasses
					</p>
				</div>

				<div className="shrink-0 w-full">
					{/* platform */}
					<p className="text-[#777795] font-Raleway text-xs font-semibold max-[767px]:text-[7px] max-[767px]:font-semibold">
						Platform:
						<Link href="#" className="inline-block ml-[8px]">
							<Image
								src="/assets/icons/zoom_logo.png"
								width={30}
								height={8}
								className="max-[767px]:w-[16.288px] max-[767px]:h-[4.344px]"
							/>
						</Link>
					</p>

					{/* course price and course CTA */}
					<div className="w-full flex justify-between items-center">
						<div className="flex justify-center items-center gap-[8px]">
							<p className="text-[#FD661F] font-Inter text-base font-bold max-[767px]:text-[9px] max-[767px]:font-bold">
								&#8377; {course.price}
							</p>
							<p className="text-[#230F0F] font-Inter text-sm font-normal line-through max-[767px]:text-[8px] max-[767px]:font-normal">
								&#8377; {course.price * 1.2}
							</p>
						</div>
						{course.isAvailable ? (
							<button className="px-[20px] py-[10px] bg-[#350B63] text-white font-Raleway text-xs font-medium rounded-[5px] max-[767px]:px-[13.7px] max-[767px]:py-[6.86px] max-[767px]:text-[8px] max-[767px]:font-medium">
								Enroll Now
							</button>
						) : (
							<button className="px-[20px] py-[10px] bg-[#3B770B] text-white font-Raleway text-xs font-medium rounded-[5px] max-[767px]:px-[13.7px] max-[767px]:py-[6.86px] max-[767px]:text-[8px] max-[767px]:font-medium">
								Coming Soon
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseCard
