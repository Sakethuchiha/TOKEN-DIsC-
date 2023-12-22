import express from "express";
import { Tweetsmodel } from "../models/tweet_model.js";

const tweetrouter = express.Router();

tweetrouter.post("/",async(req,res) => {
    try{
        // const { username, userid, tweet } = req.body;
        const {tweet} = req.body;
        // const id = await Some.findOne({userid});
        if (!req.body.tweet){
            return res.status(400).send({message: 'All fields are required'})
        }
        const newtweet = {
            tweet:req.body.tweet,
        };
        const Tweet = await  Tweetsmodel.create(newtweet);
    } catch(error){
        return res.status(500).send({message:error.message});
    }
});

tweetrouter.get("/",async(req,res) => {
    try{
        // const { tweet } = req.body;
        const tweets = await Tweetsmodel.find({});
        return res.status(200).json({
            tweet: tweets.tweet,
        })
    }catch(error){
        return res.status(500).send({message:error.message});
    }
});

export default tweetrouter;