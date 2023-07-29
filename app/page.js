import DesktopCorporateSession from "@/components/Corporate Sessions/DesktopCorporateSession"
import FounderNote from "@/components/Founder Note/FounderNote"
import LandingPageHeader from "@/components/Header/LandingPageHeader"
import PopularCourses from "@/components/Popular Courses/PopularCourses"
import Reasoning from "@/components/Reasoning/Reasoning"

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

			{/* founder's note */}
			<FounderNote />
		</main>
	)
}
