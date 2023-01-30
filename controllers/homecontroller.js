module.exports.home=function(req,res){
    return res.render('home')
}

module.exports.about= function(req,res){
    return res.render('about');
}
module.exports.projects=function(req,res){
    return res.render('projects')
}