import Image from "next/image"

const FeatureCard = ({ title }) => {
	return (
		<div className="w-[280px] h-[103px] flex justify-center items-center bg-[#E9E9E9] rounded-[15px] max-[645px]:w-[140px] max-[645px]:h-[60px]">
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
