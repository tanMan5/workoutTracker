const router = require("express").Router();
const path = require("path");

// linking directly to html and set url

router.get("/exercise", (req, res) => {
    res.sendfile(path.join(__dirname, "../public/exercise.html"));
});

// need to create one for stats...


module.exports = router;