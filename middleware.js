const reqFilter = (req, res, next) => {
    console.log("req filter")
    if (!req.query.age) {
        res.send("please provide age")
    }
    else if (req.query.age < 18) {
        res.send("you can not acces this page")
    }
    else {
        next();

    }
}
module.exports = reqFilter