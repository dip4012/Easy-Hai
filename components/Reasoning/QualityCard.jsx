import Image from "next/image"

const QualityCard = ({ item }) => {
	return (
		<div className="shrink-0 w-[243px] self-stretch text-center flex flex-col justify-start items-center max-[767px]:w-[210px]">
			<div className={`p-[15px] inline-block rounded-[10px] ${item.color}`}>
				<Image
					src="/assets/icons/woman-head.png"
					width={28}
					height={28}
					className="max-[767px]:w-[16.6px] max-[767px]:h-[16.6px]"
				/>
			</div>
			<div className="flex-1 flex flex-col justify-between items-center">
				<h1 className="mt-[34px] text-white font-Raleway text-2xl font-semibold tracing-[0.352px] max-[767px]:text-xs">
					{item.title}
				</h1>
				<p className="mt-[25px] text-white font-Raleway text-base font-medium max-[767px]:text-[10px]">
					{item.text}
				</p>
			</div>
		</div>
	)
}

export default QualityCard
