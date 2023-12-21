import mongoose from "mongoose";
import { HTTPError } from "../../utils/HTTPError";

const verifyIdsService = async (_ids: string[]) => {
    for (let i = 0; i < _ids.length; i++) {
        if (!mongoose.Types.ObjectId.isValid(_ids[i])) {
            throw new HTTPError(400, "Some of the questionBlocks are not valid");
        }
    }
    return true;
};

export default verifyIdsService;
