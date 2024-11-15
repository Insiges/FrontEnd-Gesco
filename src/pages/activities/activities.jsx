import { useState } from "react";
import { BoxView, Button, Flex, Title } from "../../components/ui";
import { ActivitiesCreateDialog, ActivitiesTable } from "./components";

export function Activities() {
	const [showCreateModal, setShowCreateModal] = useState(false);
	return (
		<div className="m-auto max-w-[1400px] p-4">
			<div className="p-4">
				<Flex direction="row" className="m-auto px-4 gap-4 self-start">
					<Title>Atividades</Title>
					<Button
						onClick={() => {
							setShowCreateModal(true);
						}}
					>
						Adicionar atividade
					</Button>
				</Flex>

				<div className="pt-8">
					<ActivitiesTable />
				</div>
			</div>

			<ActivitiesCreateDialog
				isOpen={showCreateModal}
				onCloseDialog={() => {
					setShowCreateModal(false);
				}}
			/>
		</div>
	);
}
