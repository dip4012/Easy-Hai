import styles from "@/styles/globals.css"
const HeaderContent = () => {
	return (
		<div className="absolute z-[3] w-[53%] pt-[62.74px] max-[767px]:w-full max-[767px]:px-[20px] max-[767px]:pb-[71.04px] max-[767px]:pt-[53.12px] max-[767px]:bottom-0 max-[767px]:rounded-b-[25px] max-[767px]:bg-gradient-to-b max-[767px]:from-transparent max-[767px]:via-[#8B20FF] max-[767px]:via-70% max-[767px]:to-[#6D1CC5] max-[767px]:to-100% max-[767px]:backdrop-blur-[1px]">
			<h1 className="w-full text-white font-Raleway text-[64px] font-bold leading-[75px] max-[767px]:text-[30px] max-[767px]:leading-[40px]">
				Courses Designed To Help Older Adults Get Digitally{" "}
				<span className="relative">
					<span className="header_graphic">Independent</span>
				</span>
			</h1>

			<p className="w-[70%] mt-[30.82px] text-[#FFFDF5] font-Raleway text-base font-normal leading-[23px] max-[767px]:w-full max-[767px]:mt-[15px] max-[767px]:text-xs max-[767px]:font-extralight">
				Courses made to boost your confidence with our bespoke, user-friendly
				courses, specifically tailored for adults and seniors. Seamlessly integrate
				technology into your daily life with our fun, practical approach.
			</p>

			<button className="bg-[#FFD836] px-[30px] py-[20px] rounded-[10px] mt-[24px] text-[#350B63] font-Raleway text-base font-medium tracking-[0.32px] max-[767px]:px-[15px] max-[767px]:py-[10px] max-[767px]:mt-[12px] max-[767px]:text-xs max-[767px]:font-light">
				Explore
			</button>
		</div>
	)
}

export default HeaderContent
