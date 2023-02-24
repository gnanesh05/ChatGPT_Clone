import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY 
})
const openai = new OpenAIApi(configuration)

app.post("/", async(req,res)=>{
    const prompt = req.body.prompt;
    try {
        const response = await openai.createCompletion({
            model:"text-davinci-003",
            prompt:prompt,
            temperature:0,
            max_tokens:100,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0
           })
        
        return res.status(200).json({bot: response.data.choices[0].text})
    } 
    catch (error) {
        console.error(error)
        return res.status(500).json({error})
    }
    
})


app.listen(5000,()=>{
    console.log("AI server running")
})