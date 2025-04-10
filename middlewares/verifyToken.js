const admin = require('firebase-admin');

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    console.log("Cookies recibidas:", req.cookies);

    if (!token) return res.status(401).json({ message: 'No token provided' });
  
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      req.user = decoded;

      next();
    } catch (error) {
        console.error("Token inválido:", error.message);
        res.status(401).json({ message: "Token inválido" });
    }
};

module.exports = verifyToken;
