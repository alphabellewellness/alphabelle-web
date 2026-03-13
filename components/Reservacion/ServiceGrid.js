import React from "react";
import Image from "next/image";

const services = [
	{ name: "Toxina Botulínica\nTipo A (Botox)" },
	{ name: "PRN (Polinucleótidos\nRegenerativos)" },
	{ name: "Rellenos Dérmicos\n(Ácido Hialurónico y\nBioestimuladores)" },
	{ name: "PRP combinado con\nMicroneedling (Dermapen):" },
	{ name: "Plasma Rico en\nPlaquetas (PRP)" },
	{ name: "Manejo Médico de Peso\ncon Agonistas GLP-1 / GIP" },
	{ name: "Terapia de Reemplazo\nde Testosterona (TRT)" },
];

const ServiceGrid = () => {
	return (
		<section className="bg-[#f2f0e9] py-24 px-6 flex flex-col items-center">
			{/* Logo como Imagen */}
			<div className="mb-10 w-48 md:w-64">
				<Image
					src="/image/logo.png" // Reemplaza con la ruta de tu imagen
					alt="Alphabelle Wellness Logo"
					width={400}
					height={200}
					className="object-contain"
				/>
			</div>

			{/* Título */}
			<h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-12 text-center">
				Quiero hacer mi reservación en...
			</h2>

			{/* Grid de Servicios */}
			<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<div
						key={index}
						className={`bg-white p-8 rounded-2xl shadow-sm flex items-center justify-center text-center cursor-pointer 
                        hover:shadow-md transition-shadow duration-300 min-h-[120px]
                        ${index === services.length - 1 ? "lg:col-start-2" : ""}`}
					>
						<p className="text-[#333] font-bold italic leading-tight whitespace-pre-line text-lg">
							{service.name}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default ServiceGrid;
