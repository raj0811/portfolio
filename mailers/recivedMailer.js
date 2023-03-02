const nodeMailer = require("../config/nodemailer");

module.exports.reciveMail=(name,mail,sub)=>{

    let htmlString = nodeMailer.renderTemplate({name:name,mail:mail,sub:sub},'thank.ejs')
    nodeMailer.transporter.sendMail({
        from: 'mrunknown.0086@gmail.com',
        to: mail,
        subject: "Thanks ",
        html:htmlString
        // html:`<h1>hey ${name} 
        // this is an autogenrated mail <br>
        // you recive this because you  try to contacting me(Raj) Regarding ${sub} <br>
        // <br>
        // Thankyou For Contacting me <br>
        // I will contact you ASAP  </h1>`
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