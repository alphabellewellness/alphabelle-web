
import AboutSection from "@/components/About/AboutSection";
import Banner from "@/components/Banner";
import ContactSection from "@/components/Contact/ContactSection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ServicesSection from "@/components/Servicies/ServicesSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import { Contact } from "lucide-react";

export default function Home() {
	
	return (
		<main>
			<HeroBanner />
			{/* <Banner /> */}
			<ServicesSection/>
			<AboutSection/>
			<TestimonialsSection/>
			<ContactSection/>
		</main>
	);
}	
