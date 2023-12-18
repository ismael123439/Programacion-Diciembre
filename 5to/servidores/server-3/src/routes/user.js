const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

router.get("/users", (req, res) => {
   // res.send("Welcome new user");
    const user = userSchema(req.body);
    user.save()
        .then((data) => res.json(data)
        )
        .catch((error) => res.json({ message: error }))
})

module.exports = router;