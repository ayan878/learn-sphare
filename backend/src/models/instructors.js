const instructorsSchema = new mongoose.Schema({
  instructor_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  first_name: { type: String, maxlength: 255 },
  last_name: { type: String, maxlength: 255 },
  email: { type: String, maxlength: 255 },
  dep_id: { type: Number },
});

const InstructorModel = mongoose.model("Instructor", instructorsSchema);
