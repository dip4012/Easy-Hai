import Image from "next/image"

const FeatureCard = ({ title }) => {
	return (
		<div className=" w-[280px] min-w-min h-[103px] shrink-0 flex justify-center items-center bg-[#E9E9E9] rounded-[15px] max-[767px]:gap-[24px] max-[785px]:w-full">
			<Image
				src={`/assets/images/${title}.png`}
				width={177}
				height={36}
				alt="feature logo"
				className="w-[40%] h-[40%]"
			/>
		</div>
	)
}

export default FeatureCard
