const reviewsSchema = new mongoose.Schema({
  reviews_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  user_id: { type: Number, ref: "User" },
  course_id: { type: Number, ref: "Course" },
  comment: { type: String, maxlength: 65535 },
  review_at: { type: Date, default: Date.now },
});

const ReviewModel = mongoose.model("Review", reviewsSchema);
