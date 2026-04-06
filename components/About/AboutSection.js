import InfoBlock from "./InfoBlock";
import { useTranslations } from "next-intl";

const AboutSection = () => {
	const t = useTranslations("AboutUsHome");
	
	return (
		<section className=" py-24 px-6">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
				<InfoBlock image="/image/1.png" />
				<div className="md:col-span-2">
					<InfoBlock>
						<p className="text-xl leading-relaxed">{t("text1")}</p>
					</InfoBlock>
				</div>
				<div className="md:col-span-2">
					<InfoBlock>
						<p className="text-xl leading-relaxed max-w-md">{t("text2")}</p>
					</InfoBlock>
				</div>
				<InfoBlock image="/image/2.png" />
			</div>
		</section>
	);
};

export default AboutSection;
