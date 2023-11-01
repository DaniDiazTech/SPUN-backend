import AdminBro from "admin-bro";
import AdminBroMongoose from "@admin-bro/mongoose";
import AdminBroExpress from "@admin-bro/express";

import Question from "../../models/questions/question";
import Subject from "../../models/questions/subject";
import Exam from "../../models/exams/exam";

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: [Question, Subject, Exam],
  rootPath: "/api/crud"
});

const router = AdminBroExpress.buildRouter(adminBro);

export default router;
