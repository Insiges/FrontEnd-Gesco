import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export function DetailsActivitiesDialog({
	isOpen,
	onCloseDialog,
	description,
}) {
	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={onCloseDialog}>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
				<DialogPrimitive.Content className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full bg-white dark:bg-blue-900 rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto">
					<DialogPrimitive.Close asChild>
						<button
							type="button"
							aria-label="Close"
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
						>
							<X className="w-5 h-5" />
						</button>
					</DialogPrimitive.Close>

					<DialogPrimitive.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						Detalhes da Atividade
					</DialogPrimitive.Title>

					<DialogPrimitive.Description className="text-gray-600 dark:text-zinc-400">
						{description}
					</DialogPrimitive.Description>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}
