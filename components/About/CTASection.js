import React from "react";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
const CTASection = () => {
  const t = useTranslations("CTA");
	return (
		<section className="relative w-full min-h-[500px] flex flex-col justify-center items-center text-white overflow-hidden">
			{/* Imagen de Fondo con Overlay Oscuro */}
			<div
				className="absolute inset-0 z-0 bg-cover bg-center"
				style={{
					backgroundImage: 'url("/image/aboutus.png")',
				}}
			>
			</div>

			{/* Contenido Principal */}
			<div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center">
				<h2 className="text-xl md:text-3xl font-bold italic mb-6 tracking-tight">
					{t("title")}
				</h2>

				<p className="text-lg md:text-lg font-light leading-relaxed mb-10 max-w-2xl text-gray-200">
					{t("text")}
				</p>

				<button className="mx-auto w-fit border-2 bg-secundary px-10 py-3 rounded-2xl font-semibold hover:bg-black text-black hover:text-white transition">
					{t("buttonc")}
				</button>
			</div>

			{/* Footer / Contacto rápido inferior */}
			<div className="relative z-10 mt-16 w-full max-w-6xl px-6">
				<div className="flex flex-col items-center gap-6">
					<p className="text-sm font-bold uppercase tracking-[0.2em]">
						{t("text1")}
					</p>

					<div className="flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-gray-300">
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<MapPin size={18} />
							<span>Ubicación</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Mail size={18} />
							<span>Gmail</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Phone size={18} />
							<span>Telefono</span>
						</div>
						<div className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors">
							<Instagram size={18} />
							<span>Redes Sociales</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTASection;