const User = require('../models/user');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        let { email, name, password } = req.body;
        console.log('req.body', req.body)
        console.log('duplicationcheck')

        if (!email  ) {
            return res.status(400).json({ error: "email is required" });
        }
        console.log('22222222duplicationcheck')

        const duplicationcheck = await User.findOne({ name });
        console.log('duplicationcheck', duplicationcheck)
        console.log('duplicationcheck')

        if(duplicationcheck){
            return res.status(400).json({ error: " user already exist" });
        }
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        let customerId = uuidv4();
        console.log('customerId', customerId)

        const newuser = await User.create({ customerId, email, name, password });
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
        if (PasswordCheck === false ) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        const userPayload = userCheck.toJSON(); 
        const token = jwt.sign(userPayload, process.env.SECRET, { expiresIn: process.env.TOKEN_LIFE });
        console.log('token', token)
        const refreshToken = jwt.sign(userPayload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: process.env.REFRESH_TOKEN_LIFE,
        });
        console.log('refreshToken', refreshToken)


        res.json({ message: 'Login successful', user: userCheck , token, refreshToken});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};