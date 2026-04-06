
import BackgroundWrapper from "@/components/BackgroundWrapper";
import ContactSection from "@/components/Contact/ContactSection";
import MapSection from "@/components/Contact/Mapsection";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import ServicesSection from "@/components/Servicies/ServicesSection";

export default function Home() {
	
	return (
		<main>
			<HeroBanner />
			<ServicesSection/>
			<BackgroundWrapper/>
			<ContactSection/>
			<MapSection/>
		</main>
	);
}	
