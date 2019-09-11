//get route with url api/friends
//post route with /api/friends

app.get("/api/friends", function(req, res) {
    res.send("Welcome to Friend Finder!");
  });