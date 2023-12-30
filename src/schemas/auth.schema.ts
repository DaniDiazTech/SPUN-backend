import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string({
    required_error: "El nombre es requerido",
  }),
  lastName: z.string({
    required_error: "El apellido es requerido",
  }),
  username: z.string({
    required_error: "El username es requerido",
  }),
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email no es valido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    }),
  isAdmin: z.boolean(),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email no es valido",
    }),
  password: z.string({
    required_error: "La contraseña es requerida",
  }).min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});
