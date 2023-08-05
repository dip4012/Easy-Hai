import Image from "next/image"

const FeatureCard = ({ title }) => {
	return (
		<Image
			src={`/assets/images/${title}.png`}
			width={177}
			height={36}
			alt="feature logo"
			className="w-[100px] max-[767px]:w-[70px]"
		/>
	)
}

export default FeatureCard
