var path = require('path');
var friends = require("../data/friends.js");

// Routing info
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Below code handles when a user submits a form and thus submits data to the server.
    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;

        var friendResponse = newFriend.scores;

        var match = {

            name: "",
            photo: "",
            //difference = 500
        };


        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendResponse.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - friendResponse[j]);

                if (totalDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = totalDifference;
                }
            }
        }

        friends.push(newFriend);

        res.json(match);
    });

};