var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || "mongolab-clear-84219");