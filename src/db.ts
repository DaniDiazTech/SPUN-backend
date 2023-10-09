const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/spun", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
