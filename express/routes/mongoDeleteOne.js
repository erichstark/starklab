var mongoUtil = require('../mongoUtil');

module.exports = function (req, res) {
    console.log("mongo remove one");

    mongoUtil.connectToServer(function (err) {
        if (err == null) {
            mongoUtil.removeSimulation(req.params.id, function (err, result) {
                if (err == null) {
                    res.sendStatus(200);
                } else {
                    res.sendStatus(500);
                }
            })
        }
    });
};