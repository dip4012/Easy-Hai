import Image from "next/image"

const QualityCard = ({ item, position }) => {
	return (
		<div
			className={`shrink-0 w-[243px] self-stretch text-center flex flex-col justify-start items-center ${position} transition-all ease-linear duration-1000`}
		>
			<div className={`p-[15px] inline-block rounded-[10px] ${item.color}`}>
				<Image
					src="/assets/icons/woman-head.png"
					width={28}
					height={28}
					alt="quality thumbnail icon"
				/>
			</div>
			<div className="flex-1 flex flex-col justify-start items-center gap-[20px] max-[767px]:gap-[10px]">
				<h1 className="mt-[34px] text-white font-Raleway text-2xl font-semibold tracing-[0.352px] max-[767px]:text-lg max-[767px]:font-medium max-[767px]:mt-[17px]">
					{item.title}
				</h1>
				<p className="text-white font-Raleway text-base font-light max-[767px]:text-xs max-[767px]:font-extralight">
					{item.text}
				</p>
			</div>
		</div>
	)
}

export default QualityCard
