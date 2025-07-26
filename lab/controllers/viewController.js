const { estimatedDocumentCount } = require("../models/log")

const RESOURSE_PATH="/logs"

const viewController= 
{
 index(req,res,next)
 {
    res.render("logs/Index",res.locals.data)
 },

 newView (req,res,next)
 {
    res.render("logs/New",res.locals.data)
 },
 redirectHome (req,res,next)
 {
    res.redirect(RESOURSE_PATH)
 },
 redirectShow (req,res,next)
 {
    res.redirect(`${RESOURSE_PATH}/${req.params.id}`)
 },
 show(req,res,next)
 {
    res.render("logs/Show", res.locals.data)
 },
 edit(req,res,next)
 {
    res.render("logs/Edit",res.locals.data)
 },
}



module.exports= viewController