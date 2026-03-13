import AboutUsComponent from '@/components/About/AboutUsComponent';
import CTASection from '@/components/About/CTASection';
import { useTranslations } from 'next-intl';
import React from 'react'

const About = () => {
	const t = useTranslations("AboutUs");
	return (
			<section>
				<AboutUsComponent t={t} />
				<CTASection/>
			</section>
		);
}

export default About;