const controller = require("./controller");

module.exports = (app) => {
    app.get("/", controller.Index);
    app.post("/quotes", controller.Process);
    app.get("/quotes", controller.Quotes);
};