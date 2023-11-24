import { FaPenNib } from "react-icons/fa";

export const Service = ({
	tittle = "Tittle",
	description = "Description",
	href,
	animation,
	duration,
	icon,
}) => {
	return (
		<div
			className="flex flex-col justify-between text-white sm:w-108 md:w-96 xl:w-service-width p-5 gap-7"
			data-aos={animation}
			data-aos-duration={duration}
		>
			<div className="flex flex-row items-center justify-center gap-10 px-8">
				<div className="flex items-center justify-center rounded-full border-2 border-solid border-green-500 w-16 h-16 p-10 text-white text-5xl">
					<span>{icon}</span>
				</div>
				<span className="text-2xl font-bold text-start">
					{tittle}
				</span>
			</div>
			<span className="text-md">{description}</span>
			<div className="flex justify-between items-end">
				{href && (
					<a className="text-gray underline decoration-1" href={href}>
						Mas Informacion
					</a>
				)}
			</div>
			<div className="flex justify-end">
				<div className="border-2 w-10/12 border-solid border-green-500" />
			</div>
		</div>
	);
};
