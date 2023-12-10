const mongoose = require("mongoose");
const Schema = mongoose.Schema
const ArticleSchema = new Schema({

    title: String,
    body:String,
    numberoflikes:Number
})
//const Article = model("Article",ArticleSchema);
module.exports=mongoose.model('Article',ArticleSchema) //اسم جدوال, مخطط
//module.exports= Article;