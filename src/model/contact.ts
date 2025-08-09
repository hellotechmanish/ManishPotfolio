import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: function (v) {
          // Allow empty or valid phone pattern
          return !v || /^\+?[\d\s\-]{7,15}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    ip: {
      type: String,
      required: true, // IP zaroori rakhenge rate limiting ke liye
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
