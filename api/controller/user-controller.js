import User from "../model/User.js";


export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find({});
        // console.log("users is ", users);
        if (!users) {
            return res.status(400).json({ message: "no users found" })
        }
        return res.status(200).json({ users })
    }
    catch (err) {
        console.log("error in geAllusers", err);
        return res.status(500).json({ message: err.message })
    }
};


export const addUser = async (req, res, next) => {
    const { name, email, username } = req.body;
    console.log(name);
    let exitstingUser;
    try {
        exitstingUser = await User.findOne({ email });
    }
    catch (err) {
        return console.log(err);
    }
    if (exitstingUser) {
        return res.status(400).json({ message: " users already exits!" })
    }
    const user = new User({
        name,
        email,
        username
    })
    try {
        await user.save();
    }
    catch (err) {
        return console.log(err);
    }
    return res.status(200).json({ user });
};




export const deleteUser = async (req, res, next) => {
    const { name, email } = req.body;
    console.log("user is gatting deleted...  : ", name);
    try {
        await User.findOneAndDelete({ email });
        console.log("user is deleted");
        res.status(200).json({ message: "user has been deleted....", email: email });
        // console.log("user has been deleted...  : ", name);
    }
    catch (err) {
        return console.log(err);
    }

};



export const updateUser = async (req, res, next) => {
    const { name, email, username } = req.body;
    console.log("updating user...  : ", name);
    try {
        await User.findOneAndUpdate({ email: { $regex: email } }, { $set: req.body });
        console.log("user is updated");
        res.status(200).json("User has been updated...");
        console.log("user has been updated...  : ", name);
    }
    catch (err) {
        return console.log(err);
    }

};




