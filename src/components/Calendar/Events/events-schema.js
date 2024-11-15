import { z } from "zod";

export const eventsSchema = z.object({
	name: z.string().min(1, "Campo obrigatório"),
	time: z.string().min(1, "Campo obrigatório"),
	description: z.string().min(1, "Campo obrigatório"),
});
