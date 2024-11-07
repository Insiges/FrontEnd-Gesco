import { Flex, Title } from "../../../../components/ui";
import { StepProgress } from "./StepProgress";

export function FormLayout({ isEdit, steps, children }) {
	return (
		<Flex>
			<Title fontSize={34} subTitle="Dados Pessoais">
				{isEdit && "Editar Docente"}
				{!isEdit && "Adicionar Docentes"}
			</Title>

			<StepProgress etapas={steps} />

			<Flex>{children}</Flex>
		</Flex>
	);
}
