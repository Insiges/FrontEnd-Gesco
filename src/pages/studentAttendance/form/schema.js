import { z } from "zod";

export const studentsAttendanceSchema = z.object({
	date: z.string().min(1, "Selecione uma data"),
	crew: z.string().min(1, "Selecione a turma"),
	subject: z.string().min(1, "Selecione a matéria"),
	checkPresence: z.array(z.string().optional()),
});
