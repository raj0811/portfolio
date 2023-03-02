const nodemailer = require('nodemailer');
const ejs=require('ejs');
const path = require('path');
require('dotenv').config()
const env=require('./enviroment')


// let transporter = nodemailer.createTransport(env.smtp);

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.gmail_user,
        pass: process.env.app_pass
    }
});






let renderTemplate = (data, relativePath)=>{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err,template){
            if(err){
                console.log("error in rendering template", err);
                return;

              
            }
            mailHTML= template;
        }

        

    )
    return mailHTML;

}

module.exports={
    transporter: transporter,
    renderTemplate: renderTemplate
}