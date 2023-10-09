import { Question } from "./models/Question";
import { Question as QuestionType} from "./types";
import { Vector } from "./utils/data-structures/Vector";

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/spun', { useNewUrlParser: true, useUnifiedTopology: true });

export class Controller {

    public questions_vector: Vector<QuestionType>;
    constructor(){
        this.questions_vector = new Vector<QuestionType>;
    }

    async create_question(_text: string, _answer: string) {
        try {
            const newQuestion = new Question({
                text: _text,
                answer: _answer,
            });

            const savedQuestion = await newQuestion.save();

            console.log('Pregunta creada con éxito:', savedQuestion);
        } catch (error) {
            console.error('Error al crear la pregunta:', error);
        }
    }

    async see_questions() {
        try {
            const questions = await Question.find();

            // Agrega las preguntas consultadas al vector existente
            questions.forEach((question) => {
                this.questions_vector.push_back(question);
            });

            console.log('Preguntas consultadas con éxito:', questions);
            return this.questions_vector;
        } catch (error) {
            console.error('Error al consultar las preguntas:', error);
            throw error; // Puedes propagar el error si lo deseas
        }

    }
}