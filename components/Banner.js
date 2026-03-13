// components/Banner.js
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
	return (
		<section className="relative min-h-screen bg-[#f0ebe4] overflow-hidden flex flex-col">
			{/* Arco grande que cubre toda la parte superior */}
			<div
				className="absolute top-0 left-1/2 -translate-x-1/2 w-[110%] h-[75%] overflow-hidden pointer-events-none"
				style={{ borderRadius: "0 0 50% 50%" }}
			>
				<Image
					src="/images/banner.png"
					alt="Clínica Alphabelle Wellness"
					fill
					className="object-cover object-center opacity-90"
					priority
				/>
				{/* Overlay suave para que el texto sea legible */}
				<div className="absolute inset-0 bg-[#f0ebe4]/25" />
			</div>

			{/* Contenido encima del arco */}
			<div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-28 pb-16 text-center">
				{/* Logo SVG */}
				<div className="mb-3">
					<svg
						width="64"
						height="64"
						viewBox="0 0 64 64"
						fill="none"
						className="mx-auto"
					>
						<circle cx="32" cy="32" r="30" stroke="#3d3530" strokeWidth="1.2" />
						<text
							x="50%"
							y="54%"
							dominantBaseline="middle"
							textAnchor="middle"
							fontFamily="Georgia, serif"
							fontSize="22"
							fill="#3d3530"
							letterSpacing="1"
						>
							AB
						</text>
					</svg>
				</div>

				{/* Nombre */}
				<h1 className="font-serif text-4xl md:text-5xl tracking-[0.25em] uppercase text-stone-800 mb-1">
					Alphabelle
				</h1>
				<p className="text-xs tracking-[0.5em] uppercase text-stone-500 mb-8">
					Wellness
				</p>

				{/* Tagline */}
				<p className="text-stone-700 text-base md:text-lg font-light max-w-md leading-relaxed mb-10">
					Somos tu destino exclusivo con
					<br />
					precisión médica de vanguardia.
				</p>

				{/* CTA */}
				<Link
					href="/reserva"
					className="px-8 py-3 bg-stone-800 text-white text-xs tracking-widest uppercase hover:bg-stone-900 transition-colors duration-300"
				>
					Reserva tu consulta privada.
				</Link>
			</div>

			{/* Texto inferior */}
			<div className="relative z-10 px-6 pb-16 pt-2 max-w-2xl mx-auto text-center">
				<p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
					Hemos diseñado un espacio donde{" "}
					<strong className="font-semibold text-stone-800">
						la medicina regenerativa y la estética de alta gama
					</strong>{" "}
					convergen para potenciar la mejor versión de nuestros pacientes.
				</p>
			</div>

			{/* Círculo decorativo inferior derecho */}
			<div className="absolute bottom-0 right-0 w-32 h-32 border border-stone-300 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />
		</section>
	);
}
