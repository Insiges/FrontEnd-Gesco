export const Button = ({ style, onClick, children, className, ...props }) => {
	return (
		<button
			className={`rounded-xl bg-gradient-to-r from-blue-400 to-blue-700 text-white px-4 py-2 font-bold hover:from-blue-500 hover:to-blue-800 transition duration-300 ease-in-out ${className}`}
			style={style}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};
