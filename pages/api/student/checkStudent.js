import jsonwebtoken from 'jsonwebtoken';
import Student from "../../../model/Student";
import connectDB from "../../../middleware/mongoose";
const handler = async (req, res) => {

    if (req.method === "POST") {
        let token = req.body.token;

        try {
            const user = jsonwebtoken.verify(token, process.env.JWT_SECRET);
            const dbuser = await Student.findOne({ email: user.email }, { password: 0, __v: 0 });
            // console.log(dbuser);

            // if (dbuser) {
            //     res.status(200).json({ success: true, user: dbuser });
            //     return;
            // }

            res.status(200).json({ success: true, user: dbuser });
        } catch (err) {
            res.status(200).json({ success: false, error: 'Invalid token' });
        }

    } else {
        res.status(200).json({ success: false, error: 'Method not allowed' });
    }
}


export default connectDB(handler);
