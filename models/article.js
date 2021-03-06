var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  headline:{
    type: String,
    required: true,
    unique: true
  },
  summary:{
    type: String,
    required: true,
    unique: true
  },
  link: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    unique: true
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments"
    }
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
  // Add comments section 
}); 

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;