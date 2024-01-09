import { ExamCreateInterface } from "../types/exam/exam";
import {z} from "zod";

export const postExamSchema = z.object({
  title: z.string({
    required_error: "El titulo es requerido",
  }).max(50, {
    message: "El titulo debe tener menos de 50 caracteres",
  }),
  description: z.string({
    required_error: "La descripcion es requerida",
  }).max(500, {
    message: "La descripcion debe tener menos de 500 caracteres",
  }),
  questionBlocks: z.array(z.string(),{
    required_error: "No hay bloques de preguntas",
  }
  ).min(1, {
    message: "Debe haber al menos un bloque de preguntas",
  }),
  subject: z.enum(['Matemáticas','Ciencias Sociales','Ciencias Naturales','Análisis de imagen','Análisis textual'],
    {
        required_error: "La materia es requerida",
    }
  ),
  isSimulacrum: z.boolean(),
});

export const postExamTakeSchema = z.object({
    email: z.string({
        required_error: "El email es requerido",
    }).email({
        message: "El email no es valido",
    }),
    answers: z.array(z.string(),{
        required_error: "No hay respuestas",
    }
    ).min(1, {
        message: "Debe haber al menos una respuesta",
    }),
    startExam: z.string({
        required_error: "La fecha de inicio es requerida",
    }),
    endExam: z.string({
        required_error: "La fecha de finalizacion es requerida",
    }),
    score: z.string({
        required_error: "El puntaje es requerido",
    }),
});
