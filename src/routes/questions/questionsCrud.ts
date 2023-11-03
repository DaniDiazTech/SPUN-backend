import AdminBro from "admin-bro";
import AdminBroMongoose from "@admin-bro/mongoose";
import AdminBroExpress from "@admin-bro/express";

import QuestionBlock from "../../models/questions/questionBlock";
import Exam from "../../models/exams/exam";

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: [QuestionBlock, Exam],
  rootPath: "/api/crud"
});

const router = AdminBroExpress.buildRouter(adminBro);

export default router;
