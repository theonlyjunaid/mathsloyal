import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        const { name, email } = req.body;
        // res.status(200).json({ req: req.body });
        let user = await Student.findOne({ email: email });
        if (user) {
            res.status(400).json({ success: false, message: 'User already exists' });
        }
        else {
            // res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
            // let u = new Student({ name, email, password: req.body.password });
            if (req.body.password.length < 6) return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
            try {
                let u = new Student({ name, email, password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRECT_KEY).toString() });
                await u.save();
                res.status(200).json({ success: true, message: 'Account Created successfully Now you can login' });
            } catch {
                res.status(400).json({ success: "falsee" })
            }
        }
    }
    else {
        res.status(400).json({ message: 'This method is not allowed' });
    }
}

export default connectDB(handler);
