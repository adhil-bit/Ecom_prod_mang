const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!email  ) {
            return res.status(400).json({ error: "email is required" });
        }
        const duplicationcheck = await User.findOne({ email });
        if(duplicationcheck){
            return res.status(400).json({ error: " user already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        let newpassword = await bcrypt.hash(password, salt);
        console.log('newpassword', newpassword)

        const newuser = await User.create({ email, name, newpassword });
        res.status(201).json(newuser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const userCheck = await User.findOne({
            where: {
                email: email
            }
        });

        let PasswordCheck =  await bcrypt.compare(password, userCheck.password);
        console.log('PasswordCheck', PasswordCheck)
        if (!userCheck) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!PasswordCheck ) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        res.json({ message: 'Login successful', user: userCheck });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};