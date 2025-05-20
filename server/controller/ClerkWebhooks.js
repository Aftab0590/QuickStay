import { data } from "react-router-dom";
import User  from "../models/user.js";

import {Webhook} from "svix";


const  clerkWebhooks = async (req, res)=>{
    try {
        //Create a svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

       //Getting headers 
       const headers = {
        "svix-id" : re.header["svix-id"],
        "svix-timestamps" : re.header["svix-timestamps"],
        "svix-signature" : re.header[" svix-signature"],

       };
       //Verifying Headers
       await whook.verify(JSON.stringify(re.body),)

       //Getting Data from reuest body 
       const userData ={
        _id:data.id,
        email: data.email_address[0].email_address,
        username: data.firts_name +" " + data.last_name,

       }

       //Switch Cases for different Events
       switch (key) {
        case "user.created":{
            await User.create(userData);
           break;
        }
         case "user.updated":{
            await User.findByIdAndUpdate(data.id, userData);
           break;
        }
         case "user.deleted":{
            await User.findByIdAndDelete(data.id, );
           break;
        }
        

        default:
        break;
       }
       res.json({success: true, message: "Webhook Recieved"})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message: error.message})
    }
}

export default clerkWebhooks;
