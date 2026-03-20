"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Menu } from "lucide-react";

const NavBar = () => {
	const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false); // <-- estado para scroll
	const t = useTranslations("NavBar");
	const localActive = useLocale();


 const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();

	const toggleLocale = () => {
	const newLocale = locale === "en" ? "es" : "en";
	const newPath = `/${newLocale}${pathname.replace(`/${locale}`, "")}`;
	router.replace(newPath);
	};

	const links = [
		{ name: "links1", href: "href1", current: false },
		{ name: "links2", href: "href2", current: false },
		{ name: "links3", href: "href3", current: false },
		// { name: "links4", href: "href4", current: false },
	];

	const showSideMenu = () => setisSideMenuOpen(!isSideMenuOpen);

	// Detectar scroll
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`p-2 lg:p-2 mt-0 fixed w-full z-40 top-0 shadow-lg transition-colors duration-500 ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="mx-auto flex items-center justify-between px-10">
				<div className="flex w-32 lg:w-1/2 md:justify-start text-negro font-extrabold">
					<Link href="/" passHref>
						<div style={{ width: "35px" }}>
							<Image
								src="/image/iso_n.svg"
								alt="Logo"
								width="484"
								height="326"
							/>
						</div>
					</Link>
				</div>
				<div className="flex lg:content-center justify-between md:w-1/2 md:justify-end">
					<ul className="list-reset hidden lg:flex justify-between flex-1 md:flex-none items-center">
						<li className="mr-3 flex space-x-3">
							{links.map((link) => (
								<Link
									key={link.name}
									href={`/${localActive}/${t(link.href)}`}
									className="px-3 py-2  text-md lg:text-lg text-negro hover:text-secundary transition-colors"
								>
									{t(link.name)}
								</Link>
							))}
							<button
								className="rounded-2xl font-bold text-white bg-negro lg:px-5 lg:py-1 hover:bg-secundary transition-colors"
								type="submit"
							>
								<a href={`/${localActive}/#contact`}>{t("buttonCont")}</a>
							</button>
							<button
								onClick={toggleLocale}
								className="rounded-full font-light text-black px-4 py-1 bg-rosado hover:bg-morado text-sm"
							>
								{locale === "en" ? "ES" : "EN"}
							</button>
						</li>
					</ul>

					{/* Botón para menu móvil */}
					<button
						aria-label="Abrir menu"
						onClick={showSideMenu}
						className="lg:hidden w-8 h-8 rounded-xl overflow-hidden text-white"
					>
						<Menu className="w-8 h-8" />
					</button>

					{/* Menu móvil */}
					<div
						className={`transition-all duration-500 ease-in-out fixed w-full lg:hidden bg-white left-0 top-12 overflow-hidden ${
							isSideMenuOpen ? "h-auto" : "h-0"
						}`}
					>
						<ul className="flex flex-col p-10 justify-center space-y-3 bg-primary text-center">
							{links.map((item) => (
								<li key={t(item.name)}>
									<a
										href={`/${localActive}/${t(item.href)}`}
										className="px-3 py-2 rounded-md text-2xl lg:text-lg text-white hover:text-secundary transition-colors"
									>
										{t(item.name)}
									</a>
								</li>
							))}
							<button
								onClick={toggleLocale}
								className="rounded-full font-light text-black px-4 py-1 bg-rosado hover:bg-morado text-sm"
							>
								{locale === "en" ? "ES" : "EN"}
							</button>
							<button
								href="#contact"
								className="rounded-full font-semibold text-primary bg-m px-5 py-1 hover:bg-secundary transition-colors"
								type="submit"
							>
								<a href={`/${localActive}/#contact`}>{t("buttonCont")}</a>
							</button>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
