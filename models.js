const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotingDojodb", { useNewUrlParser : true });

const QuoteSchema = new mongoose.Schema({
    name : { type : String, required : [true, "You must enter your name."] },
    quote : { type : String, required : [true, "You must enter a quote."] }
}, 
{
    timestamps : true
});

const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;