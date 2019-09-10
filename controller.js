const Quote = require("./models");

module.exports = {
    Index : (req, res) => {
        res.render("Index");
    },
    Process : (req, res) => {
        const quote = new Quote();
        quote.name = req.body.name;
        quote.quote = req.body.quote;
        quote.save()
            .then((newQuote) => {
                return res.redirect('/quotes', newQuote);
            })
            .catch((err) => {
                return res.render("/");
            })
        res.redirect("/quotes")
    },
    Quotes : (req, res) => {
        Quote.find().sort({ createdAt : -1 })
        .then((data) => {
            res.render("Quotes", { quotes : data })
            })
            .catch(err => console.log(err));
    },
}