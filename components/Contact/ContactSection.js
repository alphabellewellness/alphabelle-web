"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
	const t = useTranslations("Contact");

	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		email: "",
		phone: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setError(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const allFilled = Object.values(form).every((v) => v.trim() !== "");
		if (!allFilled) {
			setError(true);
			return;
		}
		setSubmitted(true);
	};

	return (
		<section className="w-full py-16 px-6 md:px-20 bg-gradient-to-br from-[#4a443a] via-[#332f28] to-[#1a1814] text-white">
			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

				{/* Columna Izquierda */}
				<div className="space-y-6">
					<div className="space-y-2">
						<h2 className="text-3xl md:text-4xl font-serif italic font-medium">
							{t("title")}
						</h2>
						<h3 className="text-xl md:text-2xl font-bold tracking-wider uppercase">
							{t("subTitle")}
						</h3>
					</div>
					<div>
						<p>{t("text")}</p>
					</div>
					<div>
						<p>{t("text1")}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-6 pt-4 text-gray-200">
						
						
						<div className="flex items-center gap-3">
							<Phone size={20} className="text-gray-400" />
							<span className="font-medium text-lg">{t("phoneE")}</span>
						</div>
						<div className="flex items-center gap-3">
							<Mail size={20} className="text-gray-400" />
							<span className="font-medium text-lg">{t("emailE")}</span>
						</div>
					</div>
				</div>

				{/* Columna Derecha: Formulario */}
				<div className="space-y-6">
					{submitted ? (
						<div className="flex items-center justify-center min-h-[320px]">
							<p className="text-white text-lg font-medium italic text-center">
								{t("successMessage")}
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

							{/* Nombre */}
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("name")}
								</label>
								<input
									type="text"
									name="nombre"
									value={form.nombre}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							{/* Apellido */}
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("lastName")}
								</label>
								<input
									type="text"
									name="apellido"
									value={form.apellido}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							{/* Correo */}
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("email")}
								</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							{/* Telefono */}
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("phone")}
								</label>
								<input
									type="tel"
									name="phone"
									value={form.phone}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none h-12 rounded-2xl"
								/>
							</div>

							{/* Mensaje */}
							<div className="flex flex-col gap-1 md:col-span-2">
								<label className="text-xs font-semibold uppercase tracking-tighter">
									{t("message")}
								</label>
								<textarea
									rows="4"
									name="message"
									value={form.message}
									onChange={handleChange}
									className="w-full p-3 bg-white text-black outline-none resize-none rounded-2xl"
								/>
							</div>

							{/* Error */}
							{error && (
								<p className="md:col-span-2 text-red-400 text-xs -mt-2">
									{t("error")}
								</p>
							)}

							{/* Botón Enviar */}
							<div className="md:col-span-2 flex justify-center mt-4">
								<button
									type="submit"
									className="mx-auto w-fit border-2 border-white px-10 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
								>
									{t("buttonE")}
								</button>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;