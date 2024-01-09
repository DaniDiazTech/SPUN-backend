import {z} from "zod";

export const postQuestionBlockSchema=z.object({
    subject: z.enum(['Matemáticas','Ciencias Sociales','Ciencias Naturales','Análisis de imagen','Análisis textual'],
        {
            required_error: "La materia es requerida",
        }
    ),
    questions: z.array(
        z.object(
            {
                text: z.string({
                    required_error: "La pregunta es requerida",
                }),
                choices: z.array(z.string(),{
                    required_error: "No hay opciones",
                }
                ).min(4, {
                    message: "Debe haber al menos 4 opciones",
                }),
                answer: z.string({
                    required_error: "La respuesta es requerida",
                }),
            },
            {
                required_error: "No hay preguntas",
            }
        ),
        {
            required_error: "No hay preguntas bloques de preguntas",
        }
        ),
    content: z.string({
        required_error: "El contenido es requerido",
    }),
});