// the web server 
const OpenAI=require('openai')
const { Configuration, OpenAIApi } = OpenAI; 

const experss = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = experss();
const port = 3001;

const configuration = new Configuration({
    organization: "org-czWAO914vpNbBGoL8idI9FfW",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();


app.use(bodyParser.json());
app.use(cors())


app.post('/',async (req,res)=>{
    const { message } = req.body;

    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Pertend you are Steve Jobs. Answer with motivationl content. 
        Steve: How can I help you ?
        Person: I want some motivation 
        Steve: You are awesome just the way you are /
        Person: ${message}?
        Steve:`,
        max_tokens: 70,
        temperature: 0,
    });

    if(response.data.choices[0].text){
        res.json({message:response.data.choices[0].text})
    }
})
app.listen(port,()=>{
    console.log(`running on ${port}`);
})