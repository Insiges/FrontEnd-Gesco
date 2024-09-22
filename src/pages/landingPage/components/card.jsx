const Card = ({ imageSrc, title, text }) => {
	return (
		<div className="border-2 border-yellow rounded-lg p-4 shadow-lg shadow-gray-500/50 w-full max-w-md md:max-w-lg lg:max-w-xl">
			<img
				src={imageSrc}
				alt={title}
				className="w-full h-auto rounded-lg mb-4"
			/>
			<div className="card-body">
				<h5 className="card-title text-lg font-bold mb-2">{title}</h5>
				<p className="card-text text-base">{text}</p>
			</div>
		</div>
	);
};

export default Card;
