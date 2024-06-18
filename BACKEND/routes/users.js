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
router.route("/").get((req, res) => {
    User.find().then((resp) => {
        res.json(resp)
    }).catch((err) => {
        console.log(err)
        alert(err)
    })
})
router.route("/login").post(async (req, res) => {
    try {
        const users = await User.find({
            userName: req.body.userName,
            password: req.body.password
        });
        if (users.length > 0) {
            const data = { id: users[0].id };
            const accessToken = jwt.sign(data, 'abcd1234', { expiresIn: '1h' })
            const refreshToken = jwt.sign(data, '1234abcd', { expiresIn: '24h' })
            await User.findOneAndUpdate({ _id: users[0]._id }, { $set: { refreshTOken: refreshToken } })
            res.json({
                success: true,
                id: users[0].id,
                accessToken: accessToken,
                refreshToken: refreshToken
            });
        } else {
            res.json({ success: false, message: 'invalid credentials' })
        }
    } catch (err) {
        alert(err)
    }
}
)


router.route("/refresh").post((req, res) => {
    const refreshToken = req.body.refreshToken;
    if (refreshToken == null)
        return res.sendStatus(401)
    jwt.verify(refreshToken, '1234abcd', (err, user) => {
        if (err) return res.sendStatus(403)
        const accessToken = jwt.sign({ id: user.id }, 'abcd1234', { expiresIn: '20s' })
        res.json({ accessToken: accessToken })
    })

})

router.route("/logout").post(async (req, res) => {
    const refreshToken = req.body.refreshToken
    if (refreshToken == null)
        return res.sendStatus(401)
    try {
        const decodeUser = jwt.verify(refreshToken, '1234abcd');
        const user = await User.findOne({ _id: decodeUser.id })
        if (user) {
            if (user.refreshToken == null || user.refreshToken == '') {return res.status(403).json({
                message: "user already logged out"
            })
            }
        else {
            if (refreshToken === user.refreshToken) {
                user.refreshToken = null
                await user.save()
                res.json({ success: true, message: "logged out" })
            } else {
                return res.status(403).json({
                    message: "invalid refesh token"
                })
            }
        }

    }else {
        return res.status(403).json({
            message: 'invalid token'
        })}
    }catch (err) {
        res.sendStatus(403)
    }
});                                                                                                                                                

router.route("/id").get((req, res) => {
    User.findById(req.params.id).then((user) => {
        res.json(user)

    }).catch((err) =>
        console.log(err))
})


router.route("/:id").delete((req, res) => {
    User.findById(req.params.id).then(() => {
        res.json("user deleted");



    }).catch((err) => {
        console.log(err)
    })
})

router.route("/update/:id").post((req, res) => {
    User.findById(req.params.id).then((user) => {
        user.username = req.body.userName
        user.password = req.body.password
        user.save().then(() => {
            res.json('user updated')
        }).catch((err) => {
            console.log(err)
        })
    })})

    router.route("/get").post(async (req, res) => {
        const token = req.body.token
        if (token == null) return res.sendStatus(401);
        try {
            const decodeUser = jwt.verify(token, '1234abcd');
            const user = await User.findOne({ _id: decodeUser.id })
            if (user) {
                if (user.refreshToken == null|| user.refreshToken==''){
return res.status(403).json({
    message:"user already logged out"
})
                }else{
                    if(token == user.refreshToken){
                        res.json({success:true, user:user})

                    }else{
                        return res.status(403).json({
                            message:"invalid refresh token"
                        })
                    }
                }}
else{
    return res.status(403).json({
        message:"invalid refersh token"
    })
}

            }catch(err){
                res.sendStatus(403)
            }
        })


module.exports = router
