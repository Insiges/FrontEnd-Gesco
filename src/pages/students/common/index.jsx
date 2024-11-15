import { bookIcon, exitIcon, graduationIcon, personIcon } from "./icons";

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

export const BoxView = ({ children, className = "", ...props }) => (
	<div className={`rounded-md border border-gray-200  ${className}`} {...props}>
		{children}
	</div>
);

export const Title = ({ style, fontSize, subTitle, children }) => (
	<>
		<h1 className="text-[#060273] font-bold" style={{ ...style, fontSize }}>
			{children}
		</h1>
		{subTitle && <span className="text-slate-500">{subTitle}</span>}
	</>
);

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

export const FormStepsGuide = ({ etapas }) => {
	const changeOnIndex = (step) => ({
		iconColor: step <= etapas ? "text-[#FFB400]" : "",
		hrBorderColor: step <= etapas ? "#060273" : "#d4d4d4",
		bgIcon: step <= etapas ? "bg-blue-800 text-white" : "bg-blue-200",
	});

	return (
		<div className="flex items-center justify-center m-12">
			{/* 1 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(1).bgIcon
					} text-[#060273] square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(1).iconColor}>{personIcon}</span>
				</div>
			</div>

			<hr
				style={{ borderColor: changeOnIndex(2).hrBorderColor, width: "100%" }}
				className="mx-5"
			/>

			{/* 2 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(2).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(2).iconColor}>{bookIcon}</span>
				</div>
			</div>

			<hr
				style={{ borderColor: changeOnIndex(3).hrBorderColor, width: "100%" }}
				className="mx-5"
			/>

			{/* 3 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(3).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(3).iconColor}>{exitIcon}</span>
				</div>
			</div>
		</div>
	);
};

export const inputClassName =
	"w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

export const containerClass = "p-2";
