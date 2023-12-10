const express = require("express");
const app = express()
const mongoose = require("mongoose");
const Article = require("./models/Article");
//mongodb+srv://karrar:<password>@cluster0.bqutzx1.mongodb.net/?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://karrar:admin11@cluster0.bqutzx1.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected succssfully");

}).catch((error)=>{
    console.log("error connection with DB",error);
})

app.use(express.json());

app.get("/hello",(req,res)=>{

    res.send("hello")
});
//=============ARTICLE END POINT =============
app.post("/articles",async (req, res) => {
    const newArticle = new Article()
    newArticle.title = " my first Articles"
    newArticle.body= "this is the body"
    newArticle.numberoflikes = 100;
    await newArticle.save();

    res.send("the newArticle has been stord successflly");
});
app.post("/articless",async (req, res) => {
    const newArticle = new Article()
    const artTitle=req.body.articleTitle // ياخذ القيمة من متغير في البودي في بوست من شرط نفس الاسم
    const artbody=req.body.articleBody
   // res.send(artTitle +""+ artbody)
   // return;
    newArticle.title = artTitle
    newArticle.body= artbody
    newArticle.numberoflikes = 0;
    await newArticle.save();

   // res.send("the newArticle has been stord successflly");
   res.json(new Article);
});
    // Create a new article and save it to the database
    app.post("/articlesss",async (req, res) => {
        const newArticle = new Article()
   
       // res.send(artTitle +""+ artbody)
       // return;
        newArticle.title =req.body.articleTitle // ياخذ القيمة من متغير في البودي في بوست من شرط نفس الاسم
        newArticle.body=req.body.articleBody
        newArticle.numberoflikes = 0;
        await newArticle.save();
    
       // res.send("the newArticle has been stord successflly");
       res.json(newArticle);
    });
    app.get("/articlesss",async(req,res)=>{
        const articles=await Article.find();
        console.log("the articles are",articles);
        res.json(articles);

    });
    app.get("/articlesss/:articleId",async(req,res)=>{
        const id =req.params.articleId;
       try {
            const article = await Article.findById(id);
            res.json(article);
            return;

        }catch (error){
            console.log("error while reading of id ",id);
            return  res.send("error");
        }
 

    });
    app.get("/articlesssa/:articleid",async(req,res)=>{
        const id =req.params.articleid;
        const n =await Article.findById(id);
        res.json(n);

    });
    
    app.delete("/article1/:articleId",async(req,res)=>{
        const id =req.params.articleId;
       try {
            const article = await Article.findByIdAndDelete(id);
            res.json(article);
            return;

        }catch (error){
            console.log("error while reading of id ",id);
            return  res.send.json(error);
        }
     
    });
    app.get("/showarticles",async(reg,res)=>{
        const articles =await Article.find();
        res.render("articles.ejs",{
            allarticles:articles


        });




    });


app.listen(3000,()=>{
console.log("I am listening in port 3000");

});
app.get("/karrar",(req,res)=>{

    res.send("karrar")
});
app.put("/test",(req,res)=>{

    res.send("hello world")
});
app.delete("/delete",(req,res)=>{
    res.send("delete request")
});
app.get("/number",(req,res)=>{
let numbers=""
for(let i=0;i<100;i++)
{
    numbers +=i+ '-';
}
    res.send(`the numbers are :${numbers}`)
});

app.get("/findsummation/:number1/:number2",(req,res)=>{
    console.log(req.params);
    const num1 =req.params.number1
    const num2 =req.params.number2
    const sum = Number(num1)+ Number(num2);
    res.send(` the sum  is : ${sum}`);

});
app.get("/sayhello",(req,res)=>{
   console.log(req.body);
   console.log(req.query);
  
    res.send(`hello ${req.body.name} , age is : ${req.query.age}`);

});
app.get("/sayhello5",(req,res)=>{
 //console.log(req.body);
 //console.log(req.query);
  // res.send(`hello ${req.body.name},age is :${req.query.age}`);
  res.json ({
  name:req.body.name,
  age: req.query.age,
  languge: "arbic",
  month: req.query.month

  
});
 });
 app.get("/hello1",(req,res)=>{

    //res.sendFile(__dirname+"/views/numbers.html")

    let numbers=""
for(let i=0;i<100;i++)
{
    numbers +=i+ '-';
}
    res.render("numbers.ejs",{

        name :"Karrar",
        numbers:numbers
    })
});
 