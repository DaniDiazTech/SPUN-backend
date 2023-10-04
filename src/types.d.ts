// Types needed as data base models

// Exam components:

type Component = "math" | "natural sciences" | "social sciences" | "text analysis" | "image analysis";

interface Base{
    id: int,
};

interface Exam extends Base{
    is_simulacrum: boolean,
    component: Component,
};

interface ExamQuestions extends Base{
    question_id: int;
};

interface ExamTake extends Base{
    exam_id: int,

    title: string,
    description: string,
    score: int,
    // string at the moment
    answers: string,
    created_at: Date,
    finished_at: Date,
    timer: int
};

interface User extends Base{
    first_name: string,
    last_name: string,
    email: string,
    username: string,
    password: string,
    enabled: boolean,
    is_superuser: boolean,
    is_editor:boolean,
    is_student: boolean,
};

interface QuestionBlock extends Base{
    question_id: int,
    content: string,
};

interface Question extends Base{
    question_id: int,
    text: string,
    answer: int,
};
interface Choices extends Base{
    question_id: int,
    choice_id: int,

    text: string,
}


// Exports
export {Exam, ExamQuestions, User, ExamTake, QuestionBlock, Question, Choices};