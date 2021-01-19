const mongoose = require("mongoose");
module.exports = function() {
    mongoose.connect('mongodb+srv://admin:admin@webstore.kizcv.mongodb.net/webstore?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    }).then(res => console.log("connected")).catch(err => console.log(err))
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}