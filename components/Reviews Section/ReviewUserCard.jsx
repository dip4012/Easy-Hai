import Image from "next/image"

const ReviewUserCard = ({ review, selected, index, setSelectedIndex }) => {
	return (
		<div
			className={`w-[225px] self-stretch rounded-[15px] shrink-0 flex justify-center items-center gap-[16px] px-[20px] py-[10px] bg-white shadow-[0_0_25px_0_rgba(0,0,0,0.05)] border-[2px] ${
				selected && "border-[#350B63]"
			} max-[767px]:w-[150px] max-[767px]:px-[10px] max-[767px]:py-[8px] max-[767px]:gap-[8px]`}
			onClick={() => setSelectedIndex(index)}
		>
			<Image
				src="/assets/images/review_user_image.png"
				width={73}
				height={73}
				alt="user profile image"
				className="rounded-full w-[70px] h-[70px] max-[767px]:w-[35px] max-[767px]:h-[35px]"
			/>
			<div className="flex flex-col justify-center items-start">
				<h1 className="text-[#202020] font-Raleway text-base font-medium max-[767px]:text-xs max-[767px]:font-normal">
					{review.name}
				</h1>
				<p className="text-[#808080] font-Raleway text-sm font-normal max-[767px]:text-[10px] max-[767px]:font-light">
					{review.title}
				</p>
			</div>
		</div>
	)
}

export default ReviewUserCard
