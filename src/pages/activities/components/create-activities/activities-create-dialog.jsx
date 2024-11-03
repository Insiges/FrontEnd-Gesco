import { zodResolver } from "@hookform/resolvers/zod";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ptBR } from "date-fns/locale";
import DatePicker, { registerLocale } from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { X } from "lucide-react";
import { useState } from "react";
import { useCreateActivities } from "../../hooks/useCreateActivities";
import { useGetClassByProfessor } from "../../hooks/useGetClassByProfessor";
import { activitySchema } from "./schema";

registerLocale("pt-BR", ptBR);

export function ActivitiesCreateDialog({ isOpen, onCloseDialog }) {
	const [errorCreate, setErrorCreate] = useState("");
	const { mutateAsync: createActivity } = useCreateActivities();
	const { data: classes } = useGetClassByProfessor();
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors, isDirty, isValid },
	} = useForm({
		resolver: zodResolver(activitySchema),
		defaultValues: {
			name: "",
			description: "",
			weight: 0,
			dueDate: null,
			team: "",
		},
	});

	const onSubmit = async (data) => {
		const date = new Date(data.dueDate);
		const formattedDate = format(date, "yyyy-MM-dd");
		const dateFormatted = { ...data, dueDate: formattedDate };

		await createActivity(dateFormatted, {
			onSuccess: () => {
				reset();
				onCloseDialog();
			},
			onError: () => {
				setErrorCreate("Erro ao tentar criar sua atividade, tente novamente!");
			},
		});
	};

	return (
		<DialogPrimitive.Root open={isOpen} onOpenChange={onCloseDialog}>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" />
				<DialogPrimitive.Content
					aria-describedby={undefined}
					className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-white dark:bg-blue-900 rounded-lg shadow-lg p-6 max-h-[90vh] overflow-y-auto"
				>
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
						Criar atividade
					</DialogPrimitive.Title>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<div>
							<label className="block text-gray-700 dark:text-gray-200">
								Nome
							</label>
							<input
								type="text"
								{...register("name")}
								className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
								onFocus={() => {
									errorCreate !== "" && setErrorCreate("");
								}}
							/>
							{errors.name && (
								<p className="text-red-500 text-sm">{errors.name.message}</p>
							)}
						</div>

						<div>
							<label className="block text-gray-700 dark:text-gray-200">
								Descrição
							</label>
							<input
								type="text"
								{...register("description")}
								className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
								onFocus={() => {
									errorCreate !== "" && setErrorCreate("");
								}}
							/>
							{errors.description && (
								<p className="text-red-500 text-sm">
									{errors.description.message}
								</p>
							)}
						</div>

						<div>
							<label className="block text-gray-700 dark:text-gray-200">
								Valor
							</label>
							<input
								type="number"
								step="0.01"
								{...register("weight", { valueAsNumber: true })}
								className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
								onFocus={() => {
									errorCreate !== "" && setErrorCreate("");
								}}
							/>
							{errors.weight && (
								<p className="text-red-500 text-sm">{errors.weight.message}</p>
							)}
						</div>

						<select
							className=" w-full outline-none p-1 shadow-md rounded-md"
							{...register("team")}
						>
							<option value="">Selecione a turma</option>
							{!!classes &&
								classes.length > 0 &&
								classes.map((team) => {
									return (
										<option key={team.id} value={`${team.id}`}>
											{team.serie}
										</option>
									);
								})}
						</select>

						{errors.team && (
							<p className="text-red-500 text-sm">{errors.team.message}</p>
						)}

						<div>
							<label className="block text-gray-700 dark:text-gray-200">
								Data de entrega
							</label>
							<Controller
								control={control}
								name="dueDate"
								render={({ field }) => (
									<DatePicker
										{...field}
										selected={field.value}
										onChange={(date) => field.onChange(date)}
										className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
										locale="pt-BR"
										dateFormat="dd/MM/yyyy"
										placeholderText="Selecione uma data"
										minDate={new Date()}
										onFocus={() => {
											errorCreate !== "" && setErrorCreate("");
										}}
									/>
								)}
							/>
							{errors.dueDate && (
								<p className="text-red-500 text-sm">{errors.dueDate.message}</p>
							)}
						</div>

						<div className=" p-1 mt-2 rounded-lg ">
							<span className="text-red-500">{errorCreate && errorCreate}</span>
						</div>

						<div className="flex justify-end space-x-4">
							<DialogPrimitive.Close asChild>
								<button
									type="button"
									className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
								>
									Cancelar
								</button>
							</DialogPrimitive.Close>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
								disabled={!isValid}
							>
								Confirmar
							</button>
						</div>
					</form>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}
