export const Button = ({ style, onClick, children, className, ...props }) => {
	return (
		<button
			className={`rounded-xl bg-custom-blue text-white tracking-wider px-3 py-1 font-semibold hover:opacity-80 transition duration-300 ease-in-out ${className}`}
			style={style}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	);
};
