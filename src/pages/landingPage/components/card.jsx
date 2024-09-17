const Card = ({ imageSrc, title, text }) => {
	return (
		<div className="border-2 border-yellow rounded-lg w-[390px] h-[420px] p-4 shadow-lg shadow-gray-500/50">
			<img
				src={imageSrc}
				alt={title}
				className="w-[346px] h-[200px] rounded-lg mb-4"
			/>
			<div className="card-body">
				<h5 className="card-title text-lg font-bold mb-2">{title}</h5>
				<p className="card-text text-base">{text}</p>
			</div>
		</div>
	);
};

export default Card;
