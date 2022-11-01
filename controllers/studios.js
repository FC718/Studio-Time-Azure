const Studio = require("../models/studio");

module.exports = {
    about,
    index,
    new: newStudio,
    create,
    show   
}

function index(req, res) {
    // Studo.find is searching / querying through a studio model 
    // to get the information.
    Studio.find({ }, function(err, studios){
    res.render('studios/index', {title: '', studios})
    })
}

function about(req, res) {
    console.log('about');
    res.render('studios/about', {title: 'ABOUT PAGE'} )
}

// Takes me to a page
function newStudio (req, res) {
    res.render('studios/new', {title: 'New Studios'} )

}

function create(req, res) {
    res.redirect('/studios')
}

function show(req, res) {
    res.render('studios/show', { title: "Studio Detail" })
}