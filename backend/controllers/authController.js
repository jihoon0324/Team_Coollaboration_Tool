const authController = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register
authController.post("/joinUs", async (req, res) => {
  try {
    const isExisting = await User.findOne({ email: req.body.formValues.email });

    if (isExisting) {
      return res.status(404).json({ msg: "User already registered" });
    }

    if (
      req.body.formValues.username === "" ||
      req.body.formValues.email === "" ||
      req.body.formValues.password === ""
    ) {
      return res.status(500).json({ msg: "All fields must be populated" });
    }

    const hashedPassword = await bcrypt.hash(req.body.formValues.password, 10);

    const user = await User.create({
      ...req.body.formValues,
      password: hashedPassword,
    });
    console.log(user);
    await user.save();

    const { password, ...others } = user._doc;
    console.log(others);
    const token = createToken(user);
    console.log(token);

    return res.status(201).json({ others, token });
  } catch (error) {
    return res.status(500).json(error);
  }
});
//signIn
authController.post("/signIn", async (req, res) => {
  const { formValues } = req.body;
  // const { email ,password} = req.body.formValues;
  if (formValues.email === "" || formValues.password === "") {
    return res.status(500).json({ msg: "All fields must be populated" });
  }

  try {
    const user = await User.findOne({ email: formValues.email });

    if (!user) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }
    const comparePass = await bcrypt.compare(
      req.body.formValues.password,
      user.password
    );
    if (!comparePass) {
      return res.status(404).json({ msg: "Invalid credentials" });
    }

    const { password, ...others } = user._doc;
    const token = createToken(user);

    return res.status(200).json({ others, token });
  } catch (error) {
    return res.status(500).json(error);
  }
});

//create token function
const createToken = (user) => {
  const payload = {
    id: user._id.toString(),
    isAdmin: user.isAdmin,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

module.exports = authController;
