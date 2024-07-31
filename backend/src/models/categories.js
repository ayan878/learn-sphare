const categoriesSchema = new mongoose.Schema({
  categories_id: {
    type: Number,
    unique: true,
    required: true,
    autoIncrement: true,
  },
  name: { type: String, maxlength: 255 },
  description: { type: String, maxlength: 65535 },
});

const CategoryModel = mongoose.model("Category", categoriesSchema);
