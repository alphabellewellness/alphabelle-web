import React from "react";
import { Phone, Mail } from "lucide-react"; // Opcional: usando lucide-react para los iconos

const ContactSection = () => {
	return (
		<section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#4a443a] via-[#332f28] to-[#1a1814] text-white">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				{/* Columna Izquierda: Texto e Info */}
				<div className="space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl md:text-4xl font-serif italic font-medium">
							Solicitud de información
						</h2>
						<h3 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
							PROGRAMA TU CONSULTA
						</h3>
					</div>

					<p className="text-gray-300 leading-relaxed max-w-md font-light">
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat.
					</p>

					<div className="flex flex-col sm:flex-row gap-6 pt-4 text-gray-200">
						<div className="flex items-center gap-3">
							<Phone size={20} className="text-gray-400" />
							<span className="font-medium text-lg">Telefono</span>
						</div>
						<div className="flex items-center gap-3">
							<Mail size={20} className="text-gray-400" />
							<span className="font-medium text-lg">Gmail</span>
						</div>
					</div>
				</div>

				{/* Columna Derecha: Formulario */}
				<div className="space-y-6">
					<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Nombre */}
						<div className="flex flex-col gap-1">
							<label className="text-xs font-semibold uppercase tracking-tighter">
								Nombre
							</label>
							<input
								type="text"
								className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
							/>
						</div>
						{/* Apellido */}
						<div className="flex flex-col gap-1">
							<label className="text-xs font-semibold uppercase tracking-tighter">
								Apellido
							</label>
							<input
								type="text"
								className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
							/>
						</div>
						{/* Correo */}
						<div className="flex flex-col gap-1">
							<label className="text-xs font-semibold uppercase tracking-tighter">
								Correo
							</label>
							<input
								type="email"
								className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
							/>
						</div>
						{/* Telefono */}
						<div className="flex flex-col gap-1">
							<label className="text-xs font-semibold uppercase tracking-tighter">
								Telefono
							</label>
							<input
								type="tel"
								className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
							/>
						</div>
						{/* Mensaje */}
						<div className="flex flex-col gap-1 md:col-span-2">
							<label className="text-xs font-semibold uppercase tracking-tighter">
								Mensaje
							</label>
							<textarea
								rows="4"
								className="w-full p-3 bg-white text-black outline-none resize-none rounded-2xl"
							></textarea>
						</div>

						{/* Botón Enviar */}
						<div className="md:col-span-2 flex justify-center mt-4">
							<button
								type="submit"
								className="mt-20 mx-auto w-fit border-2 border-secundary px-10 py-3 rounded-2xl font-semibold hover:bg-black hover:text-white transition"
							>
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
