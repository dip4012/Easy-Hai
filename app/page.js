import DesktopCorporateSession from "@/components/Corporate Sessions/DesktopCorporateSession"
import LandingPageHeader from "@/components/Header/LandingPageHeader"
import PopularCourses from "@/components/Popular Courses/PopularCourses"
import Reasoning from "@/components/Reasoning/Reasoning"
import Image from "next/image"

export default function Home() {
	return (
		<main className="min-h-screen w-full">
			{/* header banner section */}
			<LandingPageHeader />

			{/* popular courses secion */}
			<PopularCourses />

			{/* reasoning section */}
			<Reasoning />

			{/* corporate sessions */}
			<DesktopCorporateSession />
		</main>
	)
}
