import Image from "next/image";

const InfoBlock = ({ image, children }) => {
	return (
		<div className="rounded-[2.5rem] overflow-hidden bg-[#f3efe9] h-[260px] flex items-center justify-center">
			{image ? (
				<div className="relative w-full h-full">
					<Image
						src={image}
						alt="info"
						fill
						className="object-cover"
						priority
					/>
				</div>
			) : (
				<div className="p-12 text-center text-[#1a1a1a]">{children}</div>
			)}
		</div>
	);
};

export default InfoBlock;
