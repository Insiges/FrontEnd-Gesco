import {
	bookIcon,
	exitIcon,
	graduationIcon,
	personIcon,
} from "../../../../assets/icons";

export const StepProgress = ({ etapas }) => {
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
