const nodeMailer = require("../config/nodemailer");

module.exports.gotMail=(name,mail,sub,msg)=>{
    console.log("inside mailer");
    nodeMailer.transporter.sendMail({
        
        from: 'mrunknown.0086@gmail.com',
        to: 'rpbarmaiya@gmail.com',
        subject: sub,
        html:`<h1>hey Someone wants to contact you </h1>
                <h2>Here Details</h2>
                <h3> Name: ${name} </h3>
                <h3> Email: ${mail}  </h3>
                <h3> Message: ${msg}  </h3>
        
        `
    },
    (err,info)=>{
        if(err){
            console.log('error in sending mail ',err);
        }
        console.log(info);
        return
    }
    );
}