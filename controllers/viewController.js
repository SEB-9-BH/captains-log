const RESOURCE_PATH = '/logs'
const viewController = {
    //index
    index(req, res,next) {
        res.render('logs/Index',
        res.locals.data
        )
    }, 
    //New
newView(req,res,next) {
    res.render('logs/New')
},
    //Destroy
    redirectHome(req, res, next){
     res.redirect(RESOURCE_PATH)
    },
    //Update
    redirectShow( req, res, next) {
        res.redirect(RESOURCE_PATH + `/${req.params.id}`)
    },
    //Create
        //res.redirect(`logs/${createdLog._id}`)
    //Edit
    edit(req, res,next) {
        res.render('logs/Edit', res.locals.data)  
    }, 
    //Show
    show(req, res, next ) {
            res.render('logs/Show', res.locals.data)
    }
}

//Exporting view controller to use in server.js
module.exports = viewController