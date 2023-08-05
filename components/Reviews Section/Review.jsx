import Image from "next/image"

const Review = ({ review }) => {
	return (
		<div className="w-full h-[350px] px-[65px] pt-[55px] pb-[36px] rounded-[15px] bg-[#E8E0D5] mt-[52px] flex flex-col justify-start gap-[21px] overflow-y-scroll no-scrollbar max-[767px]:px-[21px]">
			{review.messages.map((message) => (
				<div
					key={message}
					className={`${
						message.sender === "owner"
							? "self-start text-left bg-white rounded-tl-none"
							: "self-end text-right bg-[#D3FFC8] rounded-tr-none"
					} max-w-[70%] p-[8px] rounded-[4px] flex flex-col justify-start items-start gap-[4px] relative`}
				>
					<Image
						src={`/assets/icons/${
							message.sender === "owner" ? "white" : "green"
						}_chat_tick_vector.png`}
						width={7}
						height={7}
						alt="chat vector"
						className={`absolute ${
							message.sender === "owner" ? "right-full" : "left-full"
						} top-0`}
					/>
					<p className="w-full text-black text-base font-normal font-Roboto max-[767px]:text-[10px]">
						{message.text}
					</p>
					<p className="w-full text-[#9DA3A7] text-right font-Roboto text-sm font-normal max-[767px]:text-[9px]">
						{new Date().toLocaleString("en-US", {
							hour: "numeric",
							minute: "numeric",
							hour12: true,
						})}
					</p>
				</div>
			))}
		</div>
	)
}

export default Review
