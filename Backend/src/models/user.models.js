import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true, 
      minLength: 1
    }
    ,otp:{
      type: String,
      deafult: null,
      trim: true
    },
    resetAuth: {
      type: String,
      default: null,
      trim: true
    },
    friends:{
      type: Array,
      default: [],
      trim: true
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.compareOtp = async function (otp) {
  return await bcrypt.compare(otp, this.otp);
};

userSchema.method.compareAuth = async function (auth) {
  return await bcrypt.compare(auth, this._id);
}

userSchema.methods.compareResetAuth = async function (resetAuth) {
  return await bcrypt.compare(resetAuth, this.resetAuth);
}


export const User = mongoose.model("User", userSchema);

