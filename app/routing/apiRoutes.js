//From Hot Restaurant example
var path = require('path');
var friends = require("../data/friends.js");

// Routes
module.exports = function (app) {
    // API GET Request
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // Capturing input object
        var newFriend = req.body;
        var friendResponse = newFriend.scores;

        // Identifying the match
        var match = {
            name: "",
            photo: "",
            difference: 1000 //Large difference
        };

        for (var i = 0; i < friends.length; i++) {
            var matchDifference = 0;
            for (var j = 0; j < friendResponse.length; j++) {
                matchDifference += Math.abs(friends[i].scores[j] - friendResponse[j]);

                if (matchDifference <= match.difference) {
                    match.name = friends[i].name;
                    match.photo = friends[i].photo;
                    match.difference = matchDifference;
                }
            }
        }

        friends.push(newFriend);

        res.json(match);

    });
};