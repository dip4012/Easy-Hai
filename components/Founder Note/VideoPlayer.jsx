import dynamic from "next/dynamic"
import Image from "next/image"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

const VideoPlayer = () => {
	return (
		<div className="w-full pt-[70px] rounded-[15px] aspect-video">
			<ReactPlayer
				playing
				url="https://www.youtube.com/watch?v=vna6mm5iJUc?origin=http://localhost:3000"
				width={"100%"}
				height={"100%"}
				playIcon={
					<button className="w-[80px] h-[80px] bg-[#350B63] text-white rounded-full flex justify-center items-center">
						<Image src="/assets/icons/play_icon.svg" width={32} height={32} />
					</button>
				}
				light={
					<Image
						src="/assets/images/video_thumbnail.png"
						alt="Thumbnail image"
						width={1258}
						height={638}
						className="absolute z-[-1] w-full h-full"
					/>
				}
				style={{
					borderRadius: "15px",
					position: "relative",
					aspectRatio: "16/9",
				}}
			/>
		</div>
	)
}

export default VideoPlayer
