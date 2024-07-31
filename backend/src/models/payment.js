const paymentsSchema = new mongoose.Schema({
  payment_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  user_id: { type: Number, ref: "User" },
  course_id: { type: Number, ref: "Course" },
  payment_method_id: { type: Number, ref: "PaymentMethod" },
  status: { type: String, enum: ["pending", "completed", "failed"] }, // Example values
  amount: { type: Number },
});

const PaymentModel = mongoose.model("Payment", paymentsSchema);
