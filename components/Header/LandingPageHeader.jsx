import Image from "next/image"
import NavBar from "./NavBar"
import HeaderContent from "./HeaderContent"
import Link from "next/link"

const LandingPageHeader = () => {
	return (
		<div className="h-[729px] w-full bg-[#8940FF] rounded-b-[30px] px-[105px] py-[43px] relative z-0 overflow-hidden max-[1420px]:px-0">
			{/* background potrait image */}
			<Image
				src="/assets/images/header_potrait.png"
				alt="header background image"
				width={1537}
				height={864}
				className="min-h-[650px] max-h-[650px] min-w-[1156.30px] max-w-[1156.30px] absolute bottom-0 right-[-200px] z-[-1] max-[1420px]:bottom-[30px] max-[1420px]:right-[50%] max-[1420px]:translate-x-[50%]"
			/>

			<Image
				src="/assets/images/header_vector.svg"
				alt="header abstract vector"
				width={850}
				height={205}
				className="min-h-[205px] max-h-[205px] min-w-[850px] max-w-[850px] absolute top-0 left-0 right-0 mx-auto z-[-2]"
			/>

			{/* header floating icon 1 */}
			{/* <Image
				src="/assets/images/header icon 1.png"
				width={149}
				height={149}
				className="absolute bottom-[297px] right-[91px] max-[767px]:hidden z-[1]"
				alt="arbitrary icon"
			/> */}

			{/* assisted student floating box */}
			{/* <div className="flex gap-[32px] items-center px-[28px] py-[15px] w-[300px] h-[100px] rounded-[20px] backdrop-blur-[100px] bg-white/50 absolute right-[350px] bottom-[185px] max-[1420px]:hidden z-[2]">
				<div className="w-[50px] h-[50px] rounded-[8px] bg-[#350B63] flex justify-center items-center">
					<Image
						src="/assets/images/header icon 2.png"
						width={27.5}
						height={27.5}
						alt="header icon"
					/>
				</div>
				<div>
					<h1 className="text-[#595959] font-Nunito text-2xl font-bold tracking-[0.48px]">
						250k
					</h1>
					<p className="text-[#545567] font-Nunito text-xl font-semibold tracking-[0.4px]">
						Assisted student
					</p>
				</div>
			</div> */}

			{/* navigation bar */}
			<NavBar />

			{/* Header content */}
			<HeaderContent />

			<Link href="#popular_courses">
				<Image
					src="/assets/icons/scroll_down.svg"
					width={50}
					height={50}
					alt="scroll down button"
					className="absolute z-50 bottom-[20px] left-0 right-0 mx-auto animate-bounce max-[767px]:w-[30px] max-[767px]:h-[30px]"
				/>
			</Link>
		</div>
	)
}

export default LandingPageHeader
