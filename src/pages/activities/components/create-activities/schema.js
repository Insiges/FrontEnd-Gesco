import { z } from "zod";
export const activitySchema = z.object({
	name: z.string().min(2, "O nome é obrigatório"),
	description: z.string().min(2, "A descrição é obrigatória"),
	weight: z.number().min(0, "O valor deve ser maior ou igual a 0"),
	dueDate: z.date({
		required_error: "A data de entrega é obrigatória",
		invalid_type_error: "Data de entrega inválida",
	}),
	team: z.string().min(1, "Selecione uma classe"),
});
