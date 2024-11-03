export const Flex = ({
	children,
	className = "",
	direction,
	justify,
	...props
}) => {
	return (
		<div
			className={`flex flex-${direction ?? "col"} justify-${
				justify ?? "between"
			} ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};
