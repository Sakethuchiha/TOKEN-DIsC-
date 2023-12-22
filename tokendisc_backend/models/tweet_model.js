import mongoose from "mongoose";

const tweetschema = new mongoose.Schema(
    {
        // username:{
        //     type:String,
        //     required:true,
        // },
        // userid:{
        //     type:String,
        //     required:true,
        //     index:{unique:true},
        // },
        // likes:{
        //     type:Number,
        //     required:true,
        // },
        tweet:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    },
);


export const Tweetsmodel=mongoose.model("Tweet",tweetschema);