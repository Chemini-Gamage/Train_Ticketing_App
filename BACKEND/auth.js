const jwt = require(`jsonwebtoken`)
module.exports = (req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.split("")[0] === "Bearer") {
        try {
            const token = req.headers.authorization.split("")[1]
            if (token == null) {
                return res.status(401).json({
                    message: "Authentication failed"
                })
            }
            const decoded = jwt.verify(token, 'abcd1234')
            req.userData = decoded
            next();

        } catch (err) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
    } else {
        return res.status(401).json({
            message: "authentication failed"
        })
    }
}