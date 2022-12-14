const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ArticleSchema = new Schema (
    {
        category: [{
            type: Schema.Types.ObjectId,
            ref: "Category",
        }],
        tag: [{
            type: Schema.Types.ObjectId,
            ref: "Tag",
        }],
        title: {
            type: String,
            required: true,
        },
       
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        body: {
            type: String,
            required: true,
        },
        viewsCount: {
            type: Number,
            default: 0,
        },
        // comments: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "Comment",
        // }],
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        status:{
            type: String,
            default: 'public',
            enum: ['public', 'private']
        },
        
    }
);

ArticleSchema.plugin(uniqueValidator);
module.exports = model("Articles", ArticleSchema);