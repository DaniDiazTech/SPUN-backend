import { Schema, model } from "mongoose";

const choiceSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  correct:{
    type: Boolean,
    required: true,
    default: false,
  },
},
{
  timestamps: true,
}
)


const choiceModel = model("Choice", choiceSchema);

module.exports = {
    choiceModel,
}
