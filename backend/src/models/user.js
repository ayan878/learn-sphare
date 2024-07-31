import  mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  user_id: { type: Number, unique: true, required: true, autoIncrement: true },
  first_name: { type: String, maxlength: 255 },
  last_name: { type: String, maxlength: 255 },
  email: { type: String, maxlength: 255 },
  phone: { type: String, maxlength: 255 },
  address: { type: String, maxlength: 255 },
  dob: { type: Date },
  role: { type: String, enum: ["student", "instructor", "admin"] }, 
  profile_picture: { type: String, maxlength: 255 },
});

const UserModel = mongoose.model("User", userSchema);
