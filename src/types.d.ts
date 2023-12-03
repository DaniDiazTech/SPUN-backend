import { Document } from "mongoose";

// Types
type Subject =
  | "Matemáticas"
  | "Ciencias Sociales"
  | "Ciencias Naturales"
  | "Análisis de imagen"
  | "Análisis textual";

// Database models interfaces
interface UserInterface extends Document {
  firstName?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  username: string;
  password: string;
  isAdmin: boolean;
}

// Compare functions
type ExtractValueFunction<T> = (a: T) => string | number;

export { Subject, ExtractValueFunction, UserInterface };
