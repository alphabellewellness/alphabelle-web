const MapSection = () => {
	return (
		<div className="w-full h-[300px]">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1747444.3896469835!2d-98.98869533817229!3d31.19364210203333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sve!4v1773427138709!5m2!1ses-419!2sve"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
};

export default MapSection;

