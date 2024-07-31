const enrollmentSchema = new mongoose.Schema({
  enrollment_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  course_id: { type: Number, ref: "Course" },
  user_id: { type: Number, ref: "User" },
  term: { type: String, maxlength: 255 },
});

const EnrollmentModel = mongoose.model("Enrollment", enrollmentSchema);
