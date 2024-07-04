import User from "../models/user.model.js";
import becryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  console.log(req.body);

  const hashedPassword = becryptjs.hashSync(password,10);

  const newUser = new User({
    username,
    email,
    password : hashedPassword,
  });

  try {
    await newUser.save();
    res.json("signup successfull");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
