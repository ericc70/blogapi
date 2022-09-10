const { Schema, model } = require("mongoose");


const CategorySchema = new Schema (
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


module.exports = model("Category", CategorySchema);