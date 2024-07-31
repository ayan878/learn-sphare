const coursesSchema = new mongoose.Schema({
  course_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  title: { type: String, maxlength: 255 },
  instructor_id: { type: Number, ref: "User" },
  category_id: { type: Number, ref: "Category" },
  price: { type: Number },
  language: { type: String, maxlength: 255 },
  level: { type: String, enum: ["beginner", "intermediate", "advanced"] },
});

const CourseModel = mongoose.model("Course", coursesSchema);
