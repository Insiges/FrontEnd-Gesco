import { BoxView, Button, Flex, Title } from "../../components/ui";
import { ActivitiesTable } from "./components";
import { useGetActivies } from "./hooks/useGetActivities";

export function Activities() {
	return (
		<div className=" m-auto max-w-[1400px] p-4">
			<div className="p-4">
				<Flex direction="row" className="m-auto px-4 gap-4 self-start">
					<Title>Atividades</Title>
					<Button>Adicionar atividade</Button>
				</Flex>

				<div className="pt-8">
					<ActivitiesTable />
				</div>
			</div>
		</div>
	);
}
