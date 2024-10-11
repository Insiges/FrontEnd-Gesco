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
		<h1 className="text-blue-800 font-bold" style={{ ...style, fontSize }}>
			{children}
		</h1>
		{subTitle && <span className="text-slate-500">{subTitle}</span>}
	</>
);

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

export const FormGuiaEtapas = ({ etapas }) => {
	const changeOnIndex = (step) => ({
		iconColor: step <= etapas ? "text-yellow" : "",
		hrBorderColor: step <= etapas ? "#2196F3" : "#d4d4d4",
		bgIcon: step <= etapas ? "bg-blue-800 text-white" : "bg-blue-200",
	});

	return (
		<div className="flex items-center justify-center m-12">
			{/* Professor etapa 1 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(1).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(1).iconColor}>{personIcon}</span>
				</div>
			</div>

			<hr
				style={{ borderColor: changeOnIndex(2).hrBorderColor, width: "100%" }}
				className="mx-5"
			/>

			{/* Graduação etapa 2 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(2).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(2).iconColor}>{graduationIcon}</span>
				</div>
			</div>

			<hr
				style={{ borderColor: changeOnIndex(3).hrBorderColor, width: "100%" }}
				className="mx-5"
			/>

			{/* Dados de disciplinas etapa 3 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(3).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(3).iconColor}>{bookIcon}</span>
				</div>
			</div>

			<hr
				style={{ borderColor: changeOnIndex(4).hrBorderColor, width: "100%" }}
				className="mx-5"
			/>

			{/* Dados finais de login etapa 4 */}
			<div className="flex-1 text-center justify-between">
				<div
					className={`w-12 h-12 ${
						changeOnIndex(4).bgIcon
					} text-blue-600 square-full mx-auto flex items-center justify-center`}
				>
					<span className={changeOnIndex(4).iconColor}>{exitIcon}</span>
				</div>
			</div>
		</div>
	);
};

export const inputClassName =
	"w-80 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

export const containerClass = "p-2";
