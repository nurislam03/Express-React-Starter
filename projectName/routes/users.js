var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
      {id: 1, firstName: "nur", lastName: "islam"},
      {id: 2, firstName: "nur1", lastName: "islam2"},
      {id: 3, firstName: "nur3", lastName: "islam3"}
  ]);
});

module.exports = router;
