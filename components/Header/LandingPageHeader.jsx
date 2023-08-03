import Image from "next/image"
import NavBar from "./NavBar"
import HeaderContent from "./HeaderContent"

const LandingPageHeader = () => {
	return (
		<div className="h-[729px] w-full bg-[#8940FF] rounded-b-[30px] px-[105px] py-[43px] relative overflow-hidden max-[767px]:px-0 max-[767px]:h-[729px]">
			{/* background potrait image */}
			<Image
				src="/assets/images/studio-portrait-bearded-man-standing-beige-background-wears-casual-shirt-glasses-smiling-showing-thumbs-up-sign-into-camera 1.png"
				alt="header background image"
				width={663}
				height={612}
				className="min-h-[612px] min-w-[663px] absolute bottom-0 right-[92.19px] z-[1] max-[767px]:bottom-[30px] max-[767px]:right-[50%] max-[767px]:translate-x-[39%]"
			/>

			{/* header floating icon 1 */}
			<Image
				src="/assets/images/header icon 1.png"
				width={149}
				height={149}
				className="absolute bottom-[297px] right-[91px] max-[767px]:hidden z-[1]"
			/>

			{/* assisted student floating box */}
			<div className="flex gap-[32px] items-center px-[28px] py-[15px] w-[300px] h-[100px] rounded-[20px] backdrop-blur-[100px] bg-white/50 absolute right-[420px] bottom-[185px] max-[767px]:hidden z-[2]">
				<div className="w-[50px] h-[50px] rounded-[8px] bg-[#350B63] flex justify-center items-center">
					<Image src="/assets/images/header icon 2.png" width={27.5} height={27.5} />
				</div>
				<div>
					<h1 className="text-[#595959] font-Nunito text-2xl font-bold tracking-[0.48px]">
						250k
					</h1>
					<p className="text-[#545567] font-Nunito text-xl font-semibold tracking-[0.4px]">
						Assisted student
					</p>
				</div>
			</div>

			{/* navigation bar */}
			<NavBar />

			{/* Header content */}
			<HeaderContent />
			{/* <div className=""></div> */}
		</div>
	)
}

export default LandingPageHeader
