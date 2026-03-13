import React from "react";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

const AboutUsComponent = ({ t }) => {
	return (
		<section className="relative w-full py-20 bg-white overflow-hidden flex flex-col items-center">
			{/* Decoración Circular Izquierda */}
			<div className="absolute left-[-100px] top-20 w-[400px] h-[400px] border border-gray-200 rounded-full z-0" />

			{/* Header / Logo y Texto Superior */}
			<div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6 mb-16">
				<div className="mb-8">
					<Image
						src="/image/logo.png"
						alt="AlphaBelle Wellness"
						width={280}
						height={280}
						className="object-contain"
					/>
				</div>
				<p className="text-gray-600 leading-relaxed font-light italic">
					{t("subTitle")}
				</p>
			</div>

			{/* Layout de Grid / Posicionamiento */}
			<div className="relative w-full max-w-5xl h-[700px] md:h-[600px] px-6">
				{/* Contenedor de Título + Texto (Derecha) */}
				<div className="absolute right-0 md:right-10 top-0 flex flex-col items-end max-w-md text-right">
					<h3 className="text-4xl md:text-x4l font-black italic text-negro uppercase tracking-tighter">
						{t("heading")}
					</h3>
					<p className="mt-4 text-gray-600 font-light leading-relaxed">
						{t("text")}
					</p>
				</div>

				{/* Tarjeta de Imagen Principal (Gris Claro) */}
				<div className="absolute left-10 top-10 w-64 h-80 bg-[#f2f0e9] rounded-[2rem] shadow-sm overflow-hidden flex items-center justify-center">
					{/* Placeholder para imagen de equipo o clínica */}
					<div className="text-gray-400 italic">Imagen Principal</div>
				</div>

				{/* Tarjeta MISIÓN (Derecha) */}
				<div className="absolute right-0 bottom-24 w-full max-w-md">
					<div className="relative bg-[#f2f0e9] p-8 rounded-2xl">
						{/* Icono Flotante Misión */}
						<div className="absolute -top-6 -right-6 w-16 h-16 bg-[#333] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
							<Image
								src="/image/icons/icono misión.png"
								alt="Misión"
								width={35}
								height={35}
								className="object-contain invert" // 'invert' si el icono original es negro y lo quieres blanco
							/>
						</div>
						<h4 className="text-center font-bold italic text-lg mb-2">
							Misión
						</h4>
						<p className="text-sm text-center text-gray-700 font-light">
							{/* Aquí puedes llamar a t("mision_content") */}
							Brindar soluciones de bienestar con la más alta precisión médica.
						</p>
					</div>
				</div>

				{/* Tarjeta VISIÓN (Izquierda inferior) */}
				<div className="absolute left-0 bottom-0 w-full max-w-sm">
					<div className="relative bg-[#f2f0e9] p-6 rounded-2xl">
						{/* Icono Flotante Visión */}
						<div className="absolute -top-6 -left-6 w-16 h-16 bg-[#333] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
							<Image
								src="/image/icons/icono visión.png" // Asegúrate de que el nombre sea correcto
								alt="Visión"
								width={35}
								height={35}
								className="object-contain invert"
							/>
						</div>
						<h4 className="text-center font-bold italic text-lg mb-2">
							Visión
						</h4>
						<p className="text-sm text-center text-gray-700 font-light">
							Ser referentes internacionales en medicina regenerativa.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUsComponent;
