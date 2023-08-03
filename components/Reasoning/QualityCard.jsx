import Image from "next/image"

const QualityCard = ({ item }) => {
	return (
		<div className="shrink-0 w-[243px] self-stretch text-center flex flex-col justify-start items-center">
			<div className={`p-[15px] inline-block rounded-[10px] ${item.color}`}>
				<Image src="/assets/icons/woman-head.png" width={28} height={28} />
			</div>
			<div className="flex-1 flex flex-col justify-start items-center gap-[20px]">
				<h1 className="mt-[34px] text-white font-Raleway text-2xl font-semibold tracing-[0.352px]">
					{item.title}
				</h1>
				<p className="text-white font-Raleway text-base font-medium">{item.text}</p>
			</div>
		</div>
	)
}

export default QualityCard
