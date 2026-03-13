import ContactSection from "@/components/Contact/ContactSection";
import ServiceGrid from "@/components/Reservacion/ServiceGrid";
import { Contact } from "lucide-react";


export default function ReservationPage() {
    return (
        <main>
            <ServiceGrid/>
            <ContactSection/>
        </main>
    );
}