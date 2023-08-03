"use client"
import dynamic from "next/dynamic"
import DesktopCorporateSession from "@/components/Corporate Sessions/DesktopCorporateSession"
import Featured from "@/components/Featured Section/Featured"
import Footer from "@/components/Footer/Footer"
import FounderNote from "@/components/Founder Note/FounderNote"
import LandingPageHeader from "@/components/Header/LandingPageHeader"
// import PopularCourses from "@/components/Popular Courses/PopularCourses"
// import Reasoning from "@/components/Reasoning/Reasoning"
import Reviews from "@/components/Reviews Section/Reviews"

// non ssr components
const PopularCourses = dynamic(
	() => import("@/components/Popular Courses/PopularCourses"),
	{ ssr: false }
)

const Reasoning = dynamic(() => import("@/components/Reasoning/Reasoning"), {
	ssr: false,
})

export default function Home() {
	return (
		<main className="min-h-screen w-full scroll-smooth">
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

			{/* featured in */}
			<Featured />

			{/* reviews swction */}
			<Reviews />

			{/* footer */}
			<Footer />
		</main>
	)
}
