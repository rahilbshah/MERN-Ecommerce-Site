import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req,res)=>{
    const salt=bcryptjs.genSaltSync(10);
    const hash=bcryptjs.hashSync(req.body.password,salt);
    try {
        const newUser = new User({...req.body,password:hash})
        const savedUser=await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error)
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            const validity = bcryptjs.compareSync(req.body.password, user.password);
            if (validity) {
                const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT, { expiresIn: "5d" })
                const { password, ...otherDetails } = user._doc;
                res.cookie("ecommerce_token", token, {
                    httpOnly: true
                }).status(200).json({details:{...otherDetails}})
            } else {
                return res.status(400).json("Wrong Password")
            }
        } else {
            res.status(404).json("User Does not Exist")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}