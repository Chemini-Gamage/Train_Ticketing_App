const express = require(`express`)
let User = require(`../models/User`)
const router = express.Router()
const jwt = require(`jsonwebtoken`)

router.route("/").post(async (req, res) => {
    const user = new User(req.body)
    try {
        const savedUser = await user.save()
        res.json(savedUser)
    } catch (err) {
        res.json({ message: err })
    }
})
router.get("/", (req, res) => {
    User.find().then(resp => {
        res.json(resp)

    }).catch(err => {
        console.log(err);
        res.json({ message: err })
    })
})


router.route("/login").post(async (req, res) => {
    try {
        // const users = await User.find({
        //     userName: req.body.userName,
        //     password: req.body.password
        // });

        const user = {
            username: "testuser@gmail.com",
            password: "testpassword"
        }
        if (req.body.username === user.username && req.body.password === user.password) {
            const data = { id: " userid" };
            const accessToken = jwt.sign(data, 'abcd1234', { expiresIn: '1h' })
            const refreshToken = jwt.sign(data, '1234abcd', { expiresIn: '24h' })

            res.json({
                success: true,
                id: data.id,
                accessToken: accessToken,
                refreshToken: refreshToken
            });
        } else {
            res.json({ success: false, message: 'invalid credentials' })
        }
    } catch (err) {
        alert(err)
        console.log(err)
        res.json({ success: false, message: 'server error' })
    }
})


router.post("/refresh", async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if (!refreshToken)
        return res.sendStatus(401)
    jwt.verify(refreshToken, '1234abcd', async (err, decoded) => {
        if (err) return res.sendStatus(403)
        const user = await User.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.sendStatus(403)
        }
        const newAccessToken = jwt.sign({ id: decoded.id }, 'abcd1234', { expiresIn: '1hs' })
        res.json({ accessToken: newAccessToken })
    })

})
    ;

router.post("/logout", async (req, res) => {
    const refreshToken = req.body.refreshToken
    if (!refreshToken)
        return res.sendStatus(401)
    try {
        const decoded = jwt.verify(refreshToken, '1234abcd');
        const user = await User.findById(decoded.id)



        if (!user || user.refreshToken !== refreshToken)
            return res.status(403)
        user.refreshToken = null
        await user.save()
        res.json({ success: true, message: "logged out" })
    } catch (err) {
        console.log(err)
        res.sendStatus(403)
    }
})
router.get("/:id", (req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user)

    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: err })
    })
})

router.delete("/:id",async (req, res) => {

    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: "user not found" })
        await User.findByIdAndDelete(req.params.id)
        res.json("user deleted")
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }
})



router.post("/update/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: "user not found" })

        user.username = req.body.username;
        user.password = await bcrypt.hash(req.body.password, 10)
        await user.save()
        res.json("user updated")
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err })
    }


})






router.route("/get").post(async (req, res) => {
    const token = req.body.token
    if (token == null) return res.sendStatus(401);
    try {
        const decodeUser = jwt.verify(token, '1234abcd');
        const user = await User.findOne({ _id: decodeUser.id })
        if (user) {
            if (user.refreshToken == null || user.refreshToken == '') {
                return res.status(403).json({
                    message: "user already logged out"
                })
            } else {
                if (token == user.refreshToken) {
                    res.json({ success: true, user: user })

                } else {
                    return res.status(403).json({
                        message: "invalid refresh token"
                    })
                }
            }
        }
        else {
            return res.status(403).json({
                message: "invalid refersh token"
            })
        }

    } catch (err) {
        res.sendStatus(403)
    }
})


module.exports = router
