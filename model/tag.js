const { Schema, model } = require("mongoose");


const TagSchema = new Schema (
    {
       
        name: {
            type: String,
            required: true,
        },
       
       
        description: {
            type: String,
            required: true,
        },

        picture: {
            type: String
            
        }
       

     
        
    }
);


module.exports = model("Tag", TagSchema);