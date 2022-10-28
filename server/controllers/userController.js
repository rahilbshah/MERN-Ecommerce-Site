import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";

export const updateUser = async (req, res) => {
  if (req.body.password) {
    const salt = bcryptjs.genSaltSync(10);
    req.body.password = await bcryptjs.hash(req.body.password, salt);
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json("User does not exist");
    } else {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    const { password, ...otherDetails } = getUser._doc;
    res.status(200).json(otherDetails);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUser = async (req, res) => {
  const query = req.query.new;
  try {
    const getAllUser =
      query === "true"
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
    const list = await Promise.all(
      getAllUser.map((data) => {
        const { password, ...otherDetails } = data._doc;
        return { ...otherDetails };
      })
    );
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
