import Image from "next/image"

const QualityCard = ({ item, position }) => {
	return (
		<div
			className={`shrink-0 w-[200px] self-stretch text-center flex flex-col justify-start items-center ${position} transition-all ease-linear duration-1000`}
		>
			<div className={`p-[15px] inline-block rounded-[10px] ${item.color}`}>
				{item.icon}
			</div>
			<h1 className="mt-[15px] text-white font-Raleway text-2xl font-semibold tracing-[0.352px] max-[767px]:text-lg max-[767px]:font-medium max-[767px]:mt-[17px] min-[768px]:h-[64px]">
				{item.title}
			</h1>
			<p className="mt-[20px] text-white font-Raleway text-base font-light max-[767px]:text-xs max-[767px]:font-extralight">
				{item.text}
			</p>
		</div>
	)
}

export default QualityCard
