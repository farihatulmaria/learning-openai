// the web server 
const OpenAI=require('openai')
const { Configuration, OpenAIApi } = OpenAI; 
const configuration = new Configuration({
    organization: "org-czWAO914vpNbBGoL8idI9FfW",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
const experss = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = experss();
const port = 3001;
app.use(bodyParser.json());
app.use(cors())


app.post('/',(req,res)=>{
    res.json({
        message:"Hello"
    })
})
app.listen(port,()=>{
    console.log(`running on ${port}`);
})