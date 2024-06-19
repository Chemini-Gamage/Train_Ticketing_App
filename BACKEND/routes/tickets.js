const express = require(`express`)
let Ticket = require('../models/Ticket')
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

router.route("/add").post((req, res) => {
    const date = req.body.date;
    const trainClass = req.body.trainClass
    const qty = req.body.qty;
    const newTicket = new Ticket({
        date,
        trainClass,
        qty
    })
    newTicket.save().then(() => {
        res.send("added")
    }).catch((err) => {
        res.send(err)
    })

})

router.route("/display").get((req, res) => {
    Ticket.find().then((resp) => {
        res.json(resp)
    }).catch((err) => {
        res.status(500).send({ message: "error in display", err })
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        date,
        trainClass,
        qty
    } = req.body
    const updatedTicket = {
        date,
        trainClass,
        qty
    };
    const update = await Ticket.findByIdAndUpdate(userId, updatedTicket).then((resp) => {
        res.status(200).send({ status: "updated", resp })

    }).catch((err) => {
        res.status(500).send({ status: "update error", err })

    })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Ticket.findById(userId).then((response) => {
        res.status(200).send({ status: "fetched" })
    }).catch((err) => {
        res.status(500).send({ status: err })
    })


})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Ticket.findByIdAndDelete(userId).then((resD) => {
        res.status(200).send({ status: "deleted", resD })
    }).catch((err) => {
        res.status(500).send({ status: err })
    })
})


//for the payment function

router.post(`/create-checkout-session`, async (req, res) => {
    try {
        const { tickets } = req.body;
        const lineItems = tickets.map((ticket) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `Ticket :${ticket.trainClass}Class`,
                    images: [ticket.image]
                },
                unit_amount: Math.round(ticket.totalAmount * 100),

            },
            quantity: ticket.qty,

        }));
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/paymentSuccess',
            cancel_url: 'http://localhost:3000/paymentCancel'

        })
        res.json({ id: session.id })

    } catch (error) {
        res.status(500).send({ error: error.message })
    }
})


module.exports = router;