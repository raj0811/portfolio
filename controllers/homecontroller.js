const reciveMailer = require('../mailers/recivedMailer')
const gotMailer = require('../mailers/gotMail')

module.exports.home=function(req,res){
    return res.render('home',{
        title: "Portfolio"
    })
}

module.exports.about= function(req,res){
    return res.render('about',{
        title: "About me"
    });
}
module.exports.projects=function(req,res){
    return res.render('projects',{
        title: "Projects"
    })
}

module.exports.contact=function(req,res){
    return res.render('contact',{
        title: "contact me"
    })
}

module.exports.sendMsg = function(req,res){
    var name = req.body.name;
    var mail = req.body.email;
    var msg = req.body.msg;
    var sub = req.body.subject;

    console.log(sub);
    gotMailer.gotMail(name,mail,sub,msg)

    reciveMailer.reciveMail(name,mail,sub)
    req.flash('success','your message Recived');
   
    return res.redirect('back')

}

module.exports.mail=function(req,res){
    return res.render('./mailers/thank',{
        title: 'mail'
    })
}