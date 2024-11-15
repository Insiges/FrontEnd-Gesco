export const BoxView = ({ children, className = "", ...props }) => (
	<div className={`rounded-md border border-gray-200  ${className}`} {...props}>
		{children}
	</div>
);
