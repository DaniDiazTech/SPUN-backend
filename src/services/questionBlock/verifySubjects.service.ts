import { HTTPError } from "../../utils/HTTPError";
import questionBlock from "../../models/questions/questionBlock";

const verifySubjects = async (_ids: string[], subject:string) => {
    for (let i = 0; i < _ids.length; i++) {
        let qb=await questionBlock.findOne({_id:_ids[i]});
        if(qb.subject!==subject){
            throw new HTTPError(400, "Question blocks have to be from the same subject");
        }
    }
    return true;
};

export default verifySubjects;
