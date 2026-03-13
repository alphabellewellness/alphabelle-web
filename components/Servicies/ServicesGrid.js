
"use client";

import { useState } from "react";
import ServiceModal from "./Servicemodal";

 
const services = [
	{ name: "Toxina Botulínica Tipo A (Botox)" },
	{ name: "PRN (Polinucleótidos Regenerativos)" },
	{ name: "Rellenos Dérmicos (Ácido Hialurónico y Bioestimuladores)" },
	{ name: "PRP combinado con Microneedling (Dermapen)" },
	{ name: "Plasma Rico en Plaquetas (PRP)" },
	{ name: "Manejo Médico de Peso con Agonistas GLP-1 / GIP" },
	{ name: "Terapia de Reemplazo de Testosterona (TRT)" },
];
 
const ServicesGrid = () => {
	const [selectedService, setSelectedService] = useState(null);
 
	return (
		<>
			<section className="w-full py-20 bg-[#f2f0e9] flex flex-col items-center px-6">
				{/* Logo superior */}
				<div className="mb-10 flex flex-col items-center">
					<div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mb-2">
						<span className="text-xl font-light">AB</span>
					</div>
					<h2 className="text-2xl tracking-[0.2em] font-light uppercase text-gray-800">
						Alphabelle
					</h2>
				</div>
 
				{/* Título Principal */}
				<h3 className="text-3xl md:text-4xl font-bold text-[#333] mb-12 text-center">
					Quiero hacer mi reservación en...
				</h3>
 
				{/* Cuadrícula de Servicios */}
				<div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							onClick={() => setSelectedService(service)}
							className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center min-h-[100px] cursor-pointer border border-transparent hover:border-gray-200
                ${index === services.length - 1 ? "md:col-span-2 lg:col-start-2 lg:col-span-1" : ""}
              `}
						>
							<p className="text-gray-800 font-bold italic leading-tight px-4">
								{service.name}
							</p>
						</div>
					))}
				</div>
			</section>
 
			{/* Modal */}
			{selectedService && (
				<ServiceModal
					service={selectedService}
					onClose={() => setSelectedService(null)}
				/>
			)}
		</>
	);
};
 
export default ServicesGrid;
