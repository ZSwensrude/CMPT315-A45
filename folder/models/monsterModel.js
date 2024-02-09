import mongoose from "mongoose";

const monsterSchema = new mongoose.Schema(
  {
    id: {type: String, required: true},
    name: {type: String, required: true},
    username: {type: String, required: true},
    image: {type: String, required: true},
    address: {
      city: {type: String},
      zipcode: {type: String},
    },
    phone: {type: String},
    website: {type: String},
  },
  { timestamps: true, strictQuery: true }
)

const Monster = mongoose.model("Monster", monsterSchema);

export default Monster;
