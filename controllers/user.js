
const User = require('../models/user');
const bcrypt = require('bcrypt');
const basicAuth = require('basic-auth');

const basicAuthMiddleware = async (req, res, next) => {
    const credentials = basicAuth(req);
  
    if (!credentials || !credentials.name || !credentials.pass) {
      res.status(401).send('Unauthorized');
      return;
    }
  
    try {
      const user = await User.findOne({ email: credentials.name });
  
      if (!user || !(await user.comparePassword(credentials.pass))) {
        res.status(401).send('Unauthorized');
        return;
      }const basicAuthMiddleware = async (req, res, next) => {
        const credentials = basicAuth(req);
      
        if (!credentials || !credentials.name || !credentials.pass) {
          res.status(401).send('Unauthorized');
          return;
        }
      
        try {
          const user = await User.findOne({ email: credentials.name });
      
          if (!user || !(await user.comparePassword(credentials.pass))) {
            res.status(401).send('Unauthorized');
            return;
          }
      
          req.user = user;
          next();
        } catch (error) {
          res.status(500).send('Internal Server Error');
        }
      };
      next();
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  };
  const signupController = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        res.status(400).json({ error: 'Email already in use' });
        return;
      }
  
      const user = new User({ name, email, password });
      await user.save();
      res.json({ message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user || !(await user.comparePassword(password))) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
      }
  
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

module.exports = {
  signupController,
  loginController,
  basicAuthMiddleware,
};
