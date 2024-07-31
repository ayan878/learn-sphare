const paymentMethodsSchema = new mongoose.Schema({
  payment_method_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  user_id: { type: Number, ref: "User" },
  method_type: {
    type: String,
    enum: ["credit_card", "paypal", "bank_transfer"],
  },
  provider: { type: String, maxlength: 255 },
  account_number: { type: String, maxlength: 255 },
});

const PaymentMethodModel = mongoose.model("PaymentMethod", paymentMethodsSchema);
